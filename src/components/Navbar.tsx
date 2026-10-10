import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

/* Palette (same as the homepage): ink #1b2b3b, aqua #17a2e3, mist #e8f1f5 */

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Suites", to: "/rooms" },
  { label: "Dining", to: "/dining" },
  { label: "Spa", to: "/spa" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

const PHONE_HREF = "tel:+26800000000"; // placeholder: replace with the real number

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Overlay style (white text on the photo) only on the homepage, before scrolling.
  // Everywhere else the header is a light frosted bar so it stays readable.
  const overlay = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation or Escape
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          overlay
            ? "px-5 pt-6 md:px-14 md:pt-10"
            : "px-3 pt-3 md:px-6"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            overlay
              ? "max-w-none"
              : "max-w-7xl rounded-full bg-white/90 py-2 pl-6 pr-2 shadow-lg shadow-[#1b2b3b]/10 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className={`font-display text-xl font-light tracking-[0.1em] transition-colors md:text-2xl ${
              overlay ? "text-white" : "text-[#1b2b3b]"
            }`}
          >
            The George Hotel
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-3 lg:flex">
            <nav
              className={`flex items-center gap-1 rounded-full p-1.5 text-sm transition-colors ${
                overlay ? "bg-white/15 text-white backdrop-blur-md" : "bg-[#e8f1f5] text-[#1b2b3b]"
              }`}
            >
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-5 py-2 font-body transition-colors ${
                      isActive
                        ? "bg-[#1b2b3b] text-white"
                        : overlay
                        ? "hover:bg-white/20"
                        : "hover:bg-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <a
              href={PHONE_HREF}
              aria-label="Call us"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-105 ${
                overlay ? "bg-white text-[#1b2b3b]" : "bg-[#1b2b3b] text-white"
              }`}
            >
              <Phone size={16} />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className={`flex h-10 w-10 items-center justify-center transition-colors lg:hidden ${
              overlay ? "text-white" : "text-[#1b2b3b]"
            }`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl bg-white/95 p-3 shadow-2xl backdrop-blur-md lg:hidden">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 font-body ${
                    isActive ? "bg-[#1b2b3b] text-white" : "text-[#1b2b3b] hover:bg-[#e8f1f5]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="group mt-2 flex items-center justify-between rounded-full bg-[#e8f1f5] py-1.5 pl-6 pr-1.5 font-body font-medium text-[#1b2b3b]"
            >
              Book a suite
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b2b3b] text-white">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        )}
      </header>

      {/* On inner pages the header is fixed, so reserve its height.
          The homepage hero sits underneath the header on purpose. */}
      {!isHome && <div aria-hidden className="h-24" />}
    </>
  );
};

export default Navbar;