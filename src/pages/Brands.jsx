import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    number: "01",
    name: "Nike",
    category: "Sneakers & Sportswear",
    origin: "USA",
  },
  {
    number: "02",
    name: "Jordan",
    category: "Basketball & Lifestyle",
    origin: "USA",
  },
  {
    number: "03",
    name: "Adidas",
    category: "Sneakers & Apparel",
    origin: "Germany",
  },
  {
    number: "04",
    name: "Yeezy",
    category: "Lifestyle Footwear",
    origin: "USA",
  },
  {
    number: "05",
    name: "New Balance",
    category: "Running & Lifestyle",
    origin: "USA",
  },
  {
    number: "06",
    name: "ASICS",
    category: "Performance Footwear",
    origin: "Japan",
  },
  {
    number: "07",
    name: "HOKA",
    category: "Running & Trail",
    origin: "France",
  },
  {
    number: "08",
    name: "On",
    category: "Performance Footwear",
    origin: "Switzerland",
  },
  {
    number: "09",
    name: "Onitsuka Tiger",
    category: "Lifestyle Footwear",
    origin: "Japan",
  },
  {
    number: "10",
    name: "Puma",
    category: "Sportswear & Sneakers",
    origin: "Germany",
  },
  {
    number: "11",
    name: "Reebok",
    category: "Sneakers & Sportswear",
    origin: "USA",
  },
  {
    number: "12",
    name: "Salomon",
    category: "Trail & Technical Footwear",
    origin: "France",
  },
  {
    number: "13",
    name: "Vans",
    category: "Skate & Lifestyle",
    origin: "USA",
  },
  {
    number: "14",
    name: "Amiri",
    category: "Luxury Sneakers & Apparel",
    origin: "USA",
  },
  {
    number: "15",
    name: "Dior",
    category: "Luxury Fashion",
    origin: "France",
  },
  {
    number: "16",
    name: "Gucci",
    category: "Luxury Fashion",
    origin: "Italy",
  },
  {
    number: "17",
    name: "Louis Vuitton",
    category: "Luxury Fashion",
    origin: "France",
  },
  {
    number: "18",
    name: "Prada",
    category: "Luxury Fashion",
    origin: "Italy",
  },
];

function Brands() {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Intro */}
      <section className="border-b border-black/10 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            MUTE 8 / BRANDS
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <h1 className="font-editorial text-5xl leading-none tracking-tight md:text-7xl">
                Brands
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-black/55 md:text-lg">
              Explore the brands and labels featured across the MUTE 8
              collection, from everyday sneakers to premium and luxury
              footwear.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Directory */}
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Table Header */}
          <div className="hidden border-y border-black/10 py-4 text-xs uppercase tracking-[0.15em] text-black/40 md:grid md:grid-cols-12 md:gap-6">
            <div className="md:col-span-1">Ref</div>
            <div className="md:col-span-5">Brand</div>
            <div className="md:col-span-4">Category</div>
            <div className="text-right md:col-span-2">Origin</div>
          </div>

          {/* Brands */}
          <div>
            {brands.map((brand) => (
              <div
                key={brand.number}
                className="group grid border-b border-black/10 py-7 transition-colors hover:bg-[#eeece7] md:grid-cols-12 md:items-center md:gap-6 md:px-4"
              >
                {/* Number */}
                <div className="text-xs tracking-[0.15em] text-black/35 md:col-span-1">
                  {brand.number}
                </div>

                {/* Brand */}
                <div className="mt-3 md:col-span-5 md:mt-0">
                  <h2 className="text-xl font-medium tracking-tight md:text-2xl">
                    {brand.name}
                  </h2>
                </div>

                {/* Category */}
                <div className="mt-2 text-sm text-black/50 md:col-span-4 md:mt-0">
                  {brand.category}
                </div>

                {/* Origin */}
                <div className="mt-2 flex items-center justify-between md:col-span-2 md:mt-0 md:justify-end">
                  <span className="text-xs uppercase tracking-[0.12em] text-black/40">
                    {brand.origin}
                  </span>

                  <Link
                    to="/catalog"
                    className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-50 md:hidden"
                  >
                    Explore
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>

                {/* Desktop Explore */}
                <div className="hidden md:col-span-12 md:flex md:justify-end">
                  <Link
                    to="/catalog"
                    className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-black opacity-0 transition-all group-hover:opacity-100"
                  >
                    Explore Catalog
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171717] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            MUTE 8 / COLLECTION
          </p>

          <h2 className="mt-5 font-editorial text-4xl leading-tight md:text-6xl">
            Looking for something specific?
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Browse our catalog or get in touch with MUTE 8 to ask about a
            specific brand, model or size.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/catalog"
              className="bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-80"
            >
              View Catalog
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Contact MUTE 8
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brands;


