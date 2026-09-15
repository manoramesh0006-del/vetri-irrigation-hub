import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/vetri-logo.jpg.asset.json";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Profile" },
  { to: "/brands", label: "Brands & Partners" },
  { to: "/projects", label: "Projects" },
  { to: "/products", label: "Products" },
  { to: "/customer-services", label: "Customer Services" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const CONTACT = {
  address: "189, Velavan Complex, Nehru Street, Opp. Taluk Office, Anthiyur – 638501",
  mobile: "9344567517",
  office: "8300830166",
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Anthiyur, Erode District – 638501
          </span>
          <span className="flex items-center gap-4">
            <a className="flex items-center gap-1.5 hover:underline" href={`tel:${CONTACT.mobile}`}>
              <Phone className="h-3.5 w-3.5" /> {CONTACT.mobile}
            </a>
            <a className="hover:underline" href={`tel:${CONTACT.office}`}>
              Office: {CONTACT.office}
            </a>
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Vetri Irrigation logo"
            width={56}
            height={56}
            className="h-12 w-12 rounded-md object-cover"
          />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-primary">
              Vetri Irrigation
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Watering · Growing · Prospering
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-secondary text-primary" }}
              className="rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md border border-border p-2 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-border px-4 py-3 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Vetri Irrigation"
              width={48}
              height={48}
              loading="lazy"
              className="h-11 w-11 rounded-md object-cover"
            />
            <span className="text-base font-bold text-primary">Vetri Irrigation</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Landscape irrigation, fountains, swimming pools and sports turf systems designed,
            supplied and installed across Tamil Nadu.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Pages</h3>
          <ul className="mt-4 grid grid-cols-2 gap-1.5 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Reach us</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {CONTACT.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Mobile:{" "}
                <a className="hover:text-primary" href={`tel:${CONTACT.mobile}`}>
                  {CONTACT.mobile}
                </a>
                <br />
                Office:{" "}
                <a className="hover:text-primary" href={`tel:${CONTACT.office}`}>
                  {CONTACT.office}
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Mon – Sat, 9:00 AM to 7:00 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vetri Irrigation, Anthiyur. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-b border-border bg-primary/5">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
}
