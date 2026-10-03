import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: "manage_search",
    label: "Initiation",
    title: "Choose a product",
    description:
      "Browse our curated catalog of sneakers, bags, and jerseys. Copy the silhouette name or direct reference code.",
  },
  {
    number: "02",
    icon: "straighten",
    label: "Proportions",
    title: "Select your size",
    description:
      "Review our sizing recommendations or ask our curators for garment measurements, insole length, and fit tolerances.",
  },
  {
    number: "03",
    icon: "chat_bubble_outline",
    label: "Dialogue",
    title: "Send an enquiry",
    description:
      "Tap the WhatsApp button or submit your product reference through our minimal direct dispatch form below.",
  },
  {
    number: "04",
    icon: "verified",
    label: "Valuation",
    title: "Confirm terms",
    description:
      "We verify current vault stock, physical condition, and provide a final transparent quotation within 15 minutes.",
  },
  {
    number: "05",
    icon: "local_shipping",
    label: "Fulfillment",
    title: "Place the order",
    description:
      "Secure payment link provided, followed by tamper-proof packaging and tracked priority express courier dispatch.",
  },
];

const guarantees = [
  {
    icon: "verified_user",
    title: "100% Authenticity Guaranteed",
    description:
      "Every garment, sneaker, and object undergoes optical and tactile multi-point forensic examination prior to reservation release.",
    label: "Zero Tolerance Policy",
  },
  {
    icon: "flight_takeoff",
    title: "Worldwide Express Delivery",
    description:
      "Airfreight handled exclusively via DHL Express with priority customs clearance, secure transit seal, and real-time waypoint telemetry.",
    label: "Door-to-Door Courier",
  },
  {
    icon: "support_agent",
    title: "Dedicated Personal Curator",
    description:
      "A single point of human contact stewards your request from initial inquiry to fitting validation and doorstep arrival.",
    label: "Single Human Operator",
  },
];

const faqs = [
  {
    question: "What payment methods are supported?",
    answer:
      "Once product condition and sizing are re-verified, your curator sends an encrypted direct invoice supporting Apple Pay, Google Pay, major credit cards (Amex, Visa, Mastercard), and bank wire transfers.",
  },
  {
    question: "How fast is DHL Express transit?",
    answer:
      "North American destinations arrive in 2–3 business days. European and Asian destinations arrive within 1–3 business days. All parcels are signature-mandatory upon drop-off.",
  },
  {
    question: "Can I request a piece not currently in the catalog?",
    answer:
      "Yes. Our acquisition network operates across private collections in Tokyo, Milan, London, and New York. Specify your desired model, year, and condition via WhatsApp or the direct slip.",
  },
];

function Order() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const handleEnquirySubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setFeedback(false);

    setTimeout(() => {
      event.target.reset();
      setIsSubmitting(false);
      setFeedback(true);

      setTimeout(() => {
        setFeedback(false);
      }, 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">    
      {/* MAIN */}
      <main className="w-full bg-[#f9f9f9]">
        {/* ANNOUNCEMENT STRIP */}
        <section className="flex items-center justify-between bg-[#f3f3f3] px-6 py-2 text-gray-500 md:px-16">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />

            <span className="text-[10px] uppercase tracking-widest text-black">
              Live Vault Service Active
            </span>

            <span className="hidden text-xs text-gray-400 md:inline">
              • Average response time: 8 minutes
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-widest">
            EST. 2024 / PROTOCOL V.08
          </span>
        </section>

        {/* HERO */}
        <section className="px-6 py-12 md:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                Protocol / Sourcing Workflow
              </span>

              <span className="text-xs text-gray-300">/</span>

              <span className="text-[10px] uppercase tracking-widest">
                Bespoke Concierge
              </span>
            </div>

            <div className="grid grid-cols-1 items-baseline gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="text-5xl font-bold uppercase tracking-tight md:text-6xl">
                  Simple Order
                  <br />
                  Process
                </h1>
              </div>

              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="text-base leading-relaxed text-gray-500">
                  At MUTE 8, we do not operate impersonal checkout systems.
                  Every piece is sourced, verified, and reserved through direct
                  personal dialogue.
                </p>

                <div className="mt-6 flex items-center gap-6 border-t border-[#eeeeee] pt-3">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400">
                      Dispatch Hub
                    </span>
                    <span className="text-sm font-medium">
                      Tokyo • Paris • New York
                    </span>
                  </div>

                  <div className="h-6 w-px bg-[#eeeeee]" />

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400">
                      Verification
                    </span>
                    <span className="text-sm font-medium">
                      2-Tier Forensic Check
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL SECTION */}
        <section className="px-6 py-3 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="relative overflow-hidden bg-[#f3f3f3] lg:col-span-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gmPVt81lxDLxN6aiLyU2WpfLVhrKea1PMxIV2aLC9BYjVbemwkQJhnZyEWbEi9MjgnZjuHxpVQFy2-mR4cOj8w5CME7DkNlHZTCvLqoqXcMc7UNTequzqlEYMm3ZBg_mJAxku4rNUJwjQ0BukU261A-SmJAxnBCEagYoOuJfoIAh8R4HtYSkJWKhOmoysRP2SXh-r77R6vZVc98DpoZWx993IVrtr_vwrHdsTYAtii7Ug1CFILoa"
                alt="Vault Unit Inspection"
                className="h-80 w-full object-cover grayscale contrast-125"
              />

              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 backdrop-blur">
                <span className="text-[10px] uppercase tracking-wider">
                  Vault Unit Inspection 04-B
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-[#f3f3f3] p-6 lg:col-span-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Acquisition Philosophy
                </span>

                <p className="mt-1 text-sm leading-relaxed">
                  Eliminating the speculative basket. You communicate directly
                  with specialists who confirm batch condition, specific
                  garment measurements, and immediate availability before
                  financial transaction.
                </p>
              </div>

              <div className="space-y-3 border-t border-[#eeeeee] pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Response Window
                  </span>
                  <span className="text-[10px] uppercase tracking-widest">
                    Under 15 Mins
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Discretion Level
                  </span>
                  <span className="text-[10px] uppercase tracking-widest">
                    Encrypted / 1-on-1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 STEP PROCESS */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between border-b border-[#eeeeee] pb-3 md:flex-row md:items-end">
              <div>
                <span className="mb-1 block text-[10px] uppercase tracking-widest text-gray-400">
                  Methodology
                </span>

                <h2 className="text-2xl font-semibold uppercase tracking-tight">
                  The 5-Step Trajectory
                </h2>
              </div>

              <span className="mt-2 text-[10px] uppercase tracking-widest text-gray-400 md:mt-0">
                Sequential Authentication Standard
              </span>
            </div>

            <div className="grid grid-cols-1 gap-px bg-[#eeeeee] md:grid-cols-3 lg:grid-cols-5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group flex min-h-75 flex-col justify-between bg-white p-6 transition-colors hover:bg-[#f9f9f9]"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold transition-transform group-hover:translate-x-1">
                        {step.number}
                      </span>

                      <span className="material-symbols-outlined text-gray-400 transition-colors group-hover:text-black">
                        {step.icon}
                      </span>
                    </div>

                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-widest text-gray-400">
                        {step.label}
                      </span>

                      <h3 className="text-lg font-medium">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-xs leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORDER ACTION SECTION */}
        <section className="border-y border-[#eeeeee] bg-[#f3f3f3] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* WHATSAPP */}
              <div className="flex flex-col justify-between border border-[#eeeeee] bg-white p-6 md:p-12 lg:col-span-5">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                      Priority Route
                    </span>

                    <span className="bg-[#eeeeee] px-2 py-0.5 text-[10px] uppercase tracking-widest">
                      Instant Channel
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold uppercase tracking-tight">
                      Order via WhatsApp
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      Connect directly with our master curator desk. Send
                      screenshots, request fit guidance, or claim unlisted
                      archive items immediately.
                    </p>
                  </div>

                  <div className="space-y-2 border border-[#eeeeee] bg-[#f9f9f9] p-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">
                        lock
                      </span>

                      <span className="text-[10px] uppercase tracking-wider">
                        End-to-End Encrypted Concierge
                      </span>
                    </div>

                    <p className="text-xs text-gray-500">
                      Direct phone:{" "}
                      <span className="font-medium text-black">
                        +1 (555) 019-8822
                      </span>
                    </p>

                    <p className="text-xs text-gray-400">
                      Desk operates daily 10:00 – 20:00 EST. International
                      inquiries welcomed.
                    </p>
                  </div>
                </div>

                <div className="pt-10">
                  <a
                    href="https://wa.me/15550198822?text=Hello%20MUTE%208%20Concierge%2C%20I%20would%20like%20to%20enquire%20about%20ordering%20a%20curated%20piece."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 bg-black px-6 py-4 text-center text-[10px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gray-700"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      chat
                    </span>

                    <span>Order on WhatsApp</span>
                  </a>

                  <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-gray-400">
                    Direct Link: +1 555-019-8822
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div className="border border-[#eeeeee] bg-white p-6 md:p-12 lg:col-span-7">
                <div className="mb-6">
                  <span className="mb-1 block text-[10px] uppercase tracking-widest text-gray-400">
                    Direct Vault Request
                  </span>

                  <h3 className="text-xl font-medium uppercase tracking-tight">
                    Structured Sourcing Slip
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Prefer asynchronous correspondence? Transmit your
                    requirements directly to the registry desk.
                  </p>
                </div>

                <form
                  onSubmit={handleEnquirySubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="client-name"
                        className="text-[10px] uppercase tracking-wider"
                      >
                        Client Full Name <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="client-name"
                        type="text"
                        required
                        placeholder="e.g. Kenzo Takahashi"
                        className="w-full border border-[#eeeeee] bg-[#f9f9f9] px-3 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="client-contact"
                        className="text-[10px] uppercase tracking-wider"
                      >
                        Contact Number / Email{" "}
                        <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="client-contact"
                        type="text"
                        required
                        placeholder="+1 (000) 000-0000 or email@archive.co"
                        className="w-full border border-[#eeeeee] bg-[#f9f9f9] px-3 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="flex flex-col gap-1 md:col-span-2">
                      <label
                        htmlFor="product-reference"
                        className="text-[10px] uppercase tracking-wider"
                      >
                        Product Name or Link{" "}
                        <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="product-reference"
                        type="text"
                        required
                        placeholder="e.g. Salomon ACS Pro Advanced / Archive Prada Nylon Bag"
                        className="w-full border border-[#eeeeee] bg-[#f9f9f9] px-3 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="product-size"
                        className="text-[10px] uppercase tracking-wider"
                      >
                        Desired Size <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="product-size"
                        type="text"
                        required
                        placeholder="e.g. US 10.5 / Medium"
                        className="w-full border border-[#eeeeee] bg-[#f9f9f9] px-3 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="client-notes"
                      className="text-[10px] uppercase tracking-wider"
                    >
                      Optional Note / Vault Instructions
                    </label>

                    <textarea
                      id="client-notes"
                      rows="3"
                      placeholder="Mention desired release year, deadstock condition preferences, or packaging requirements..."
                      className="w-full resize-none border border-[#eeeeee] bg-[#f9f9f9] px-3 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-between gap-3 pt-1 sm:flex-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-black px-8 py-3 text-[10px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gray-700 sm:w-auto ${
                        isSubmitting ? "cursor-not-allowed opacity-70" : ""
                      }`}
                    >
                      {isSubmitting ? "Transmitting..." : "Submit Enquiry"}
                    </button>

                    {feedback && (
                      <span className="text-center text-[10px] uppercase tracking-widest text-black">
                        Registry Slip Dispatched • Reference Logged
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <span className="mb-1 block text-[10px] uppercase tracking-widest text-gray-400">
                Assurance Standard
              </span>

              <h2 className="text-xl font-medium uppercase tracking-tight">
                The MUTE 8 Guarantee
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {guarantees.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center border border-[#eeeeee] bg-[#f3f3f3] p-6 text-center"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center border border-[#eeeeee] bg-white">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>

                  <h4 className="mb-1 text-lg font-medium uppercase">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>

                  <span className="mt-3 text-[10px] uppercase tracking-widest text-gray-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 pb-24 md:px-16">
          <div className="mx-auto max-w-4xl border-t border-[#eeeeee] pt-12">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                Frequently Transacted
              </span>

              <span className="text-[10px] uppercase tracking-widest">
                Protocol Guidance
              </span>
            </div>

            <div className="divide-y divide-[#eeeeee]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium uppercase">
                    <span>{faq.question}</span>

                    <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>

                  <p className="pt-3 text-sm leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Order;




