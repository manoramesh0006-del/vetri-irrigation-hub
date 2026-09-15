import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Building2 } from "lucide-react";
import { PageHero, CONTACT } from "@/components/site-chrome";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Company Profile — Vetri Irrigation, Anthiyur" },
      {
        name: "description",
        content:
          "Company profile of Vetri Irrigation: business information, vision, mission and the irrigation, landscape and fountain services we deliver.",
      },
      { property: "og:title", content: "Company Profile — Vetri Irrigation" },
      {
        property: "og:description",
        content: "Business information, vision and mission of Vetri Irrigation, Anthiyur.",
      },
    ],
  }),
  component: Profile,
});

const details = [
  ["Company name", "Vetri Irrigation"],
  ["Tagline", "Watering · Growing · Prospering"],
  ["Nature of business", "Irrigation contractor, landscape & fountain works, product supply"],
  ["Head office", CONTACT.address],
  ["Mobile", CONTACT.mobile],
  ["Office", CONTACT.office],
  ["Service area", "Erode, Salem, Namakkal, Coimbatore and across Tamil Nadu"],
  ["Working hours", "Monday to Saturday, 9:00 AM – 7:00 PM"],
];

function Profile() {
  return (
    <>
      <PageHero
        eyebrow="Profile"
        title="About Vetri Irrigation"
        subtitle="A dedicated irrigation and landscape team serving farms, homes, resorts, industries and sports grounds."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-muted-foreground">
            <p>
              Vetri Irrigation operates from Anthiyur in Erode District, offering end-to-end water
              management solutions. We plan systems around the site's water source, soil, crop or
              turf type and pressure requirement, then supply the right materials and install them
              with our own trained crew.
            </p>
            <p>
              Our work spans farm drip and sprinkler systems, garden and landscape irrigation,
              decorative and musical fountains, swimming pool plumbing and filtration, and
              automatic irrigation for cricket and football grounds. We also handle industrial
              greenbelt watering and factory water distribution lines.
            </p>
            <p>
              Every project is backed by service support: spares, seasonal servicing, controller
              programming and annual maintenance contracts, so systems keep performing long after
              handover.
            </p>

            <div className="grid gap-5 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <Eye className="h-5 w-5 text-primary" />
                <h2 className="mt-3 text-base font-semibold text-foreground">Our vision</h2>
                <p className="mt-2 text-sm">
                  To make efficient, water-saving irrigation the standard for every farm, home and
                  green space in the region.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="mt-3 text-base font-semibold text-foreground">Our mission</h2>
                <p className="mt-2 text-sm">
                  Deliver well-engineered systems with genuine materials, honest pricing, on-time
                  execution and dependable after-sales service.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-xl border border-border bg-secondary/40 p-6">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <Building2 className="h-5 w-5 text-primary" /> Business information
            </h2>
            <dl className="mt-5 divide-y divide-border text-sm">
              {details.map(([k, v]) => (
                <div key={k} className="py-3">
                  <dt className="font-medium text-foreground">{k}</dt>
                  <dd className="mt-0.5 text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
