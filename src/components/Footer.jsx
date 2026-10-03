import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f1f0ec]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-[0.15em]">
              MUTE 8
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-black/55">
              A curated selection of footwear, bags, jerseys and apparel,
              arranged with care.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/45">
              Navigation
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-y-3">
              <Link to="/" className="text-sm hover:text-black/60">
                Home
              </Link>

              <Link to="/catalog" className="text-sm hover:text-black/60">
                Catalog
              </Link>

              <Link to="/brands" className="text-sm hover:text-black/60">
                Brands
              </Link>

              <Link to="/about" className="text-sm hover:text-black/60">
                About
              </Link>

              <Link to="/contact" className="text-sm hover:text-black/60">
                Contact
              </Link>

              <Link to="/order" className="text-sm hover:text-black/60">
                Order Section
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/45">
              Order
            </h3>

            <p className="mt-5 text-sm leading-7 text-black/55">
              Have something in mind? Start a conversation with us.
            </p>

            <Link
              to="/order"
              className="mt-5 inline-block border-b border-black pb-1 text-sm"
            >
              Order with MUTE 8
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-6">
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} MUTE 8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

