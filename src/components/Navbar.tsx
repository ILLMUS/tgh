import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  ChevronRight,
  Home,
  Info,
  Mail,
  MoreHorizontal,
  Phone,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

/* Palette (same as the homepage): ink #1b2b3b, aqua #17a2e3, mist #e8f1f5 */

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Suites", to: "/rooms" },
  { label: "Dining", to: "/dining" },
  { label: "Spa", to: "/spa" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

/* Mobile bottom tab bar (iOS keeps tab bars to 5 items, so the rest live under "More") */
const tabs = [
  { label: "Home", to: "/", icon: Home },
  { label: "Suites", to: "/rooms", icon: BedDouble },
  { label: "Dining", to: "/dining", icon: UtensilsCrossed },
  { label: "Events", to: "/events", icon: CalendarDays },
];

const moreLinks = [
  { label: "About", to: "/about", icon: Info },
  { label: "Spa & Wellness", to: "/spa", icon: Sparkles },
  { label: "Contact", to: "/contact", icon: Mail },
];

const PHONE_HREF = "tel:+26800000000"; // placeholder: replace with the real number

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Overlay style (white text on the photo) only on the homepage, before scrolling.
  // Everywhere else the header is a light frosted bar so it stays readable.
  const overlay = isHome && !scrolled;

  const moreActive =
    moreOpen || moreLinks.some((l) => pathname === l.to || pathname.startsWith(`${l.to}/`));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the "More" sheet on navigation or Escape
  useEffect(() => setMoreOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMoreOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Mobile only: keep page content clear of the floating tab bar, and animate the sheet */}
      <style>{`
        @media (max-width: 1023px) {
          body { padding-bottom: calc(5.75rem + env(safe-area-inset-bottom)); }
        }
        @keyframes sheet-up {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sheet-up { animation: sheet-up 220ms cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        @media (prefers-reduced-motion: reduce) { .sheet-up { animation: none; } }
      `}</style>

      {/* ====================== DESKTOP HEADER (lg and up) ====================== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden transition-all duration-300 lg:block ${
          overlay ? "px-14 pt-10" : "px-6 pt-3"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            overlay
              ? "max-w-none"
              : "max-w-7xl rounded-full bg-white/90 py-2 pl-6 pr-2 shadow-lg shadow-[#1b2b3b]/10 backdrop-blur-md"
          }`}
        >
          <Link
            to="/"
            className={`font-display text-2xl font-light tracking-[0.1em] transition-colors ${
              overlay ? "text-white" : "text-[#1b2b3b]"
            }`}
          >
            The George Hotel
          </Link>

          <div className="flex items-center gap-3">
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
        </div>
      </header>

      {/* ======================== MOBILE TOP BAR (below lg) ======================== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 lg:hidden ${
          overlay
            ? "border-b border-transparent bg-transparent"
            : "border-b border-[#1b2b3b]/10 bg-white/75 backdrop-blur-xl"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex h-14 items-center justify-between px-4">
          <Link
            to="/"
            className={`font-display text-lg font-light tracking-[0.08em] transition-colors ${
              overlay ? "text-white" : "text-[#1b2b3b]"
            }`}
          >
            The George Hotel
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              aria-label="Call us"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors active:scale-95 ${
                overlay
                  ? "bg-white/20 text-white backdrop-blur-md"
                  : "bg-[#e8f1f5] text-[#1b2b3b]"
              }`}
            >
              <Phone size={17} />
            </a>
            <Link
              to="/contact"
              className={`flex h-10 items-center rounded-full px-4 font-body text-sm font-medium transition-colors active:scale-95 ${
                overlay ? "bg-white text-[#1b2b3b]" : "bg-[#1b2b3b] text-white"
              }`}
            >
              Book
            </Link>
          </div>
        </div>
      </header>

      {/* ===================== MOBILE "MORE" SHEET (below lg) ===================== */}
      {moreOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMoreOpen(false)}
            className="fixed inset-0 z-40 bg-[#0e1822]/30 backdrop-blur-sm lg:hidden"
          />
          <div
            role="dialog"
            aria-label="More"
            className="sheet-up fixed inset-x-3 z-[45] mx-auto max-w-md rounded-[28px] border border-white/60 bg-white/90 p-2 shadow-2xl shadow-[#1b2b3b]/25 backdrop-blur-xl lg:hidden"
            style={{ bottom: "calc(5.5rem + env(safe-area-inset-bottom))" }}
          >
            <ul className="divide-y divide-[#1b2b3b]/10">
              {moreLinks.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-[20px] px-3 py-3 font-body text-[15px] transition-colors active:bg-[#e8f1f5] ${
                        isActive ? "text-[#17a2e3]" : "text-[#1b2b3b]"
                      }`
                    }
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f1f5]">
                      <item.icon size={18} />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight size={18} className="text-[#1b2b3b]/40" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="group mt-2 flex items-center justify-between rounded-full bg-[#e8f1f5] py-1.5 pl-6 pr-1.5 font-body font-medium text-[#1b2b3b]"
            >
              Book a suite
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1b2b3b] text-white">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </>
      )}

      {/* ==================== MOBILE BOTTOM TAB BAR (below lg) ==================== */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-50 px-3 lg:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <ul className="mx-auto flex max-w-md items-stretch gap-1 rounded-[28px] border border-white/60 bg-white/75 p-1.5 shadow-2xl shadow-[#1b2b3b]/20 backdrop-blur-xl">
          {tabs.map((tab) => (
            <li key={tab.label} className="flex-1">
              <NavLink
                to={tab.to}
                end={tab.to === "/"}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 rounded-[22px] py-2 font-body text-[10px] font-medium transition-colors active:scale-95 ${
                    isActive && !moreOpen
                      ? "bg-[#1b2b3b] text-white"
                      : "text-[#1b2b3b]/70"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <tab.icon size={22} strokeWidth={isActive && !moreOpen ? 2.2 : 1.8} />
                    {tab.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <li className="flex-1">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((o) => !o)}
              className={`flex w-full flex-col items-center gap-1 rounded-[22px] py-2 font-body text-[10px] font-medium transition-colors active:scale-95 ${
                moreActive ? "bg-[#1b2b3b] text-white" : "text-[#1b2b3b]/70"
              }`}
            >
              <MoreHorizontal size={22} strokeWidth={moreActive ? 2.2 : 1.8} />
              More
            </button>
          </li>
        </ul>
      </nav>

      {/* The fixed header no longer reserves space on inner pages, so heroes can sit flush
          at the top (0 margin / 0 padding) with the header floating over them. */}
    </>
  );
};

export default Navbar;