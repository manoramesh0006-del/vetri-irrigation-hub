import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import { PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands & Partners — Vetri Irrigation" },
      {
        name: "description",
        content:
          "Brands and business partners we work with for irrigation pipes, sprinklers, valves, pumps, filters and automation controllers.",
      },
      { property: "og:title", content: "Brands & Partners — Vetri Irrigation" },
      {
        property: "og:description",
        content: "Trusted irrigation, pump and automation brands supplied by Vetri Irrigation.",
      },
    ],
  }),
  component: Brands,
});

const categories = [
  {
    title: "Pipes & fittings",
    items: ["HDPE & PVC pipe brands", "Column and casing pipes", "Compression fittings", "Solvent-weld fittings"],
  },
  {
    title: "Sprinklers & drip",
    items: ["Pop-up rotors and sprays", "Impact and rain-gun sprinklers", "Inline drip laterals", "Online drippers & micro jets"],
  },
  {
    title: "Pumps & motors",
    items: ["Monoblock pumps", "Submersible pumps", "Pool circulation pumps", "Booster & pressure sets"],
  },
  {
    title: "Valves & filters",
    items: ["Solenoid & control valves", "Air release and NRV", "Screen & disc filters", "Sand and cartridge filters"],
  },
  {
    title: "Automation",
    items: ["Irrigation controllers", "Rain and moisture sensors", "Fountain control panels", "Timer-based zoning"],
  },
  {
    title: "Pool & fountain",
    items: ["Filtration systems", "Underwater LED lighting", "Nozzles and jet rings", "Chemical dosing units"],
  },
];

function Brands() {
  return (
    <>
      <PageHero
        eyebrow="Brands & Partners"
        title="Brands and partners we work with"
        subtitle="We source from established manufacturers and dealer networks so every system uses genuine, warranty-backed material."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-base font-semibold">{c.title}</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {c.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-xl border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <Handshake className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Want to partner or become a dealer?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Manufacturers, contractors and landscape designers are welcome to work with us.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Talk to us
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Brand names and availability can be confirmed for your specific requirement — please call
          us before finalising a quotation.
        </p>
      </section>
    </>
  );
}
