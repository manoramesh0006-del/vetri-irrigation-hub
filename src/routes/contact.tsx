import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Clock } from "lucide-react";
import { PageHero, CONTACT } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vetri Irrigation — Anthiyur, Erode District" },
      {
        name: "description",
        content:
          "Contact Vetri Irrigation: 189, Velavan Complex, Nehru Street, Opp. Taluk Office, Anthiyur 638501. Mobile 9344567517, Office 8300830166.",
      },
      { property: "og:title", content: "Contact Vetri Irrigation" },
      {
        property: "og:description",
        content: "Call, visit or send an enquiry for irrigation, landscape, fountain and pool work.",
      },
    ],
  }),
  component: Contact;
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to Vetri Irrigation"
        subtitle="Call us, visit the office or send an enquiry — we will get back with a layout and estimate."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Contact details</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                Mobile:{" "}
                <a className="font-semibold text-primary" href={`tel:${CONTACT.mobile}`}>
                  {CONTACT.mobile}
                </a>
                <br />
                Office:{" "}
                <a className="font-semibold text-primary" href={`tel:${CONTACT.office}`}>
                  {CONTACT.office}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>Monday to Saturday, 9:00 AM – 7:00 PM</span>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Vetri Irrigation location map, Anthiyur"
              src="https://www.google.com/maps?q=Nehru+Street,+Anthiyur,+Erode,+Tamil+Nadu+638501&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Send an enquiry</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Fill in your requirement and we will call you back.
          </p>

          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Thank you! We will contact you shortly.");
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Name
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="text-sm font-medium">
                Phone
                <input
                  required
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </label>
            </div>
            <label className="text-sm font-medium">
              Place / site location
              <input
                name="place"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm font-medium">
              Requirement
              <select
                name="requirement"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              >
                <option>Landscape irrigation</option>
                <option>Farm drip / sprinkler</option>
                <option>Fountain</option>
                <option>Swimming pool</option>
                <option>Sports ground</option>
                <option>Industrial / factory</option>
                <option>Products only</option>
                <option>Service / repair</option>
              </select>
            </label>
            <label className="text-sm font-medium">
              Message
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Submit enquiry
            </button>
            {sent && (
              <p className="text-sm text-primary">
                Enquiry noted. For an urgent requirement please call {CONTACT.mobile}.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
