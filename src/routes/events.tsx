import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Activities — Vetri Irrigation" },
      {
        name: "description",
        content:
          "Events, farmer demonstrations, exhibitions and training activities organised by Vetri Irrigation, Anthiyur.",
      },
      { property: "og:title", content: "Events — Vetri Irrigation" },
      {
        property: "og:description",
        content: "Field demonstrations, exhibitions and training sessions from Vetri Irrigation.",
      },
    ],
  }),
  component: Events,
});

const events = [
  {
    tag: "Upcoming",
    title: "Field demonstration: drip & sprinkler efficiency",
    when: "Announced monthly",
    where: "Anthiyur and nearby villages",
    text: "Live demonstration of drip laterals, micro sprinklers and rain guns, with guidance on water saving and fertigation.",
  },
  {
    tag: "Upcoming",
    title: "Landscape & fountain design consultation camp",
    when: "By appointment",
    where: "Our office, Velavan Complex",
    text: "Bring your site plan and discuss lawn irrigation, fountain options, lighting and pool requirements with our team.",
  },
  {
    tag: "Activity",
    title: "Installer training & automation workshop",
    when: "Quarterly",
    where: "Vetri Irrigation, Anthiyur",
    text: "Hands-on training for plumbers and installers on controllers, solenoid valves, zoning and troubleshooting.",
  },
  {
    tag: "Exhibition",
    title: "Agri & horticulture expo participation",
    when: "Seasonal",
    where: "Erode / Salem region",
    text: "Product display of sprinklers, drip systems, pumps and automation with on-stand technical guidance.",
  },
];

function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Events and activities"
        subtitle="Demonstrations, consultation camps, training sessions and exhibitions we take part in."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <article key={e.title} className="rounded-xl border border-border bg-card p-6">
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                {e.tag}
              </span>
              <h2 className="mt-3 text-lg font-semibold">{e.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-primary" /> {e.when}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {e.where}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Dates are confirmed closer to each event.{" "}
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            Contact us
          </Link>{" "}
          to be informed about the next demonstration near you.
        </p>
      </section>
    </>
  );
}
