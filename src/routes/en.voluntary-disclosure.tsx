import { createFileRoute } from "@tanstack/react-router";
import { VoluntaryDisclosurePage } from "../components/voluntary-disclosure-page";
import { voluntaryDisclosureHead } from "../lib/voluntary-disclosure-meta";

export const Route = createFileRoute("/en/voluntary-disclosure")({
  head: () => voluntaryDisclosureHead("en"),
  component: VoluntaryDisclosureEn,
});

function VoluntaryDisclosureEn() {
  return <VoluntaryDisclosurePage lang="en" />;
}