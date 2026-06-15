# AI Models Cost Board

A Vite React dashboard for comparing public API pricing across major AI model providers. It includes American, Chinese, European, and specialist APIs such as Z.AI and Moonshot/Kimi, with rows for text, reasoning, multimodal, image, audio, video, document, embedding, rerank, and tooling prices.

## Setup

```bash
npm install
npm run dev
```

Build the static app with:

```bash
npm run build
```

The production app is fully static. It does not need a database, backend, or runtime API calls.

## Refreshing Pricing Data

Pricing rows are generated into `src/data/pricing.generated.ts`:

```bash
npm run refresh-prices
```

Run the refresh command before building or deploying. It checks the managed official provider URLs, stamps each row with `lastChecked`, and marks source availability when at least one official page for that provider is reachable. Vendor pricing pages vary widely, so the rows are curated from official sources instead of pretending every price can be safely scraped. If every source check for a provider fails, the dashboard keeps the row but marks it as `source-unavailable`.

## Managing Provider Pages

Official provider pages live in `src/data/providerSources.json`. The dashboard's **Sources** view displays this registry as static links. Edit the JSON file to change provider pages.

The refresh script reads from this provider-page registry, so JSON edits are used by the next refresh.

## GitHub Pages

The app uses relative asset paths, so the generated `dist/` folder can be published from any GitHub Pages path:

```bash
npm run refresh-prices
npm run build
```

The repository includes a GitHub Actions workflow that builds and deploys `dist/`. In the repository Pages settings, set **Build and deployment** source to **GitHub Actions**.

## Data Notes

Token prices are normalized to USD per 1M tokens when a provider publishes that unit. Media and specialist products keep their native public units, such as USD per image, minute, hour, character, page, request, generated second, or provider credits.

The dashboard is static after build and does not need a backend at runtime.
