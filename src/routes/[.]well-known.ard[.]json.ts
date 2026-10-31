import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// ARD (Agentic Resource Discovery) v0.91 manifest.
// Served as a server route so the response is a real JSON document with CORS
// headers, independent of SPA rewrites; a static copy also exists at
// public/.well-known/ard.json.
const ARD_MANIFEST = {
  specVersion: "0.91",
  entries: [
    {
      identifier: "urn:air:nimrodi.co.il:doc:cpa-knowledge",
      displayName: "Nimrodi & Co. CPA - Israeli Tax & Accounting Knowledge",
      type: "text/markdown",
      url: "https://nimrodi.co.il/llms-full.txt",
      description:
        "Comprehensive Israeli CPA, relocation tax residency, Preferred Technological Enterprise (PTE), startup equity Section 102, and corporate tax advisory.",
      representativeQueries: [
        "Israeli relocation tax residency rules and 10-year tax holiday",
        "Preferred Technological Enterprise PTE tax incentives Israel",
        "Foreign company permanent establishment PE risk in Israel",
        "CPA Herzliya Pituach tech startup accounting and Section 102 options",
        "Israeli voluntary disclosure procedure and crypto tax reporting",
      ],
    },
  ],
};

export const Route = createFileRoute("/.well-known/ard.json")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify(ARD_MANIFEST, null, 2), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
