import { createFileRoute, Link } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Announcements — Vetri Irrigation" },
      {
        name: "description",
        content:
          "Latest news and announcements from Vetri Irrigation: new services, product additions, project updates and service coverage.",
      },
      { property: "og:title", content: "News — Vetri Irrigation" },
      {
        property: "og:description",
        content: "Company announcements and updates from Vetri Irrigation, Anthiyur.",
      },
    ],
  }),
  component: News,
});

const news = [
  {
    title: "Sports ground irrigation added to our service list",
    text: "We now take up complete cricket and football ground irrigation, including outfield pop-up sprinkler grids, zoning and automatic controllers.",
  },
  {
    title: "Fountain and swimming pool division expanded",
    text: "Our fountain and pool team now handles nozzle selection, underwater lighting, filtration and control panel work for resorts and guest houses.",
  },
  {
    title: "Annual maintenance contracts now available",
    text: "AMC packages cover scheduled servicing, filter cleaning, nozzle replacement and controller programming for existing systems.",
  },
  {
    title: "Service coverage widened around Erode district",
    text: "Site visits and service calls are now attended across Anthiyur, Bhavani, Gobichettipalayam, Erode and nearby taluks.",
  },
];

function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Latest news and announcements"
        subtitle="Updates on our services, products, projects and service coverage."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {news.map((n) => (
            <article key={n.title} className="rounded-xl border border-border bg-card p-6">
              <Newspaper className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-lg font-semibold">{n.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{n.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Have a question about any update?{" "}
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </>
  );
}
