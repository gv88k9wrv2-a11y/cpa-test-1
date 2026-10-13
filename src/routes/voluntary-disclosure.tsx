import { createFileRoute } from "@tanstack/react-router";
import { VoluntaryDisclosurePage } from "../components/voluntary-disclosure-page";
import { voluntaryDisclosureHead } from "../lib/voluntary-disclosure-meta";

export const Route = createFileRoute("/voluntary-disclosure")({
  head: () => voluntaryDisclosureHead("he"),
  component: VoluntaryDisclosureHe,
});

function VoluntaryDisclosureHe() {
  return <VoluntaryDisclosurePage lang="he" />;
}