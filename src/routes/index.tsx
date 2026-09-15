import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Droplets,
  Sprout,
  Waves,
  Trophy,
  Factory,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-irrigation.jpg";
import fountainImg from "@/assets/landscape-fountain.jpg";
import turfImg from "@/assets/sports-turf.jpg";
import productsImg from "@/assets/products.jpg";
import { CONTACT } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vetri Irrigation — Irrigation, Landscape & Fountain Experts, Anthiyur" },
      {
        name: "description",
        content:
          "Vetri Irrigation designs and installs drip, sprinkler and landscape irrigation, fountains, swimming pools and sports turf systems for homes, resorts, farms, factories and grounds.",
      },
      { property: "og:title", content: "Vetri Irrigation — Watering · Growing · Prospering" },
      {
        property: "og:description",
        content:
          "Complete irrigation, landscape, fountain and pool solutions from Anthiyur, Erode District.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Sprout, title: "Landscape Irrigation", text: "Pop-up sprinkler and drip systems for lawns, gardens and green walls." },
  { icon: Waves, title: "Fountains", text: "Musical, dancing and architectural fountains with lighting and controls." },
  { icon: Droplets, title: "Swimming Pools", text: "Pool construction, filtration, plumbing and maintenance packages." },
  { icon: Trophy, title: "Sports Grounds", text: "Cricket and football ground irrigation with automatic pop-up systems." },
  { icon: Factory, title: "Industrial Projects", text: "Factory greenbelt, dust suppression and water distribution networks." },
  { icon: Wrench, title: "Service & AMC", text: "Annual maintenance, spares, retrofits and system health check-ups." },
];

function Home() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Sprinkler irrigation watering a green field at sunrise"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/85">
            Watering · Growing · Prospering
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-primary-foreground md:text-5xl">
            Complete irrigation, landscape & fountain solutions
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/90">
            Vetri Irrigation designs, supplies and installs water systems for houses, resorts, guest
            houses, farm houses, golf courses, industrial factories and sports grounds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              Get a free site visit <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${CONTACT.mobile}`}
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/50 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Call {CONTACT.mobile}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Who we are
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Irrigation specialists based in Anthiyur
            </h2>
            <p className="mt-4 text-muted-foreground">
              From a single garden sprinkler line to a full golf course network, our team handles
              design, material supply, installation, automation and after-sales service. We work
              with trusted brands and deliver systems that save water and run for years.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm">
              {[
                "In-house design and hydraulic calculation",
                "Genuine branded pipes, sprinklers, valves and pumps",
                "Automation with timers and smart controllers",
                "On-time execution with trained installation crews",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/profile"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read our company profile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={fountainImg}
            alt="Resort landscape with fountain and lawn sprinklers"
            width={1200}
            height={800}
            loading="lazy"
            className="rounded-xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold tracking-tight">What we do</h2>
          <p className="mt-2 text-muted-foreground">Six core areas of work, one accountable team.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={turfImg}
              alt="Cricket ground with automatic sprinklers"
              width={1200}
              height={800}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">Sports ground irrigation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cricket and football grounds with automatic pop-up sprinklers, zoning and
                controller-based scheduling for even turf coverage.
              </p>
              <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                View projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={productsImg}
              alt="Irrigation products including pipes, sprinklers, valves and pumps"
              width={1200}
              height={800}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">Products & materials</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Drip lines, sprinklers, valves, filters, fittings, pumps and controllers — available
                for projects and over the counter.
              </p>
              <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Browse products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div
          className="rounded-2xl px-8 py-12 text-center text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-leaf)" }}
        >
          <h2 className="text-2xl font-bold md:text-3xl">Planning a new irrigation system?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Share your site details and we will prepare a layout and estimate.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-primary"
          >
            Send an enquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
