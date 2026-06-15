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
  RefreshCw,
  ScanSearch,
  Search,
  Settings2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { generatedAt, pricingRows } from "./data/pricing.generated";
import providerSourceSeed from "./data/providerSources.json";
import type { PricePoint, ProviderSource, PricingRow } from "./types";

type SortKey = "provider" | "model" | "input" | "output" | "modality";
type ViewKey = "board" | "sources";

const allOption = "All";
const initialSources = providerSourceSeed as ProviderSource[];
const workflowUrl = "https://github.com/brbousnguar/ai-models-costs/actions/workflows/deploy-pages.yml";

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
        <div className="siteActions">
          <button onClick={() => window.location.reload()} type="button">
            <RefreshCw size={16} aria-hidden="true" />
            Reload page
          </button>
          <a href={workflowUrl} target="_blank" rel="noreferrer">
            <ScanSearch size={16} aria-hidden="true" />
            Scan sources
          </a>
        </div>
      </section>

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
  const sources = initialSources;

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
      </div>

      <div className="sourceList">
        {sources.map((source) => (
          <article className="sourcePanel" key={source.id}>
            <div className="sourceHeading">
              <div>
                <p>{source.country}</p>
                <h3>{source.provider}</h3>
              </div>
              <span>{source.region}</span>
            </div>

            <div className="pages">
              {source.pages.map((page, pageIndex) => (
                <div className="pageRow" key={`${source.id}-${pageIndex}`}>
                  <div>
                    <strong>{page.label}</strong>
                    <span>{page.primary ? "Primary" : page.kind}</span>
                  </div>
                  <a href={page.url} target="_blank" rel="noreferrer">
                    {page.url}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
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
