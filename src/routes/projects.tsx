import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import fountainImg from "@/assets/landscape-fountain.jpg";
import turfImg from "@/assets/sports-turf.jpg";
import heroImg from "@/assets/hero-irrigation.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Landscape Irrigation, Fountains & Sports Turf | Vetri Irrigation" },
      {
        name: "description",
        content:
          "Completed and ongoing projects: landscape irrigation and design, fountains, swimming pools, houses, resorts, guest houses, farm houses, golf courses, factories, cricket and football grounds.",
      },
      { property: "og:title", content: "Projects — Vetri Irrigation" },
      {
        property: "og:description",
        content:
          "Irrigation, fountain, pool and sports-turf projects delivered across homes, resorts, farms and industries.",
      },
    ],
  }),
  component: Projects,
});

const sectors = [
  { title: "Houses & villas", text: "Garden pop-up sprinkler lines, drip beds and terrace garden watering." },
  { title: "Resorts & guest houses", text: "Landscape design, lawn irrigation, fountains and pool plumbing." },
  { title: "Farm houses", text: "Drip and sprinkler layouts, filtration, pump sizing and automation." },
  { title: "Golf courses", text: "Zone-wise turf irrigation with controllers and high-throw sprinklers." },
  { title: "Industrial factories", text: "Greenbelt watering, dust suppression and distribution networks." },
  { title: "Cricket & football grounds", text: "Automatic pop-up systems for uniform outfield coverage." },
];

const work = [
  {
    status: "Completed",
    title: "Resort landscape & musical fountain",
    text: "Lawn irrigation with zoned pop-up sprinklers, planter drip lines and a lit central fountain with control panel.",
    img: fountainImg,
    alt: "Resort landscape with fountain and lawn sprinklers",
  },
  {
    status: "Completed",
    title: "Cricket ground irrigation",
    text: "Outfield and pitch-side pop-up sprinkler network with automatic scheduling and booster pump set.",
    img: turfImg,
    alt: "Cricket ground with pop-up sprinklers running",
  },
  {
    status: "Ongoing",
    title: "Farm sprinkler & drip project",
    text: "Filtration unit, main and sub-main layout, sprinkler grid and drip laterals for a multi-acre farm.",
    img: heroImg,
    alt: "Sprinklers irrigating a crop field",
  },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Completed and ongoing projects"
        subtitle="Landscape irrigation and design, fountains, swimming pools and sports ground systems across Tamil Nadu."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {work.map((w) => (
            <article key={w.title} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={w.img}
                alt={w.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {w.status}
                </span>
                <h2 className="mt-3 text-lg font-semibold">{w.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold tracking-tight">Where we work</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-secondary/40 p-6">
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
