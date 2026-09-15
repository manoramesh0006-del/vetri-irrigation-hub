import { createFileRoute, Link } from "@tanstack/react-router";
import { Headset, Wrench, ClipboardList, ShieldCheck, Clock, PhoneCall } from "lucide-react";
import { PageHero, CONTACT } from "@/components/site-chrome";

export const Route = createFileRoute("/customer-services")({
  head: () => ({
    meta: [
      { title: "Customer Services & Support — Vetri Irrigation" },
      {
        name: "description",
        content:
          "Customer support from Vetri Irrigation: site survey, system design, installation, annual maintenance contracts, spares and breakdown service.",
      },
      { property: "og:title", content: "Customer Services — Vetri Irrigation" },
      {
        property: "og:description",
        content: "Survey, installation, AMC, spares and breakdown support for your irrigation system.",
      },
    ],
  }),
  component: CustomerServices,
});

const services = [
  { icon: ClipboardList, title: "Free site survey", text: "We visit your site, check the water source and prepare a layout with an estimate." },
  { icon: Wrench, title: "Installation & commissioning", text: "Trained crews install, pressure test and hand over the system with a demo." },
  { icon: ShieldCheck, title: "Annual maintenance", text: "Scheduled servicing, nozzle cleaning, filter flushing and controller checks." },
  { icon: Headset, title: "Spares & replacements", text: "Genuine sprinklers, drippers, valves, filters and controller parts in stock." },
  { icon: Clock, title: "Breakdown support", text: "Call us for leaks, low pressure, blockages or automation faults." },
  { icon: PhoneCall, title: "Guidance on WhatsApp", text: "Send photos of the issue and get quick advice from our service team." },
];

const faqs = [
  {
    q: "How long does a typical installation take?",
    a: "A house garden system usually takes 1–3 days. Larger farm, resort or ground projects are scheduled after the survey and depend on area and material readiness.",
  },
  {
    q: "Do you provide service for systems installed by others?",
    a: "Yes. We inspect the existing layout, list what needs repair or upgrading, and take up the service work.",
  },
  {
    q: "Is automation necessary?",
    a: "Not always, but a controller saves labour and water by watering the right zones at the right time. We can add it later to most systems.",
  },
];

function CustomerServices() {
  return (
    <>
      <PageHero
        eyebrow="Customer Services"
        title="Support that continues after handover"
        subtitle="Survey, design, installation, maintenance and spares — one team responsible for your system's performance."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{s.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
              {faqs.map((f) => (
                <div key={f.q} className="p-6">
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-xl border border-border bg-secondary/40 p-6">
            <h2 className="text-base font-semibold">Service helpline</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Monday to Saturday, 9:00 AM – 7:00 PM
            </p>
            <a
              href={`tel:${CONTACT.mobile}`}
              className="mt-4 block rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Call {CONTACT.mobile}
            </a>
            <a
              href={`tel:${CONTACT.office}`}
              className="mt-2 block rounded-md border border-border px-5 py-3 text-center text-sm font-semibold"
            >
              Office {CONTACT.office}
            </a>
            <Link
              to="/contact"
              className="mt-4 block text-center text-sm font-semibold text-primary hover:underline"
            >
              Or send a service request
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
