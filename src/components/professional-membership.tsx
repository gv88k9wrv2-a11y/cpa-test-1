import lightLogo from "../assets/icpas-logo-light.png.asset.json";
import darkLogo from "../assets/icpas-logo-dark.png.asset.json";
import { ICPAS_URL } from "../lib/meta";

export function ProfessionalMembership({
  lang,
  variant = "light",
}: {
  lang: "he" | "en";
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  const label = lang === "he"
    ? "חבר לשכת רואי חשבון בישראל — רו״ח שלמה נמרודי"
    : "Shlomo Nimrodi, CPA — Member of ICPAS";
  return (
    <a
      href={ICPAS_URL}
      target="_blank"
      rel="noopener noreferrer"
      dir={lang === "he" ? "rtl" : "ltr"}
      className={`inline-flex max-w-full flex-col items-center gap-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${dark ? "text-primary-foreground/80 hover:text-gold" : "text-muted-foreground hover:text-gold-text"}`}
    >
      <img
        src={dark ? darkLogo.url : lightLogo.url}
        alt={lang === "he" ? "לשכת רואי חשבון בישראל" : "Institute of Certified Public Accountants in Israel"}
        width={dark ? 449 : 519}
        height={dark ? 181 : 210}
        loading="lazy"
        decoding="async"
        className="h-auto w-56 max-w-full object-contain"
      />
      <span className="text-sm leading-relaxed">{label}</span>
    </a>
  );
}