import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Brands", path: "/brands" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Order Section", path: "/order" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f7f4]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold tracking-[0.18em]"
        >
          MUTE 8
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm tracking-wide transition ${
                  isActive
                    ? "text-black"
                    : "text-black/60 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-black/10 bg-[#f8f7f4] px-6 py-6 lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-black/10 py-4 text-sm ${
                    isActive ? "text-black" : "text-black/60"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;