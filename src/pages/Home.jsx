import { Link } from "react-router-dom";

const products = [
  {
    brand: "AETHE STUDIO",
    name: "Veneer Low-Top Sneaker",
    price: "$480",
    badge: "Restocked",
    description: "Italian nubuck & Japanese cotton canvas lining.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtm7euTav2E7q110WZqyZ04vFdE2Xrn4Cw-hfG5jb3nMOqqpUl1XeLBLK77HXxR211zrRW1wohxOONqnhjhj3tVvNsfMNzVjJP6iQ77g__rb5iYQNGimZcQKOQ2lWpzoOAtt1voJcusBBwjh3YfuMtqODM7G8knovRnWI7ZJDCscQP6yqhv0dX_GKuOLl3WIqEfZv00OEa7oQSw_GScq-UKtlaWiUs2ak947pCI9EhKZlvfXq4nO-I",
  },
  {
    brand: "ATELIER NOIR",
    name: "Architectural Leather Tote",
    price: "$620",
    badge: "1 of 6 Rare",
    description: "Heavy saddle leather with brushed palladium hardware.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTR_E0Dtr8fYCPevNg2-rwt5pT25yScVtZPukaPpBDCklYhcKHrppvNirLnA_laUX7v3ov00I5W4i1bO1sDUjRivjIeAX71DC1vcUjTJMLmE-c_cWcvqu8hvvIY00dN0Xwy2t6L4Uqqv-KCc1DmRPMsSWi0vSzzWsbXGN61rT7LIz-m6EEIIowqtD3AtJdbwWAQ-fZpxCpLicTPyJMTOpypJxVT8DHyFDniigsbs4IIRIX6glwPtQy",
  },
  {
    brand: "ARCHIVE VINTAGE",
    name: "Heavyweight Distressed Football Jersey",
    price: "$290",
    badge: "Archive Specimen",
    description: "Monochrome enzyme wash, boxy drop shoulder silhouette.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB62200fV4qm2jQPT0a6Tue1BsszoiPAfJbBVSWRyu5t-jelxxTbGlidMIPRy83Hq4aG37PahG8pnOpbD8v16gtcBfK56lVsky88-snMZiJ2Zi1Msw3xyx21bPO0Qbn9o4ODBlkpBo3xrU54C1p2k9DQISP9DsgqF6GBUndTUv4Scefla8RHJqage5fUo7byn6RzsYGNN2qPmumIx52SmhLcEz4eal_DojSNMU92abazzyxBRweolzG",
  },
];

const brands = [
  ["01", "Maison Margiela", "14"],
  ["02", "Salomon S/LAB", "09"],
  ["03", "Jil Sander", "07"],
  ["04", "Studio Nicholson", "12"],
  ["05", "Roa Hiking", "05"],
  ["06", "Rick Owens", "18"],
  ["07", "Our Legacy", "11"],
  ["08", "Bottega Veneta", "06"],
];

const categories = [
  {
    number: "01",
    type: "ARCHIVE",
    title: (
      <>
        Sneakers &<br />
        Footwear
      </>
    ),
    description:
      "Rare runway collaborations, trail technicals, and understated luxury trainers.",
  },
  {
    number: "02",
    type: "LEATHER",
    title: (
      <>
        Structured Bags &<br />
        Leather
      </>
    ),
    description:
      "Architectural crossbodies, heavy calfskin totes, and minimal utility cases.",
  },
  {
    number: "03",
    type: "TEXTILES",
    title: (
      <>
        Jerseys &<br />
        Knitwear
      </>
    ),
    description:
      "Heavyweight vintage football pieces, textured cardigans, and gauge crewnecks.",
  },
  {
    number: "04",
    type: "TAILORING",
    title: (
      <>
        Outerwear &<br />
        Essentials
      </>
    ),
    description:
      "Unstructured overcoats, technical nylon shells, and Japanese denim.",
  },
];

const steps = [
  [
    "01",
    "Choose a Product",
    "Browse our curated drops, permanent archive, or current seasonal showroom.",
  ],
  [
    "02",
    "Select Your Size",
    "Specify your measurements or shoe size; our team checks fit profiles against archive molds.",
  ],
  [
    "03",
    "Send an Enquiry",
    "Initiate a direct encrypted thread with our styling team with one tap.",
  ],
  [
    "04",
    "Confirm Availability",
    "Receive authentic high-res proof of item, final locked price, and custom invoice.",
  ],
  [
    "05",
    "Direct Dispatch",
    "Express courier tracking straight to your door with full customs transparency.",
  ],
];

function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      {/* MAIN */}
      <main>
        {/* TICKER */}
        <section className="border-b bg-white px-6 py-2 md:px-16">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-500">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
              <span>GLOBAL COURIER DISPATCH / TAX & DUTIES INCLUDED</span>
            </div>

            <div className="hidden gap-6 sm:flex">
              <span>ARCHIVE EDITION: NO. 08/2025</span>
              <span>•</span>
              <span>CURATED IN TOKYO, MILAN & PARIS</span>
            </div>

            <span className="font-medium text-black">
              WHATSAPP CONCIERGE 24/7 ONLINE
            </span>
          </div>
        </section>

        {/* HERO */}
        <section className="px-6 py-20 md:px-16">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-block border bg-white px-3 py-1 text-[10px] uppercase tracking-widest text-gray-500">
                  MUTE 8 / 2025 PERMANENT COLLECTION
                </div>

                <h1 className="text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl">
                  Curated Pieces.
                  <br />
                  Everyday Style.
                </h1>

                <p className="mt-5 max-w-lg text-base leading-7 text-gray-500">
                  An uncompromising archive of rare sneakers, structured leather
                  bags, vintage heavyweight jerseys, and minimalist apparel
                  curated for discerning collectors.
                </p>
              </div>

              <div className="mt-10">
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/catalog"
                    className="bg-black px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-gray-800"
                  >
                    Explore Catalog
                  </Link>

                  <Link
                    to="/order"
                    className="border border-black px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white"
                  >
                    Order Now
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-3 border-t pt-5">
                  <div>
                    <span className="text-[10px] uppercase text-gray-400">
                      Origin
                    </span>
                    <p className="text-xs font-medium uppercase">
                      Tokyo / EU Sourcing
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-gray-400">
                      Condition
                    </span>
                    <p className="text-xs font-medium uppercase">
                      Deadstock / Pristine
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-gray-400">
                      Checkout
                    </span>
                    <p className="text-xs font-medium uppercase">
                      Direct WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="border bg-white p-4">
              <div className="mb-3 flex justify-between border-b pb-3 text-[10px] uppercase text-gray-400">
                <span>[ ARCHIVE OBJECT REF. M01-2025 ]</span>
                <span>AVAILABLE EXCLUSIVELY VIA CONCIERGE</span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtm7euTav2E7q110WZqyZ04vFdE2Xrn4Cw-hfG5jb3nMOqqpUl1XeLBLK77HXxR211zrRW1wohxOONqnhjhj3tVvNsfMNzVjJP6iQ77g__rb5iYQNGimZcQKOQ2lWpzoOAtt1voJcusBBwjh3YfuMtqODM7G8knovRnWI7ZJDCscQP6yqhv0dX_GKuOLl3WIqEfZv00OEa7oQSw_GScq-UKtlaWiUs2ak947pCI9EhKZlvfXq4nO-I"
                  alt="MUTE 8 Model 01"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 text-[10px] uppercase tracking-widest">
                  Model 01 — Bone / Charcoal Suede
                </div>
              </div>

              <div className="flex flex-col justify-between gap-2 pt-3 sm:flex-row">
                <span className="text-xs text-gray-500">
                  Structured Calfskin / Hand-Finished Edge
                </span>

                <a
                  href="https://wa.me/15550198822?text=Hello%20MUTE%208%20Concierge"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase underline"
                >
                  Price on Request / Via WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="border-y bg-white px-6 py-20 md:px-16">
          <div className="flex flex-col justify-between gap-4 border-b pb-6 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                Vault Selection
              </span>

              <h2 className="mt-1 text-3xl font-semibold uppercase">
                Featured Curations
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Selected arrivals from Tokyo, Paris, and Milan.
              </p>
            </div>

            <a
              href="#"
              className="text-xs font-semibold uppercase tracking-widest"
            >
              View Full Catalog →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group border bg-[#f9f9f9] p-4 transition hover:border-black"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 border bg-white px-2 py-1 text-[10px] uppercase tracking-widest">
                    {product.badge}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                      {product.brand}
                    </span>

                    <span className="text-sm font-semibold">
                      {product.price}
                    </span>
                  </div>

                  <h3 className="mt-1 text-lg uppercase">{product.name}</h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {product.description}
                  </p>
                </div>

                <div className="mt-5 border-t pt-4">
                  <a
                    href="https://wa.me/15550198822"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full bg-black py-3 text-center text-xs uppercase tracking-widest text-white hover:bg-gray-800"
                  >
                    Enquire via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BRANDS */}
        <section className="px-6 py-20 md:px-16">
          <div className="mb-6 flex items-center justify-between border-b pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                Index — 03
              </span>

              <h2 className="text-3xl font-semibold uppercase">
                Curated Brands
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase text-gray-400 sm:block">
              Filter by label
            </span>
          </div>

          <div className="grid grid-cols-2 border md:grid-cols-4">
            {brands.map(([number, name, count]) => (
              <a
                href="#"
                key={name}
                className="flex h-36 flex-col justify-between border-b border-r p-6 hover:bg-gray-50"
              >
                <span className="text-[10px] text-gray-400">{number}</span>

                <span className="text-lg uppercase">{name}</span>

                <span className="text-xs text-gray-500">→ {count} items</span>
              </a>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="border-t bg-gray-100 px-6 py-20 md:px-16">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              Index — 04
            </span>

            <h2 className="text-3xl font-semibold uppercase">
              Department Taxonomy
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                href="#"
                key={category.number}
                className="group border bg-white p-6 transition hover:border-black"
              >
                <div className="mb-12 flex justify-between">
                  <span className="text-sm">{category.number}</span>

                  <span className="text-[10px] uppercase tracking-widest text-gray-400">
                    {category.type}
                  </span>
                </div>

                <h3 className="text-2xl font-medium uppercase leading-tight">
                  {category.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-gray-500">
                  {category.description}
                </p>

                <div className="mt-6 flex justify-between border-t pt-4 text-xs uppercase">
                  <span>Explore</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ORDER PROCESS */}
        <section className="border-t bg-white px-6 py-20 md:px-16">
          <div className="mb-10 max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              How MUTE 8 Works
            </span>

            <h2 className="mt-1 text-3xl font-semibold uppercase">
              Direct Acquisition Flow
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              No automated checkout friction or generic customer service queues.
              We facilitate private sales directly between collectors and our
              resident curators via WhatsApp concierge.
            </p>
          </div>

          <div className="grid grid-cols-1 border-y sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([number, title, description]) => (
              <div
                key={number}
                className="flex min-h-[220px] flex-col justify-between border-b p-6 lg:border-b-0 lg:border-r"
              >
                <div>
                  <span className="text-sm text-gray-400">{number}</span>

                  <h4 className="mt-3 text-lg uppercase">{title}</h4>
                </div>

                <p className="text-xs leading-6 text-gray-500">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-gray-500 sm:flex-row">
            <span>
              ✓ 100% Authenticity Guaranteed on All Archival Artifacts
            </span>

            <span>Average concierge response time: &lt; 8 minutes</span>
          </div>
        </section>

        {/* WHATSAPP CTA */}
        <section className="px-6 py-20 md:px-16">
          <div className="relative overflow-hidden bg-black p-10 text-white md:p-20">
            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-gray-600 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>

                <span className="text-[10px] uppercase tracking-widest">
                  Live Concierge
                </span>
              </div>

              <h2 className="text-3xl font-semibold uppercase md:text-5xl">
                Direct Concierge &
                <br />
                Personal Sourcing
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
                Have a specific grail, vintage jersey, or sneaker in mind?
                Connect directly with our curators via WhatsApp for real-time
                sizing assistance and worldwide private shipping.
              </p>

              <div className="mt-8">
                <a
                  href="https://wa.me/15550198822"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-white px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black hover:bg-gray-200"
                >
                  Chat on WhatsApp (+1 555-019-8822)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="border-t px-6 py-12 text-center md:px-16">
          <div className="mx-auto max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              Editorial Philosophy
            </span>

            <p className="mt-3 text-lg uppercase italic">
              “Restraint is not the absence of design; it is the discipline of
              knowing precisely what to leave intact.”
            </p>

            <span className="mt-3 block text-[10px] text-gray-400">
              — MUTE 8 CURATORIAL MANIFESTO, ISSUE 01
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
