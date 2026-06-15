import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const providerSourcesPath = path.resolve("src/data/providerSources.json");

function readRequestBody(request: import("node:http").IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function sendJson(response: import("node:http").ServerResponse, statusCode: number, body: unknown) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
}

function validateSources(value: unknown) {
  if (!Array.isArray(value)) {
    throw new Error("Provider sources must be an array.");
  }

  for (const source of value) {
    if (!source || typeof source !== "object") {
      throw new Error("Each provider source must be an object.");
    }

    const candidate = source as Record<string, unknown>;
    if (
      typeof candidate.id !== "string" ||
      typeof candidate.provider !== "string" ||
      typeof candidate.country !== "string" ||
      typeof candidate.region !== "string" ||
      !Array.isArray(candidate.pages) ||
      candidate.pages.length === 0
    ) {
      throw new Error("Each provider needs id, provider, country, region, and at least one page.");
    }

    for (const page of candidate.pages) {
      if (!page || typeof page !== "object") {
        throw new Error(`Pages for ${candidate.provider} must be objects.`);
      }

      const pageCandidate = page as Record<string, unknown>;
      if (
        typeof pageCandidate.label !== "string" ||
        typeof pageCandidate.url !== "string" ||
        typeof pageCandidate.kind !== "string" ||
        typeof pageCandidate.primary !== "boolean"
      ) {
        throw new Error(`Each page for ${candidate.provider} needs label, url, kind, and primary.`);
      }

      const url = new URL(pageCandidate.url);
      if (url.protocol !== "https:") {
        throw new Error(`Official pages must use HTTPS: ${pageCandidate.url}`);
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "local-price-maintenance-api",
      configureServer(server) {
        server.middlewares.use("/api/provider-sources", async (request, response) => {
          try {
            if (request.method === "GET") {
              const data = await readFile(providerSourcesPath, "utf8");
              response.setHeader("Content-Type", "application/json");
              response.end(data);
              return;
            }

            if (request.method === "PUT") {
              const body = await readRequestBody(request);
              const parsed = JSON.parse(body);
              validateSources(parsed);
              await writeFile(providerSourcesPath, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
              sendJson(response, 200, { ok: true });
              return;
            }

            sendJson(response, 405, { error: "Method not allowed" });
          } catch (error) {
            sendJson(response, 400, { error: error instanceof Error ? error.message : "Unknown error" });
          }
        });

        server.middlewares.use("/api/refresh-prices", async (request, response) => {
          if (request.method !== "POST") {
            sendJson(response, 405, { error: "Method not allowed" });
            return;
          }

          const child = spawn(process.execPath, ["scripts/refresh-prices.mjs"], {
            cwd: process.cwd(),
            env: process.env,
          });

          let stdout = "";
          let stderr = "";
          child.stdout.on("data", (chunk) => {
            stdout += String(chunk);
          });
          child.stderr.on("data", (chunk) => {
            stderr += String(chunk);
          });
          child.on("close", (code) => {
            sendJson(response, code === 0 ? 200 : 500, { ok: code === 0, code, stdout, stderr });
          });
        });
      },
    },
  ],
});
