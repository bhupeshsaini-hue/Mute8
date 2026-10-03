import { Link } from "react-router-dom";
import {
  Filter,
  BadgeCheck,
  Network,
  MessageCircle,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "CURATION",
    icon: Filter,
    description:
      "We select pieces based on design, silhouette, quality and lasting relevance.",
    label: "STANDARD",
    value: "Zero disposable inventory",
  },
  {
    number: "02",
    title: "AUTHENTICITY",
    icon: BadgeCheck,
    description:
      "Every selected piece is carefully reviewed before being offered.",
    label: "VERIFICATION",
    value: "Multi-point physical audit",
  },
  {
    number: "03",
    title: "ACCESS",
    icon: Network,
    description:
      "We make contemporary and hard-to-find pieces accessible through direct sourcing and personal assistance.",
    label: "CLIENT CHANNEL",
    value: "Dedicated private concierge",
  },
];

function About() {
  return (
    <div className="w-full bg-[#f8f7f4] text-[#171717]">
      {/* Editorial Strip */}
      <section className="w-full bg-[#f1f0ec] px-6 py-2 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-black" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
              Archival Dossier / Manifesto 01
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-black/50 sm:block">
              Edition 08 / Retrospective
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
              Est. 2024 / Tokyo — Paris — New York
            </span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
              [ Folio : About 01 ]
            </span>

            <h1 className="mt-4 text-5xl font-bold uppercase tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              About MUTE 8
            </h1>

            <p className="mt-4 font-editorial text-xl text-black/60">
              Curated Pieces. Everyday Style.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-6 h-0.5 w-12 bg-black" />

            <p className="text-base leading-7 text-black/70">
              MUTE 8 is a curated destination for contemporary footwear,
              apparel, bags and archival pieces. We focus on considered
              silhouettes, limited availability and pieces that remain
              relevant beyond seasonal trends.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                Index: 001 // Philosophy
              </span>

              <span className="text-black/30">•</span>

              <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
                Foundational Discipline
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Archive Image */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="group relative overflow-hidden bg-[#e8e8e8] lg:col-span-8">
            <div className="aspect-[16/10]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLYowlBs67459yTzc7MA8JKE22NaVxfi8yBYjRkAb7j0Uf2V7qPZN6owD1vLl79wTvXNugMqHXqJMSGupZrE1AsKH0kOQ5SKVrnyg8LsIPUbFvcr5o5vzO-Ca2fJWsqzeD1qTV1YAs6R0vfU8sELVQvmClMLTMh39KhbgPxCdLUEM7SVfd_0HFhzwSfa1YCCni7PDFPVaZRTYZ8BGXE92g2hcm_JOj3Qzd4myMVfeZ93Wa4q2tAOyn"
                alt="MUTE 8 archival studio"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-4 bg-black/60 p-6 text-white sm:flex-row sm:items-end">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Exhibit Reference
                </span>

                <span className="mt-1 block text-sm font-medium uppercase tracking-wider">
                  MUTE 8 / Archive 08 — Atelier Perspective
                </span>
              </div>

              <span className="w-fit bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                Provenance Secured
              </span>
            </div>
          </div>

          {/* Metadata */}
          <div className="flex flex-col justify-between bg-white p-6 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between bg-[#f1f0ec] px-3 py-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Metric // Specification
                </span>

                <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                  [08]
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="bg-[#f1f0ec] p-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                    Discipline
                  </span>

                  <h3 className="mt-1 text-sm font-medium tracking-tight">
                    Rigorous Editing
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-black/55">
                    Filtering out hyperbole to isolate structural precision
                    and honest materiality.
                  </p>
                </div>

                <div className="bg-[#f1f0ec] p-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                    Provenance
                  </span>

                  <h3 className="mt-1 text-sm font-medium tracking-tight">
                    Global Private Vaults
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-black/55">
                    Sourced through archival relationships across Shibuya,
                    Marais, and Lower Manhattan.
                  </p>
                </div>

                <div className="bg-[#f1f0ec] p-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                    Cadence
                  </span>

                  <h3 className="mt-1 text-sm font-medium tracking-tight">
                    Aperiodic Capsules
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-black/55">
                    Released only when standards are met, uninhibited by
                    seasonal calendar constraints.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between bg-[#f1f0ec] p-4">
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                Catalog Revision
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Vol. 2025.1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Images */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group bg-[#eeeeee] p-5">
            <div className="aspect-[4/3] overflow-hidden bg-[#e2e2e2]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJKWIGNKDnFbwOsOCwoPFS2IkJAd3TGgzRSIckE5KR2wEvEmwnIQ1Ric_Mubbrhhw9QvcpjaYza5o9TtkxVPsT_FlKp_7jJld-Tyk34bbJqNSTmuOfXkYSL8WeMPievj0YoPcCmZ7TwW_8hR00tqYNd1NDZhcB5QASzdfy68cz5k_cPjHPxWGBFEq0kKPRHRMbC_tpDXDlnrzLKhgSDveG5vxyyb281xjvTAQ4a_BBW_5UsEys25rP"
                alt="MUTE 8 footwear archive"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-black/50">
                  Series 01
                </span>

                <h3 className="text-sm font-medium">
                  Footwear Silhouettes
                </h3>
              </div>

              <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                Archival Edit
              </span>
            </div>
          </div>

          <div className="group bg-[#eeeeee] p-5">
            <div className="aspect-[4/3] overflow-hidden bg-[#e2e2e2]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIwWJqEWKNZeaisUq1J1Bx0JdfYP_G7AcPDcv27V2e5Buc2thv9cn0Nh0ubyGZz_sROdOgigCKaxePHtPIvVL9R3cDLxBHs08Ia__b8yu6z-FjSyYY_mktRzWe0LTHH1GJJSB6_bySTFn4EFjS-iIVOIEWrtrqKs3u0ap7lqyVitb3jN3d5BLS7faczbKeINV4LekUYTgHlzWEFg91yAIfDkbaJQoICztYtb0rl9M63QZuhQ4X39fY"
                alt="MUTE 8 leatherware archive"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-black/50">
                  Series 02
                </span>

                <h3 className="text-sm font-medium">
                  Sculptural Leatherware
                </h3>
              </div>

              <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                Studio Archive
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-8 flex flex-col justify-between gap-4 bg-[#f1f0ec] p-5 sm:flex-row sm:items-end">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-black/50">
              Methodology
            </span>

            <h2 className="mt-1 text-2xl font-semibold uppercase tracking-tight">
              Our Approach
            </h2>
          </div>

          <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
            Criteria // 03 Pillars
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.number}
                className="flex flex-col justify-between bg-white p-7 transition-colors hover:bg-[#f1f0ec]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                      {pillar.number} / {pillar.title}
                    </span>

                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div className="my-6 h-0.5 w-8 bg-black" />

                  <p className="text-base leading-7 text-black/70">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-12">
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-black/50">
                    {pillar.label}
                  </span>

                  <span className="mt-1 block text-sm">
                    {pillar.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#e8e8e8] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="bg-[#f8f7f4] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
            The Core Philosophy
          </span>

          <blockquote className="mt-8 max-w-4xl font-editorial text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            “Not everything needs to be new. It needs to be considered.”
          </blockquote>

          <div className="my-8 h-0.5 w-16 bg-black" />

          <p className="max-w-2xl text-base leading-7 text-black/60">
            MUTE 8 focuses on pieces that can become part of everyday personal
            style rather than short-lived trends. By rejecting rapid consumer
            cycles, we build personal wardrobes engineered for longevity,
            architectural poise, and material substance.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
              MUTE 8 Collective
            </span>

            <span className="text-black/40">—</span>

            <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
              Curatorial Board
            </span>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["100%", "Verified Provenance"],
            ["24h", "Concierge Response"],
            ["08", "Global Vault Hubs"],
            ["∞", "Timeless Relevance"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="flex flex-col gap-1 bg-[#f1f0ec] p-6 text-center"
            >
              <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                {value}
              </span>

              <span className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171717] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
            Private Sourcing & Selection
          </span>

          <h2 className="mt-4 font-editorial text-4xl font-semibold uppercase tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Find Your Next Piece
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
            Explore the catalog or speak directly with our concierge for
            sourcing assistance.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-white/80"
            >
              Explore Catalog
            </Link>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-black"
            >
              <MessageCircle size={17} />
              Order via WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
            <span className="h-2 w-2 rounded-full bg-white" />
            Concierge available daily • 10:00 — 20:00 EST
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

