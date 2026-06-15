export type Modality =
  | "Text"
  | "Reasoning"
  | "Multimodal"
  | "Embedding"
  | "Rerank"
  | "Image"
  | "Audio"
  | "Video"
  | "Tooling"
  | "Document";

export type SourceStatus = "checked" | "manual" | "source-unavailable";

export interface PricePoint {
  label: string;
  value: number | null;
  unit: string;
}

export interface PricingRow {
  id: string;
  provider: string;
  model: string;
  country: string;
  region: string;
  modality: Modality;
  contextWindow: string;
  input: PricePoint | null;
  cachedInput: PricePoint | null;
  output: PricePoint | null;
  extra: PricePoint[];
  notes: string;
  sourceUrl: string;
  sourceLabel: string;
  sourceStatus: SourceStatus;
  lastChecked: string;
}

export interface ProviderPage {
  label: string;
  url: string;
  kind: "pricing" | "models" | "docs";
  primary: boolean;
}

export interface ProviderSource {
  id: string;
  provider: string;
  country: string;
  region: string;
  pages: ProviderPage[];
}
