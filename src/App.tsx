import {
  ArrowUpDown,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  DatabaseZap,
  ExternalLink,
  Filter,
  Gauge,
  Globe2,
  Layers3,
  Link2,
  Plus,
  RefreshCw,
  Save,
  Search,
  Settings2,
  ShieldAlert,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { generatedAt, pricingRows } from "./data/pricing.generated";
import providerSourceSeed from "./data/providerSources.json";
import type { PricePoint, ProviderPage, ProviderSource, PricingRow } from "./types";

type SortKey = "provider" | "model" | "input" | "output" | "modality";
type ViewKey = "board" | "sources";

const allOption = "All";
const initialSources = providerSourceSeed as ProviderSource[];

function uniqueValues(key: keyof PricingRow) {
  return [allOption, ...Array.from(new Set(pricingRows.map((row) => String(row[key])))).sort()];
}

function formatMoney(point: PricePoint | null) {
  if (!point || point.value === null) {
    return "N/A";
  }

  const value =
    point.value >= 1
      ? point.value.toLocaleString(undefined, { maximumFractionDigits: 3 })
      : point.value.toLocaleString(undefined, { maximumFractionDigits: 6 });

  return `$${value}`;
}

function priceForSort(point: PricePoint | null) {
  return point?.value ?? Number.POSITIVE_INFINITY;
}

function App() {
  const [view, setView] = useState<ViewKey>("board");
  const [query, setQuery] = useState("");
  const [provider, setProvider] = useState(allOption);
  const [region, setRegion] = useState(allOption);
  const [modality, setModality] = useState(allOption);
  const [sortKey, setSortKey] = useState<SortKey>("provider");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState("");

  const providers = useMemo(() => uniqueValues("provider"), []);
  const regions = useMemo(() => uniqueValues("region"), []);
  const modalities = useMemo(() => uniqueValues("modality"), []);

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return pricingRows
      .filter((row) => {
        const matchesQuery =
          !normalizedQuery ||
          [row.provider, row.model, row.country, row.region, row.modality, row.notes]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);

        return (
          matchesQuery &&
          (provider === allOption || row.provider === provider) &&
          (region === allOption || row.region === region) &&
          (modality === allOption || row.modality === modality)
        );
      })
      .sort((a, b) => {
        if (sortKey === "input") {
          return priceForSort(a.input) - priceForSort(b.input);
        }

        if (sortKey === "output") {
          return priceForSort(a.output) - priceForSort(b.output);
        }

        return String(a[sortKey]).localeCompare(String(b[sortKey]));
      });
  }, [modality, provider, query, region, sortKey]);

  const stats = useMemo(() => {
    const providerCount = new Set(pricingRows.map((row) => row.provider)).size;
    const modalityCount = new Set(pricingRows.map((row) => row.modality)).size;
    const checkedCount = pricingRows.filter((row) => row.sourceStatus === "checked").length;
    const cheapestText = pricingRows
      .filter((row) => row.input?.unit === "USD / 1M tokens")
      .sort((a, b) => priceForSort(a.input) - priceForSort(b.input))[0];

    return { providerCount, modalityCount, checkedCount, cheapestText };
  }, []);

  async function handleRefreshPrices() {
    setIsRefreshing(true);
    setRefreshMessage("");

    try {
      const response = await fetch("/api/refresh-prices", { method: "POST" });
      const result = (await response.json()) as { ok?: boolean; stdout?: string; stderr?: string; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || result.stderr || "Refresh failed.");
      }

      setRefreshMessage(result.stdout?.trim() || "Refresh complete.");
      window.setTimeout(() => window.location.reload(), 900);
    } catch (error) {
      setRefreshMessage(error instanceof Error ? error.message : "Refresh failed.");
    } finally {
      setIsRefreshing(false);
    }
  }

  return (
    <main className="shell">
      <section className="hero" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            API cost intelligence
          </p>
          <h1 id="page-title">AI Models Cost Board</h1>
          <p className="lede">
            Compare common API models across American, Chinese, European, and specialist providers with
            token, media, search, and dedicated-instance pricing in one scan-friendly board.
          </p>
        </div>
        <div className="hero-meta" aria-label="Dataset status">
          <span>
            <CalendarDays size={16} aria-hidden="true" />
            Generated {generatedAt}
          </span>
          <span>
            <CheckCircle2 size={16} aria-hidden="true" />
            {stats.checkedCount}/{pricingRows.length} source checks
          </span>
        </div>
      </section>

      <section className="actionBar" aria-label="App actions">
        <div className="viewSwitch" role="tablist" aria-label="Views">
          <button className={view === "board" ? "active" : ""} onClick={() => setView("board")} type="button">
            <DatabaseZap size={16} aria-hidden="true" />
            Board
          </button>
          <button className={view === "sources" ? "active" : ""} onClick={() => setView("sources")} type="button">
            <Settings2 size={16} aria-hidden="true" />
            Sources
          </button>
        </div>
        <button className="primaryAction" disabled={isRefreshing} onClick={handleRefreshPrices} type="button">
          <RefreshCw className={isRefreshing ? "spin" : ""} size={16} aria-hidden="true" />
          {isRefreshing ? "Refreshing" : "Refresh prices"}
        </button>
      </section>

      {refreshMessage && <p className="statusLine">{refreshMessage}</p>}

      {view === "board" ? (
        <>
          <section className="stats" aria-label="Pricing summary">
            <Metric icon={<Globe2 size={20} />} label="Providers" value={stats.providerCount.toString()} />
            <Metric icon={<Layers3 size={20} />} label="Modalities" value={stats.modalityCount.toString()} />
            <Metric icon={<Gauge size={20} />} label="Rows" value={pricingRows.length.toString()} />
            <Metric
              icon={<ShieldAlert size={20} />}
              label="Lowest token input"
              value={
                stats.cheapestText ? `${stats.cheapestText.provider} ${formatMoney(stats.cheapestText.input)}` : "N/A"
              }
            />
          </section>

          <section className="controls" aria-label="Board controls">
            <label className="searchBox">
              <Search size={18} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search provider, model, country, notes..."
                type="search"
              />
            </label>

            <SelectControl label="Provider" value={provider} options={providers} onChange={setProvider} />
            <SelectControl label="Region" value={region} options={regions} onChange={setRegion} />
            <SelectControl label="Modality" value={modality} options={modalities} onChange={setModality} />
            <label className="selectWrap">
              <span>
                <ArrowUpDown size={14} aria-hidden="true" />
                Sort
              </span>
              <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}>
                <option value="provider">Provider</option>
                <option value="model">Model</option>
                <option value="modality">Modality</option>
                <option value="input">Input price</option>
                <option value="output">Output price</option>
              </select>
            </label>
          </section>

          <section className="board" aria-label="AI model pricing rows">
            <div className="boardHeader">
              <div>
                <p className="eyebrow compact">
                  <Filter size={14} aria-hidden="true" />
                  {filteredRows.length} matching rows
                </p>
                <h2>Model pricing</h2>
              </div>
              <p>All prices are normalized where possible; media and specialist APIs keep their native units.</p>
            </div>

            <div className="cards">
              {filteredRows.map((row) => (
                <PriceCard key={row.id} row={row} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <SourceManager />
      )}
    </main>
  );
}

function SourceManager() {
  const [sources, setSources] = useState<ProviderSource[]>(initialSources);
  const [isSaving, setIsSaving] = useState(false);
  const [sourceMessage, setSourceMessage] = useState("");

  function updateSource(sourceIndex: number, nextSource: ProviderSource) {
    setSources((current) => current.map((source, index) => (index === sourceIndex ? nextSource : source)));
  }

  function updatePage(sourceIndex: number, pageIndex: number, nextPage: ProviderPage) {
    setSources((current) =>
      current.map((source, currentSourceIndex) => {
        if (currentSourceIndex !== sourceIndex) {
          return source;
        }

        const pages = source.pages.map((page, currentPageIndex) => {
          if (currentPageIndex === pageIndex) {
            return nextPage;
          }

          return nextPage.primary ? { ...page, primary: false } : page;
        });

        return { ...source, pages };
      })
    );
  }

  function addPage(sourceIndex: number) {
    setSources((current) =>
      current.map((source, index) => {
        if (index !== sourceIndex) {
          return source;
        }

        return {
          ...source,
          pages: [
            ...source.pages,
            {
              label: "Official pricing page",
              url: "https://",
              kind: "pricing",
              primary: source.pages.length === 0,
            },
          ],
        };
      })
    );
  }

  function removePage(sourceIndex: number, pageIndex: number) {
    setSources((current) =>
      current.map((source, index) => {
        if (index !== sourceIndex || source.pages.length === 1) {
          return source;
        }

        const pages = source.pages.filter((_, currentPageIndex) => currentPageIndex !== pageIndex);
        if (!pages.some((page) => page.primary)) {
          pages[0] = { ...pages[0], primary: true };
        }

        return { ...source, pages };
      })
    );
  }

  async function saveSources() {
    setIsSaving(true);
    setSourceMessage("");

    try {
      const response = await fetch("/api/provider-sources", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sources),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Save failed.");
      }

      setSourceMessage("Saved official provider pages.");
    } catch (error) {
      setSourceMessage(error instanceof Error ? error.message : "Save failed.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="sourcesPage" aria-label="Provider source pages">
      <div className="boardHeader">
        <div>
          <p className="eyebrow compact">
            <BookOpen size={14} aria-hidden="true" />
            {sources.length} providers
          </p>
          <h2>Official provider pages</h2>
        </div>
        <button className="primaryAction" disabled={isSaving} onClick={saveSources} type="button">
          <Save size={16} aria-hidden="true" />
          {isSaving ? "Saving" : "Save sources"}
        </button>
      </div>

      {sourceMessage && <p className="statusLine">{sourceMessage}</p>}

      <div className="sourceList">
        {sources.map((source, sourceIndex) => (
          <article className="sourcePanel" key={source.id}>
            <div className="sourceHeading">
              <div>
                <p>{source.country}</p>
                <h3>{source.provider}</h3>
              </div>
              <span>{source.region}</span>
            </div>

            <div className="sourceFields">
              <label>
                Provider
                <input
                  value={source.provider}
                  onChange={(event) => updateSource(sourceIndex, { ...source, provider: event.target.value })}
                />
              </label>
              <label>
                Country
                <input
                  value={source.country}
                  onChange={(event) => updateSource(sourceIndex, { ...source, country: event.target.value })}
                />
              </label>
              <label>
                Region
                <input
                  value={source.region}
                  onChange={(event) => updateSource(sourceIndex, { ...source, region: event.target.value })}
                />
              </label>
            </div>

            <div className="pages">
              {source.pages.map((page, pageIndex) => (
                <div className="pageRow" key={`${source.id}-${pageIndex}`}>
                  <label>
                    Label
                    <input
                      value={page.label}
                      onChange={(event) => updatePage(sourceIndex, pageIndex, { ...page, label: event.target.value })}
                    />
                  </label>
                  <label className="urlField">
                    <Link2 size={14} aria-hidden="true" />
                    URL
                    <input
                      value={page.url}
                      onChange={(event) => updatePage(sourceIndex, pageIndex, { ...page, url: event.target.value })}
                    />
                  </label>
                  <label>
                    Kind
                    <select
                      value={page.kind}
                      onChange={(event) =>
                        updatePage(sourceIndex, pageIndex, { ...page, kind: event.target.value as ProviderPage["kind"] })
                      }
                    >
                      <option value="pricing">pricing</option>
                      <option value="models">models</option>
                      <option value="docs">docs</option>
                    </select>
                  </label>
                  <label className="primaryCheck">
                    <input
                      checked={page.primary}
                      onChange={(event) =>
                        updatePage(sourceIndex, pageIndex, { ...page, primary: event.target.checked })
                      }
                      type="checkbox"
                    />
                    Primary
                  </label>
                  <button
                    aria-label={`Remove ${page.label}`}
                    className="iconButton"
                    disabled={source.pages.length === 1}
                    onClick={() => removePage(sourceIndex, pageIndex)}
                    type="button"
                  >
                    <Trash2 size={16} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>

            <button className="secondaryAction" onClick={() => addPage(sourceIndex)} type="button">
              <Plus size={16} aria-hidden="true" />
              Add page
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="metric">
      <span className="metricIcon">{icon}</span>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SelectControl({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="selectWrap">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function PriceCard({ row }: { row: PricingRow }) {
  return (
    <article className="priceCard">
      <div className="cardTop">
        <div>
          <p>{row.provider}</p>
          <h3>{row.model}</h3>
        </div>
        <span className={`status ${row.sourceStatus}`}>{row.sourceStatus.replace("-", " ")}</span>
      </div>

      <div className="tags" aria-label={`${row.model} metadata`}>
        <span>{row.modality}</span>
        <span>{row.region}</span>
        <span>{row.contextWindow}</span>
      </div>

      <div className="priceGrid">
        <PriceCell title="Input" point={row.input} />
        <PriceCell title="Cached" point={row.cachedInput} />
        <PriceCell title="Output" point={row.output} />
      </div>

      {row.extra.length > 0 && (
        <div className="extras">
          {row.extra.map((item) => (
            <span key={`${item.label}-${item.unit}`}>
              {item.label}: <strong>{formatMoney(item)}</strong> {item.unit}
            </span>
          ))}
        </div>
      )}

      <p className="notes">{row.notes}</p>

      <div className="cardFooter">
        <span>Checked {row.lastChecked}</span>
        <a href={row.sourceUrl} target="_blank" rel="noreferrer">
          {row.sourceLabel}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function PriceCell({ title, point }: { title: string; point: PricePoint | null }) {
  return (
    <div>
      <span>{title}</span>
      <strong>{formatMoney(point)}</strong>
      <small>{point?.unit ?? "No public unit"}</small>
    </div>
  );
}

export default App;
