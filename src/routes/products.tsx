import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import productsImg from "@/assets/products.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Drip, Sprinklers, Pumps & Fountain Equipment | Vetri Irrigation" },
      {
        name: "description",
        content:
          "Product range from Vetri Irrigation: drip systems, sprinklers, pipes and fittings, valves, filters, pumps, controllers, fountain and swimming pool equipment.",
      },
      { property: "og:title", content: "Products — Vetri Irrigation" },
      {
        property: "og:description",
        content: "Irrigation, fountain and pool products supplied for projects and retail.",
      },
    ],
  }),
  component: Products,
});

const catalogue = [
  {
    title: "Drip irrigation",
    items: ["Inline drip laterals", "Online drippers", "Micro sprinklers & jets", "Emitting pipes"],
  },
  {
    title: "Sprinkler systems",
    items: ["Pop-up rotors & sprays", "Impact sprinklers", "Rain guns", "Quick coupling valves"],
  },
  {
    title: "Pipes & fittings",
    items: ["HDPE / PVC pipes", "Compression fittings", "Solvent-weld fittings", "Flanges & adaptors"],
  },
  {
    title: "Valves & filters",
    items: ["Solenoid valves", "Ball & butterfly valves", "Screen & disc filters", "Sand filters"],
  },
  {
    title: "Pumps & motors",
    items: ["Monoblock pumps", "Submersible pump sets", "Pressure boosters", "Pool pumps"],
  },
  {
    title: "Automation",
    items: ["Irrigation controllers", "Rain sensors", "Moisture sensors", "Fountain control panels"],
  },
  {
    title: "Fountain equipment",
    items: ["Fountain nozzles", "Jet rings", "Underwater LED lights", "Level controls"],
  },
  {
    title: "Swimming pool",
    items: ["Filtration units", "Skimmers & inlets", "Chemical dosing", "Pool lighting"],
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Product categories"
        subtitle="Everything needed to build and run an irrigation, fountain or pool system — supplied for projects and over the counter."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <img
          src={productsImg}
          alt="Range of irrigation products: pipes, sprinklers, valves, filters and pumps"
          width={1200}
          height={800}
          loading="lazy"
          className="w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {catalogue.map((c) => (
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

        <div className="mt-12 rounded-xl border border-border bg-secondary/40 p-8">
          <h2 className="text-lg font-semibold">Need sizes, specifications or a price list?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us your site area, water source and pressure details — we will recommend the right
            products and quantities.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Request a quotation
          </Link>
        </div>
      </section>
    </>
  );
}
