import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/relocation-tax-advice")({
  beforeLoad: () => {
    throw redirect({ to: "/cpa-international", statusCode: 301 });
  },
});
