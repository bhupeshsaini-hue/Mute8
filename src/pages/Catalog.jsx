import { useState } from "react";

const products = [
  {
    id: 1,
    category: "sneakers",
    brand: "AETHE STUDIO",
    name: "Veneer Low-Top Sneaker",
    price: "$480",
    badge: "EDITION 01/30",
    description: "Pristine off-white & textured charcoal calfskin.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtm7euTav2E7q110WZqyZ04vFdE2Xrn4Cw-hfG5jb3nMOqqpUl1XeLBLK77HXxR211zrRW1wohxOONqnhjhj3tVvNsfMNzVjJP6iQ77g__rb5iYQNGimZcQKOQ2lWpzoOAtt1voJcusBBwjh3YfuMtqODM7G8knovRnWI7ZJDCscQP6yqhv0dX_GKuOLl3WIqEfZv00OEa7oQSw_GScq-UKtlaWiUs2ak947pCI9EhKZlvfXq4nO-I",
  },
  {
    id: 2,
    category: "bags",
    brand: "ATELIER NOIR",
    name: "Architectural Structured Tote",
    price: "$620",
    badge: "CURATED OBJECT",
    description: "Matte black saddle leather with brushed silver hardware.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTR_E0Dtr8fYCPevNg2-rwt5pT25yScVtZPukaPpBDCklYhcKHrppvNirLnA_laUX7v3ov00I5W4i1bO1sDUjRivjIeAX71DC1vcUjTJMLmE-c_cWcvqu8hvvIY00dN0Xwy2t6L4Uqqv-KCc1DmRPMsSWi0vSzzWsbXGN61rT7LIz-m6EEIIowqtD3AtJdbwWAQ-fZpxCpLicTPyJMTOpypJxVT8DHyFDniigsbs4IIRIX6glwPtQy",
  },
  {
    id: 3,
    category: "jerseys",
    brand: "ARCHIVE VINTAGE",
    name: "Nordstrom 77 Heavyweight Jersey",
    price: "$290",
    badge: "ARCHIVE REISSUE",
    description: "480gsm custom-spun vintage wash football cut.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB62200fV4qm2jQPT0a6Tue1BsszoiPAfJbBVSWRyu5t-jelxxTbGlidMIPRy83Hq4aG37PahG8pnOpbD8v16gtcBfK56lVsky88-snMZiJ2Zi1Msw3xyx21bPO0Qbn9o4ODBlkpBo3xrU54C1p2k9DQISP9DsgqF6GBUndTUv4Scefla8RHJqage5fUo7byn6RzsYGNN2qPmumIx52SmhLcEz4eal_DojSNMU92abazzyxBRweolzG",
  },
  {
    id: 4,
    category: "apparel",
    brand: "OUR LEGACY",
    name: "Extended Third Cut Denim in Washed Black",
    price: "$390",
    badge: "STOCK: LAST 3",
    description: "Italian denim with relaxed cut and subtle slash pockets.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ASlqGjt4iVXnBu3igJDoUSt7_Z58Mlsc-UeJ-k_V7F8Veaym8EMwhLS6wGyij1bJB3xMiWLXjZp0cAwyp2jai1z55lJCtIJdZNElIHiY3TSdqHqUpBGa5OFu8Mwdr-KJFY1IwWiEo4vwj-UyKPpxXDSSErC3JOR5a24H0T4N6Ugk-BywCpAIOTNpW4xG4Jx2WPFAWpDNexqnekUMmcjb1ukspTy75_gJGIgZJ1dE8-hqC7dcgQMk",
  },
  {
    id: 5,
    category: "sneakers",
    brand: "SALOMON ADVANCED",
    name: "ACS Pro Desert Monolith",
    price: "$240",
    badge: "TECHNICAL SPEC",
    description: "Agile Chassis System with breathable dual-mesh chassis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVNsBkZ4vB_RI159yVJM6bgcDmp0pGFn1EfB4uz97frtQt762XIg4xGVoB8WPm3KIxHcPBoAPfJExno5qrnyrXHBEeuchcmeR6SA8NOSpLiCbcNWFwTTvWOypcAaewdg1oTu7vC1M7VzkbnR9uD1ILhSZmEBm0Fr-iqK9zXoOGpPa6zYUxuQzzejCi8w3FDafHrNjynrGSMRLuEc1QPN44Z0NSUjVCpAOzYKdXxjW232D71s-yFUo8",
  },
  {
    id: 6,
    category: "bags",
    brand: "LEMAIRE",
    name: "Moulded Leather Camera Bag",
    price: "Price on Request",
    badge: "PRIVATE ALLOCATION",
    description: "Seamless wet-moulded vegetal leather crafted in Italy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5_asz-atIltcqfHxAGsxd_xFmQCQ_ztzppHsdBKgAbJ1TWYsTr77GMp0Bi2gWnTqU9DEKn5q3tXqLgayxu2Who5SQ0NRTK9oVbK1yMrOh0UUljGv0dZ_XKBvUWOTpEPrqjSLgknr7MkJhe7RN4GmYxJINMOndHznbgXX1Rqfz4uD_17i_fYBsT4JPo1S1tE6quACqY1qIP4iyWYK7bA5TyM3iXsYLBd_LoIKZ5VbaMOOfJus0ubcc",
  },
];

const categories = [
  { id: "all", label: "All Curations" },
  { id: "sneakers", label: "Sneakers" },
  { id: "bags", label: "Bags" },
  { id: "jerseys", label: "Jerseys" },
  { id: "apparel", label: "Apparel" },
  { id: "archive", label: "Archive" },
];

function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      {/* MAIN */}
      <main className="min-h-screen bg-[#f9f9f9]">
        {/* STATUS STRIP */}
        <section className="border-b bg-[#f3f3f3] px-6 py-2 md:px-16">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />

              <span className="text-[10px] uppercase tracking-widest text-gray-500">
                EDITION 08 — FALL/WINTER CURATION
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="hidden text-[10px] uppercase tracking-wider text-gray-400 sm:inline">
                GLOBAL VAULT DISPATCH
              </span>

              <span className="text-[10px] uppercase tracking-wider">
                WHATSAPP CONCIERGE ACTIVE
              </span>
            </div>
          </div>
        </section>

        {/* CATALOG HEADER */}
        <section className="px-6 pb-6 pt-12 md:px-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex items-baseline gap-3">
                <h1 className="text-5xl font-bold uppercase tracking-tight md:text-6xl">
                  Catalog
                </h1>

                <span className="text-xs uppercase tracking-widest text-gray-400">
                  (12 Curated Items)
                </span>
              </div>

              <p className="mt-2 text-base text-gray-500">
                Sneakers, bags, jerseys, and apparel selected in limited
                quantities.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
              <span>ARCHIVAL VAULT</span>
              <span>/</span>
              <span>INDEX 2024.3</span>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="sticky top-20 z-30 border-y bg-white px-6 py-3 shadow-sm md:px-16">
          <div className="flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex min-w-max items-center gap-1">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2.5 text-[10px] uppercase tracking-widest transition-colors ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-[#f9f9f9] text-gray-500 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="hidden min-w-max items-center gap-2 pl-4 text-[10px] uppercase tracking-widest text-gray-400 lg:flex">
              <span>⚙</span>
              <span>VIEWPORT: 3 COLUMNS ARCHITECTURAL</span>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section className="px-6 py-12 md:px-16">
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col justify-between"
              >
                <div>
                  {/* IMAGE */}
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-[#f3f3f3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Badge */}
                    <div className="absolute left-3 top-3 bg-white/90 px-2 py-1">
                      <span className="text-[10px] uppercase tracking-widest">
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="space-y-1 pt-5">
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500">
                      {product.brand}
                    </span>

                    <div className="flex items-baseline justify-between gap-2">
                      <h2 className="text-base font-medium tracking-tight transition-colors group-hover:text-gray-500">
                        {product.name}
                      </h2>

                      <span className="shrink-0 text-sm font-medium">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* VIEW PRODUCT */}
                <div className="mt-3 pt-2">
                  <a
                    href="https://wa.me/15550198822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between bg-[#eeeeee] px-4 py-3 text-[10px] uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
                  >
                    <span>Enquire Product</span> 
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* No Products */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                No products available in this category.
              </p>
            </div>
          )}
        </section>

        {/* ARCHIVAL PROTOCOL */}
        <section className="border-y bg-white px-6 py-6 md:px-16">
          <div className="mx-auto flex max-w-4xl flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                ARCHIVAL PROTOCOL
              </span>

              <p className="text-sm text-[#1a1c1c]">
                Every garment and footwear piece is physically verified and
                stored in our climate-regulated storage facility prior to
                dispatch.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-gray-600">
              <span className="text-xl">✓</span>

              <span className="text-[10px] uppercase tracking-wider">
                Guaranteed Authentic
              </span>
            </div>
          </div>
        </section>

        {/* WHATSAPP CONCIERGE */}
        <section className="bg-[#1c1b1b] px-6 py-16 text-white md:px-16">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">◉</span>

                <span className="text-[10px] uppercase tracking-widest text-gray-300">
                  DIRECT VAULT ACCESS
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Looking for a sold-out size or custom piece?
              </h2>

              <p className="text-sm leading-6 text-gray-300">
                Our Tokyo & New York sourcing network locates rare deadstock
                items, unlisted runway releases, and specific sizing upon
                request.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <a
                href="https://wa.me/15550198822"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white px-6 py-4 text-center text-[10px] font-semibold uppercase tracking-widest text-black transition-colors hover:bg-gray-200"
              >
                <span>💬</span>
                <span>Order directly via WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Catalog;
