import type { PricingRow } from "../types";

export const generatedAt = "2026-06-17";

export const pricingRows: PricingRow[] = [
  {
    "id": "openai-gpt-5-5",
    "provider": "OpenAI",
    "model": "GPT-5.5",
    "country": "United States",
    "region": "US",
    "modality": "Reasoning",
    "contextWindow": "Vendor calculator lists GPT-5 family context options",
    "input": {
      "label": "Input",
      "value": 5,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cached input",
      "value": 0.5,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 30,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Frontier model for coding and professional work; standard processing price.",
    "sourceLabel": "OpenAI API pricing",
    "sourceUrl": "https://openai.com/api/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "openai-gpt-5-4",
    "provider": "OpenAI",
    "model": "GPT-5.4",
    "country": "United States",
    "region": "US",
    "modality": "Reasoning",
    "contextWindow": "<270K standard pricing note",
    "input": {
      "label": "Input",
      "value": 2.5,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cached input",
      "value": 0.25,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 15,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "More affordable frontier model; batch mode is advertised separately at a discount.",
    "sourceLabel": "OpenAI API pricing",
    "sourceUrl": "https://openai.com/api/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "openai-gpt-5-4-mini",
    "provider": "OpenAI",
    "model": "GPT-5.4 mini",
    "country": "United States",
    "region": "US",
    "modality": "Text",
    "contextWindow": "<270K standard pricing note",
    "input": {
      "label": "Input",
      "value": 0.75,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cached input",
      "value": 0.075,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 4.5,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Mini model positioned for coding, computer use, and subagents.",
    "sourceLabel": "OpenAI API pricing",
    "sourceUrl": "https://openai.com/api/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "openai-gpt-realtime-2",
    "provider": "OpenAI",
    "model": "gpt-realtime-2",
    "country": "United States",
    "region": "US",
    "modality": "Audio",
    "contextWindow": "Realtime session",
    "input": {
      "label": "Audio input",
      "value": 32,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Audio cached input",
      "value": 0.4,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Audio output",
      "value": 64,
      "unit": "USD / 1M tokens"
    },
    "extra": [
      {
        "label": "Text input",
        "value": 4,
        "unit": "USD / 1M tokens"
      },
      {
        "label": "Text output",
        "value": 24,
        "unit": "USD / 1M tokens"
      },
      {
        "label": "Image input",
        "value": 5,
        "unit": "USD / 1M tokens"
      }
    ],
    "notes": "Realtime voice model with separate audio, text, and image token rates.",
    "sourceLabel": "OpenAI API pricing",
    "sourceUrl": "https://openai.com/api/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "openai-gpt-realtime-translate",
    "provider": "OpenAI",
    "model": "gpt-realtime-translate",
    "country": "United States",
    "region": "US",
    "modality": "Audio",
    "contextWindow": "Realtime translation session",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "Translation",
      "value": 0.034,
      "unit": "USD / min"
    },
    "extra": [],
    "notes": "Dedicated live speech translation model for translation sessions.",
    "sourceLabel": "OpenAI API pricing",
    "sourceUrl": "https://openai.com/api/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "openai-gpt-image-2",
    "provider": "OpenAI",
    "model": "GPT-Image-2",
    "country": "United States",
    "region": "US",
    "modality": "Image",
    "contextWindow": "Image tokens",
    "input": {
      "label": "Image input",
      "value": 8,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Image cached input",
      "value": 2,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Image output",
      "value": 30,
      "unit": "USD / 1M tokens"
    },
    "extra": [
      {
        "label": "Text input",
        "value": 5,
        "unit": "USD / 1M tokens"
      },
      {
        "label": "Text cached input",
        "value": 1.25,
        "unit": "USD / 1M tokens"
      }
    ],
    "notes": "Image generation model; actual image cost depends on tokenized size.",
    "sourceLabel": "OpenAI API pricing",
    "sourceUrl": "https://openai.com/api/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "anthropic-opus-4-8",
    "provider": "Anthropic",
    "model": "Claude Opus 4.8",
    "country": "United States",
    "region": "US",
    "modality": "Reasoning",
    "contextWindow": "1M tokens",
    "input": {
      "label": "Input",
      "value": 5,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cache read",
      "value": 0.5,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 25,
      "unit": "USD / 1M tokens"
    },
    "extra": [
      {
        "label": "Cache write",
        "value": 6.25,
        "unit": "USD / 1M tokens"
      }
    ],
    "notes": "Complex agentic coding and enterprise work; 5-minute prompt cache TTL.",
    "sourceLabel": "Claude API pricing",
    "sourceUrl": "https://platform.claude.com/docs/en/about-claude/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "anthropic-sonnet-4-6",
    "provider": "Anthropic",
    "model": "Claude Sonnet 4.6",
    "country": "United States",
    "region": "US",
    "modality": "Text",
    "contextWindow": "1M tokens",
    "input": {
      "label": "Input",
      "value": 3,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cache read",
      "value": 0.3,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 15,
      "unit": "USD / 1M tokens"
    },
    "extra": [
      {
        "label": "Cache write",
        "value": 3.75,
        "unit": "USD / 1M tokens"
      }
    ],
    "notes": "Balanced intelligence, cost, and speed; US-only inference is listed at 1.1x.",
    "sourceLabel": "Claude API pricing",
    "sourceUrl": "https://platform.claude.com/docs/en/about-claude/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "anthropic-haiku-4-5",
    "provider": "Anthropic",
    "model": "Claude Haiku 4.5",
    "country": "United States",
    "region": "US",
    "modality": "Text",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Input",
      "value": 1,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cache read",
      "value": 0.1,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 5,
      "unit": "USD / 1M tokens"
    },
    "extra": [
      {
        "label": "Cache write",
        "value": 1.25,
        "unit": "USD / 1M tokens"
      }
    ],
    "notes": "Cost-efficient Claude model for lower-latency workloads.",
    "sourceLabel": "Claude API pricing",
    "sourceUrl": "https://platform.claude.com/docs/en/about-claude/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "anthropic-web-search",
    "provider": "Anthropic",
    "model": "Claude web search",
    "country": "United States",
    "region": "US",
    "modality": "Tooling",
    "contextWindow": "Per tool use",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "Web search",
      "value": 10,
      "unit": "USD / 1K searches"
    },
    "extra": [],
    "notes": "Search cost is in addition to normal token charges.",
    "sourceLabel": "Claude API pricing",
    "sourceUrl": "https://platform.claude.com/docs/en/about-claude/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "google-gemini-3-flash-preview",
    "provider": "Google",
    "model": "Gemini 3 Flash Preview",
    "country": "United States",
    "region": "Global",
    "modality": "Multimodal",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Text/image/video input",
      "value": 0.5,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Context cache",
      "value": 0.05,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output incl. thinking",
      "value": 3,
      "unit": "USD / 1M tokens"
    },
    "extra": [
      {
        "label": "Audio input",
        "value": 1,
        "unit": "USD / 1M tokens"
      },
      {
        "label": "Audio cache",
        "value": 0.1,
        "unit": "USD / 1M tokens"
      },
      {
        "label": "Search grounding",
        "value": 14,
        "unit": "USD / 1K queries after free tier"
      }
    ],
    "notes": "Paid standard tier; batch and flex prices are lower.",
    "sourceLabel": "Gemini API pricing",
    "sourceUrl": "https://ai.google.dev/gemini-api/docs/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "google-gemini-3-pro-image",
    "provider": "Google",
    "model": "Gemini 3 Pro Image",
    "country": "United States",
    "region": "Global",
    "modality": "Image",
    "contextWindow": "Image generation",
    "input": {
      "label": "Text/image input",
      "value": 2,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Image output",
      "value": 120,
      "unit": "USD / 1M tokens"
    },
    "extra": [
      {
        "label": "Text output",
        "value": 12,
        "unit": "USD / 1M tokens"
      },
      {
        "label": "1K/2K image equivalent",
        "value": 0.134,
        "unit": "USD / image"
      }
    ],
    "notes": "Native image generation; text input/output follows Gemini 3.1 Pro pricing note.",
    "sourceLabel": "Gemini API pricing",
    "sourceUrl": "https://ai.google.dev/gemini-api/docs/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "google-gemini-3-1-flash-tts",
    "provider": "Google",
    "model": "Gemini 3.1 Flash TTS Preview",
    "country": "United States",
    "region": "Global",
    "modality": "Audio",
    "contextWindow": "25 audio tokens/sec",
    "input": {
      "label": "Text input",
      "value": 1,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Audio output",
      "value": 20,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Text-to-speech model; audio token conversion listed as 25 tokens per second.",
    "sourceLabel": "Gemini API pricing",
    "sourceUrl": "https://ai.google.dev/gemini-api/docs/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "xai-grok-4-3",
    "provider": "xAI",
    "model": "Grok 4.3",
    "country": "United States",
    "region": "US",
    "modality": "Text",
    "contextWindow": "1M tokens",
    "input": {
      "label": "Input",
      "value": 1.25,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cached input",
      "value": 0.2,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 2.5,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "xAI default chat model per current pricing table.",
    "sourceLabel": "xAI pricing",
    "sourceUrl": "https://docs.x.ai/developers/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "xai-grok-build-0-1",
    "provider": "xAI",
    "model": "Grok Build 0.1",
    "country": "United States",
    "region": "US",
    "modality": "Reasoning",
    "contextWindow": "256K tokens",
    "input": {
      "label": "Input",
      "value": 1,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cached input",
      "value": 0.2,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 2,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Coding-focused model.",
    "sourceLabel": "xAI pricing",
    "sourceUrl": "https://docs.x.ai/developers/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "xai-grok-imagine-video",
    "provider": "xAI",
    "model": "Grok Imagine Video",
    "country": "United States",
    "region": "US",
    "modality": "Video",
    "contextWindow": "Per generated second",
    "input": {
      "label": "Video input",
      "value": 0.01,
      "unit": "USD / sec"
    },
    "cachedInput": null,
    "output": {
      "label": "480p output",
      "value": 0.05,
      "unit": "USD / sec"
    },
    "extra": [
      {
        "label": "720p output",
        "value": 0.07,
        "unit": "USD / sec"
      },
      {
        "label": "Image input",
        "value": 0.002,
        "unit": "USD / image"
      }
    ],
    "notes": "Text, image, or video to video model.",
    "sourceLabel": "xAI pricing",
    "sourceUrl": "https://docs.x.ai/developers/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "xai-voice-realtime",
    "provider": "xAI",
    "model": "Grok Voice Realtime",
    "country": "United States",
    "region": "US",
    "modality": "Audio",
    "contextWindow": "Realtime session",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "Realtime voice",
      "value": 0.05,
      "unit": "USD / min"
    },
    "extra": [
      {
        "label": "TTS",
        "value": 15,
        "unit": "USD / 1M chars"
      },
      {
        "label": "STT REST",
        "value": 0.1,
        "unit": "USD / hr"
      }
    ],
    "notes": "Voice API prices are unit-based rather than token-only.",
    "sourceLabel": "xAI pricing",
    "sourceUrl": "https://docs.x.ai/developers/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "deepseek-v4-flash-non-thinking",
    "provider": "DeepSeek",
    "model": "deepseek-v4-flash non-thinking",
    "country": "China",
    "region": "China",
    "modality": "Text",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Cache miss input",
      "value": 0.14,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cache hit input",
      "value": 0.0028,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 0.28,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Compatibility alias: deepseek-chat until the listed deprecation date.",
    "sourceLabel": "DeepSeek models and pricing",
    "sourceUrl": "https://api-docs.deepseek.com/quick_start/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "deepseek-v4-flash-thinking",
    "provider": "DeepSeek",
    "model": "deepseek-v4-flash thinking",
    "country": "China",
    "region": "China",
    "modality": "Reasoning",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Cache miss input",
      "value": 0.435,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cache hit input",
      "value": 0.003625,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 0.87,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Compatibility alias: deepseek-reasoner until the listed deprecation date.",
    "sourceLabel": "DeepSeek models and pricing",
    "sourceUrl": "https://api-docs.deepseek.com/quick_start/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "alibaba-qwen3-5-flash",
    "provider": "Alibaba Cloud",
    "model": "qwen3.5-flash",
    "country": "China",
    "region": "Global / China",
    "modality": "Text",
    "contextWindow": "<=128K tier shown",
    "input": {
      "label": "Input",
      "value": 0.029,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Output",
      "value": 0.287,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Tiered pricing increases for larger request sizes; row shows the first tier.",
    "sourceLabel": "Alibaba Model Studio pricing",
    "sourceUrl": "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "alibaba-qwen-flash",
    "provider": "Alibaba Cloud",
    "model": "qwen-flash",
    "country": "China",
    "region": "Global / China",
    "modality": "Text",
    "contextWindow": "<=128K tier shown",
    "input": {
      "label": "Input",
      "value": 0.022,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Output",
      "value": 0.216,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Tiered pricing shown for qwen-flash first request-size band.",
    "sourceLabel": "Alibaba Model Studio pricing",
    "sourceUrl": "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "alibaba-kimi-k2-5",
    "provider": "Alibaba Cloud",
    "model": "kimi-k2.5",
    "country": "China",
    "region": "Chinese Mainland",
    "modality": "Text",
    "contextWindow": "Chinese Mainland deployment only",
    "input": {
      "label": "Input",
      "value": 0.574,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Output",
      "value": 3.011,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Endpoint, data storage, and inference resources are listed as restricted to Chinese Mainland.",
    "sourceLabel": "Alibaba Model Studio pricing",
    "sourceUrl": "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "zai-glm-5-2",
    "provider": "Z.AI",
    "model": "GLM-5.2",
    "country": "China",
    "region": "Global / China",
    "modality": "Reasoning",
    "contextWindow": "1M tokens with [1m] suffix",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "Lite plan starts",
      "value": 18,
      "unit": "USD / month"
    },
    "extra": [
      {
        "label": "Lite 5-hour quota",
        "value": 80,
        "unit": "approx prompts"
      },
      {
        "label": "Lite weekly quota",
        "value": 400,
        "unit": "approx prompts"
      }
    ],
    "notes": "Official docs list GLM-5.2 for GLM Coding Plan users; the general API pricing table does not list a standalone per-token GLM-5.2 price yet.",
    "sourceLabel": "Z.AI GLM Coding Plan overview",
    "sourceUrl": "https://docs.z.ai/devpack/overview",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "moonshot-kimi-k2-7-code",
    "provider": "Moonshot AI",
    "model": "Kimi K2.7 Code",
    "country": "China",
    "region": "Global",
    "modality": "Multimodal",
    "contextWindow": "256K tokens",
    "input": {
      "label": "Input",
      "value": 0.95,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": {
      "label": "Cache hit",
      "value": 0.19,
      "unit": "USD / 1M tokens"
    },
    "output": {
      "label": "Output",
      "value": 4,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Official Kimi platform describes K2.7 Code as a coding-focused multimodal model with text, image, and video input plus thinking modes.",
    "sourceLabel": "Kimi K2.7 Code pricing",
    "sourceUrl": "https://platform.kimi.ai/docs/pricing/chat-k27-code",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "mistral-large-3",
    "provider": "Mistral",
    "model": "Mistral Large 3",
    "country": "France",
    "region": "Europe",
    "modality": "Multimodal",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Input",
      "value": 0.5,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Output",
      "value": 1.5,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Open-weight, general-purpose multimodal and multilingual model.",
    "sourceLabel": "Mistral pricing",
    "sourceUrl": "https://mistral.ai/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "mistral-medium-3-5",
    "provider": "Mistral",
    "model": "Mistral Medium 3.5",
    "country": "France",
    "region": "Europe",
    "modality": "Reasoning",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Input",
      "value": 1.5,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Output",
      "value": 7.5,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Flagship model for instruction following, reasoning, and coding.",
    "sourceLabel": "Mistral pricing",
    "sourceUrl": "https://mistral.ai/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "mistral-small-4",
    "provider": "Mistral",
    "model": "Mistral Small 4",
    "country": "France",
    "region": "Europe",
    "modality": "Text",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Input",
      "value": 0.1,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Output",
      "value": 0.3,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Cost-sensitive multimodal, multilingual model.",
    "sourceLabel": "Mistral pricing",
    "sourceUrl": "https://mistral.ai/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "mistral-ocr-3",
    "provider": "Mistral",
    "model": "OCR 3",
    "country": "France",
    "region": "Europe",
    "modality": "Document",
    "contextWindow": "Per page",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "OCR",
      "value": 2,
      "unit": "USD / 1K pages"
    },
    "extra": [
      {
        "label": "Annotations",
        "value": 3,
        "unit": "USD / 1K pages"
      }
    ],
    "notes": "Document extraction and understanding endpoint.",
    "sourceLabel": "Mistral pricing",
    "sourceUrl": "https://mistral.ai/pricing/",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "cohere-aya-expanse",
    "provider": "Cohere",
    "model": "Aya Expanse 8B/32B",
    "country": "Canada",
    "region": "North America",
    "modality": "Text",
    "contextWindow": "Vendor docs",
    "input": {
      "label": "Input",
      "value": 0.5,
      "unit": "USD / 1M tokens"
    },
    "cachedInput": null,
    "output": {
      "label": "Output",
      "value": 1.5,
      "unit": "USD / 1M tokens"
    },
    "extra": [],
    "notes": "Multilingual research models available through the API.",
    "sourceLabel": "Cohere pricing",
    "sourceUrl": "https://cohere.com/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "cohere-rerank-4-pro-vault",
    "provider": "Cohere",
    "model": "Rerank 4 Pro - Model Vault",
    "country": "Canada",
    "region": "North America",
    "modality": "Rerank",
    "contextWindow": "Dedicated instance",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "Medium instance",
      "value": 5,
      "unit": "USD / hr"
    },
    "extra": [
      {
        "label": "Large instance",
        "value": 10,
        "unit": "USD / hr"
      }
    ],
    "notes": "Dedicated managed deployment pricing, not shared pay-as-you-go token pricing.",
    "sourceLabel": "Cohere pricing",
    "sourceUrl": "https://cohere.com/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "cohere-embed-4-vault",
    "provider": "Cohere",
    "model": "Embed 4 - Model Vault",
    "country": "Canada",
    "region": "North America",
    "modality": "Embedding",
    "contextWindow": "Dedicated instance",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "Small instance",
      "value": 4,
      "unit": "USD / hr"
    },
    "extra": [
      {
        "label": "Medium instance",
        "value": 5,
        "unit": "USD / hr"
      }
    ],
    "notes": "Dedicated managed deployment pricing for retrieval workloads.",
    "sourceLabel": "Cohere pricing",
    "sourceUrl": "https://cohere.com/pricing",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  },
  {
    "id": "elevenlabs-flash-turbo",
    "provider": "ElevenLabs",
    "model": "Flash / Turbo TTS",
    "country": "United States",
    "region": "US",
    "modality": "Audio",
    "contextWindow": "Per character",
    "input": null,
    "cachedInput": null,
    "output": {
      "label": "Text to speech",
      "value": 0.05,
      "unit": "USD / 1K chars"
    },
    "extra": [],
    "notes": "Niche voice API with low-latency text-to-speech pricing.",
    "sourceLabel": "ElevenLabs API pricing",
    "sourceUrl": "https://elevenlabs.io/pricing/api",
    "sourceStatus": "checked",
    "lastChecked": "2026-06-17"
  }
];
