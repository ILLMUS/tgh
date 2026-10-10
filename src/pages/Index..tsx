import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {

  ArrowUpRight,

  Crown,

  UtensilsCrossed,

  Sparkles,

  CalendarDays,

  Menu,

  X,

  Phone,

  MapPin,

  Star,
  Wifi,
  CigaretteOff,
  CarFront,
  Waves,
  Dumbbell,
  Plane,
  BriefcaseBusiness,
  DoorOpen,
  KeyRound,
  ConciergeBell,
  Zap,
  Baby,
  HeartHandshake,
  BellRing,
  Users,
  Ban,
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";

import heroImage from "@/assets/hero-hotel.jpg";

import exteriorImage from "@/assets/hotel-exterior.jpg";

import suiteImage from "@/assets/suite-presidential.jpg";

import diningImage from "@/assets/dining.jpg";

import spaImage from "@/assets/spa.jpg";

import eventsImage from "@/assets/events.jpg";

/* ------------------------------------------------------------------ */

/* Palette, taken from the hero photo                                  */

/*   ink   #1b2b3b  (the slate-blue building)                          */

/*   aqua  #17a2e3  (the pool)                                         */

/*   mist  #e8f1f5  (pale pool-deck tint)                              */

/* ------------------------------------------------------------------ */

/* hero-hotel.jpg is 1440 x 1039 */

const HERO_RATIO = 1440 / 1039;

const navLinks = [

  { label: "About", to: "/about" },

  { label: "Suites", to: "/rooms" },

  { label: "Dining", to: "/dining" },

  { label: "Spa", to: "/spa" },

  { label: "Events", to: "/events" },

  { label: "Contact", to: "/contact" },

];

const heroSlides = [

  {

    image: suiteImage,

    title: "Your royal escape starts here",

    text: "A private suite steps from the pool, with every amenity of a hotel.",

  },

  {

    image: diningImage,

    title: "Dine beyond the ordinary",

    text: "Award-winning chefs and the finest local ingredients, served in an unforgettable setting.",

  },

  {

    image: spaImage,

    title: "Unwind in total calm",

    text: "Bespoke treatments and a pool-side retreat to reset body and mind.",

  },

];

/*

  Hotspots are positioned in % of the PHOTO itself (x / 1440, y / 1039),

  not of the screen, so they stay pinned to the right spot at any size.

  side = which way the label extends from the dot.

*/

const hotspots = [

  { label: "Courtyard suites", x: 55.5, y: 29.8, side: "right" },

  { label: "Poolside lounge", x: 53.5, y: 37, side: "right" },

  { label: "Plunge pool", x: 50.7, y: 43.8, side: "left" },

  { label: "Swimming pool", x: 33.3, y: 69.3, side: "right" },

] as const;

const stats = [

  { value: "4.9", caption: "out of 5 – average guest rating" },

  { value: "94%", caption: "of guests return again" },

  { value: "60+", caption: "m² of private space per suite" },

];

const avatars = ["#c9a77c", "#8a6f56", "#d8b9a0", "#6f7f66"];

const experiences = [

  { icon: Crown, title: "Presidential Suites", desc: "Opulent accommodations with panoramic views and personal butler service.", image: suiteImage, link: "/rooms" },

  { icon: UtensilsCrossed, title: "Fine Dining", desc: "World-class cuisine crafted by award-winning chefs using the finest ingredients.", image: diningImage, link: "/dining" },

  { icon: Sparkles, title: "Spa & Wellness", desc: "Rejuvenate your senses with bespoke treatments and infinity pool retreats.", image: spaImage, link: "/spa" },

  { icon: CalendarDays, title: "Events & Conferences", desc: "Magnificent venues for celebrations, galas, and corporate gatherings.", image: eventsImage, link: "/events" },

];

const testimonials = [

  { name: "Victoria L.", text: "An unparalleled experience. The attention to detail and warmth of service made our stay truly extraordinary.", rating: 5 },

  { name: "James M.", text: "From the moment we arrived, we were treated like royalty. The Presidential Suite exceeded every expectation.", rating: 5 },

  { name: "Amara K.", text: "The spa was heavenly and the dining experience was world-class. We will return every year.", rating: 5 },

];

const galleryImages = [heroImage, exteriorImage, suiteImage, diningImage, spaImage, eventsImage];

/* ------------------------------------------------------------------ */

/* Small pieces                                                        */

/* ------------------------------------------------------------------ */

const ArrowCircle = () => (

  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1b2b3b] text-white transition-transform duration-300 group-hover:rotate-45">

    <ArrowUpRight size={18} />

  </span>

);

const amenities = [
  { label: "Free WiFi", icon: Wifi },
  { label: "Non-smoking rooms", icon: CigaretteOff },
  { label: "On-site restaurant", icon: UtensilsCrossed },
  { label: "Free parking", icon: CarFront },
  { label: "Outdoor pool", icon: Waves },
  { label: "Fitness center", icon: Dumbbell },
  { label: "Airport shuttle", icon: Plane },
  { label: "Business center", icon: BriefcaseBusiness },
  { label: "Connecting Rooms", icon: DoorOpen },
  { label: "Digital Key", icon: KeyRound },
  { label: "Concierge", icon: ConciergeBell },
  { label: "EV charging", icon: Zap },
  { label: "Cribs", icon: Baby },
  { label: "Childcare", icon: HeartHandshake },
  { label: "Room service", icon: BellRing },
  { label: "Meeting rooms", icon: Users },
  { label: "Pets not allowed", icon: Ban },
];

const Index = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [slide, setSlide] = useState(0);

  useEffect(() => {

    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);

    return () => clearInterval(id);

  }, []);

  return (

    <div className="min-h-screen bg-white">

      {/* ============================ HERO ============================ */}

      <section className="h-[100svh] min-h-[640px] p-2 md:p-3">

        {/* [container-type:size] lets the photo layer below size itself in cqw/cqh */}

        <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#1b2b3b] [container-type:size] md:rounded-[32px]">

          {/*

            Photo layer: behaves like object-fit: cover, but is a real box,

            so hotspots can be placed in % of the photo.

            --ax / --ay = which point of the photo is pinned to the same point of the hero.

            Mobile: x 40% keeps the middle umbrella + pool steps in the portrait crop.

            Desktop: y 35% keeps the umbrellas, balconies and pool in a wide crop.

          */}

          <div

            className="absolute w-full [--ax:40%] [--ay:50%] lg:[--ax:50%] lg:[--ay:35%]"

            style={{

              width: `max(100cqw, ${HERO_RATIO * 100}cqh)`,

              aspectRatio: `${HERO_RATIO}`,

              left: "var(--ax)",

              top: "var(--ay)",

              transform: "translate(calc(var(--ax) * -1), calc(var(--ay) * -1))",

            }}

          >

            <img

              src={heroImage}

              alt="Pool and courtyard suites at Royal East Wing"

              className="h-full w-full object-cover"

            />

            {/* Hotspots (desktop only), pinned to the photo */}

            {hotspots.map((h) => (

              <div

                key={h.label}

                className={`absolute z-20 hidden -translate-y-1/2 items-center gap-2 lg:flex ${

                  h.side === "right" ? "flex-row" : "-translate-x-full flex-row-reverse"

                }`}

                style={{ left: `${h.x}%`, top: `${h.y}%` }}

              >

                <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.35)]" />

                <span className="h-px w-8 bg-white/70" />

                <span className="whitespace-nowrap rounded-full bg-black/40 px-4 py-1.5 font-body text-xs text-white backdrop-blur-md">

                  {h.label}

                </span>

              </div>

            ))}

          </div>

          {/* Legibility overlays: left for the headline, top/bottom for nav and stats */}

          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0e1822]/65 via-[#0e1822]/15 to-transparent lg:block" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1822]/85 via-[#0e1822]/5 to-[#0e1822]/40 lg:from-[#0e1822]/60 lg:via-transparent lg:to-[#0e1822]/25" />

          {/* ---------- Headline block ---------- */}

          <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 text-center md:pb-12 lg:inset-x-auto lg:bottom-auto lg:left-10 lg:top-[24%] lg:max-w-[640px] lg:px-0 lg:pb-0 lg:text-left">

            <h1 className="font-display text-[2.35rem] font-light leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4.1rem]">

              Instant online

              <span className="mx-2 hidden h-[0.8em] w-[2.2em] translate-y-[0.12em] overflow-hidden rounded-full align-baseline lg:inline-block">

                <img src={heroImage} alt="" className="h-full w-full object-cover object-[50%_85%]" />

              </span>

              <br className="lg:hidden" /> booking and total relaxation tomorrow

            </h1>

            <div className="mt-6 flex flex-col items-center gap-5 lg:mt-8 lg:flex-row lg:items-center lg:gap-6">

              <p className="order-1 max-w-[19rem] font-body text-sm leading-relaxed text-white/90 lg:order-2 lg:max-w-[16rem]">

                Poolside suites, a sunny courtyard and hotel-level service in Eswatini.

              </p>

              <Link

                to="/contact"

                className="group order-2 flex items-center gap-4 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-body text-base font-medium text-[#1b2b3b] shadow-lg transition-shadow hover:shadow-2xl lg:order-1"

              >

                Book a suite

                <ArrowCircle />

              </Link>

            </div>

          </div>

          {/* Location tag (desktop) */}

          <div className="absolute left-[44%] top-[15%] z-20 hidden items-center gap-2 rounded-full bg-black/40 px-4 py-1.5 font-body text-xs text-white backdrop-blur-md lg:flex">

            <MapPin size={12} /> Ngwane Street, Manzini, Eswatini, M200

          </div>

          {/* ---------- Slide card (desktop) ---------- */}

          <div className="absolute right-6 top-24 z-30 hidden w-[290px] lg:block xl:right-8">

            <div className="rounded-[22px] bg-white p-2.5 shadow-2xl">

              <div className="relative h-[190px] overflow-hidden rounded-[16px]">

                {heroSlides.map((s, i) => (

                  <img

                    key={s.title}

                    src={s.image}

                    alt={s.title}

                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${

                      i === slide ? "opacity-100" : "opacity-0"

                    }`}

                  />

                ))}

                <Link

                  to="/rooms"

                  aria-label="View suites"

                  className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1b2b3b] transition-transform hover:scale-105"

                >

                  <ArrowUpRight size={16} />

                </Link>

              </div>

              <div className="px-2 pb-2 pt-4 text-center">

                <p className="font-display text-base font-semibold text-[#1b2b3b]">

                  {heroSlides[slide].title}

                </p>

                <p className="mt-1 font-body text-xs leading-relaxed text-[#1b2b3b]/60">

                  {heroSlides[slide].text}

                </p>

                <div className="mt-4 flex justify-center gap-1.5">

                  {heroSlides.map((s, i) => (

                    <button

                      key={s.title}

                      type="button"

                      aria-label={`Show slide ${i + 1}`}

                      onClick={() => setSlide(i)}

                      className={`h-1.5 rounded-full transition-all ${

                        i === slide ? "w-8 bg-[#17a2e3]" : "w-1.5 bg-[#1b2b3b]/25"

                      }`}

                    />

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* ---------- Reviews card (desktop) ---------- */}

          <a

            href="#reviews"

            className="group absolute bottom-6 left-6 z-30 hidden w-[170px] rounded-[20px] bg-white p-3 shadow-xl lg:block xl:left-8"

          >

            <div className="flex items-center gap-2">

              <div className="flex -space-x-2">

                {avatars.map((c, i) => (

                  <span

                    key={i}

                    className="h-7 w-7 rounded-full border-2 border-white"

                    style={{ backgroundColor: c }}

                  />

                ))}

              </div>

              <p className="font-body text-[10px] leading-tight text-[#1b2b3b]/70">

                100+ happy

                <br />

                guests

              </p>

            </div>

            <div className="mt-3 flex items-end justify-between border-t border-[#1b2b3b]/10 pt-2 font-body text-xs text-[#1b2b3b]">

              <span>

                Read

                <br />

                reviews

              </span>

              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />

            </div>

          </a>

          {/* ---------- Stats (desktop) ---------- */}

          <div className="absolute bottom-8 right-8 z-20 hidden gap-10 text-white drop-shadow-md lg:flex xl:right-12">

            {stats.map((s) => (

              <div key={s.value} className="max-w-[130px]">

                <p className="font-display text-5xl font-light leading-none xl:text-6xl">{s.value}</p>

                <p className="mt-2 font-body text-[11px] leading-snug text-white/90">{s.caption}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ============================ ABOUT ============================ */}

      <section className="bg-white py-20 md:py-28">

        <div className="container mx-auto px-6">

          <ScrollReveal>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              <div className="relative">

                <img

                  src={exteriorImage}

                  alt="Royal East Wing exterior"

                  className="aspect-[4/5] w-full rounded-[28px] object-cover md:aspect-square"

                />

                <div className="absolute -bottom-5 right-4 rounded-2xl bg-[#1b2b3b] px-6 py-5 text-white shadow-xl md:-right-6">

                  <p className="font-display text-4xl font-light">25+</p>

                  <p className="font-body text-xs text-white/75">Years of excellence</p>

                </div>

              </div>

              <div>

                <p className="mb-4 font-body text-sm text-[#1b2b3b]/60">Welcome to The George Hotel</p>

                <h2 className="mb-6 font-display text-4xl font-light leading-tight text-[#1b2b3b] md:text-5xl">

                  A legacy of distinction in the heart of Eswatini

                </h2>

                <p className="mb-10 max-w-xl font-body leading-relaxed text-[#1b2b3b]/70">

                  The George Hotel stands as a beacon of refined luxury and world-class hospitality. Our

                  commitment to excellence has earned us recognition among the finest hotels on the

                  continent, blending Eswatini warmth with international sophistication.

                </p>

                <div className="grid grid-cols-3 gap-3 md:gap-4">

                  {[

                    { label: "5-Star Service", value: "Excellence" },

                    { label: "Prime Location", value: "Southern Africa" },

                    { label: "Award-Winning", value: "Hospitality" },

                  ].map((item) => (

                    <div key={item.label} className="rounded-2xl bg-[#e8f1f5] p-4 text-center">

                      <p className="font-display text-sm font-semibold text-[#1b2b3b]">{item.value}</p>

                      <p className="mt-1 font-body text-xs text-[#1b2b3b]/60">{item.label}</p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>

      {/* ========================= EXPERIENCES ========================= */}

      <section className="bg-[#e8f1f5] py-20 md:py-28">

        <div className="container mx-auto px-6">

          <ScrollReveal>

            <div className="mb-14 max-w-2xl">

              <p className="mb-4 font-body text-sm text-[#1b2b3b]/60">Curated experiences</p>

              <h2 className="font-display text-4xl font-light text-[#1b2b3b] md:text-5xl">

                Everything you need for a complete stay

              </h2>

            </div>

          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {experiences.map((exp, i) => (

              <ScrollReveal key={exp.title} delay={i * 100}>

                <Link

                  to={exp.link}

                  className="group block h-full overflow-hidden rounded-[24px] bg-white"

                >

                  <div className="h-52 overflow-hidden">

                    <img

                      src={exp.image}

                      alt={exp.title}

                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"

                    />

                  </div>

                  <div className="p-6">

                    <div className="mb-3 flex items-center justify-between">

                      <exp.icon className="text-[#17a2e3]" size={26} />

                      <ArrowUpRight

                        size={18}

                        className="text-[#1b2b3b]/50 transition-transform group-hover:rotate-45"

                      />

                    </div>

                    <h3 className="mb-2 font-display text-xl font-semibold text-[#1b2b3b]">{exp.title}</h3>

                    <p className="font-body text-sm leading-relaxed text-[#1b2b3b]/65">{exp.desc}</p>

                  </div>

                </Link>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>

      {/* =========================== AMENITIES =========================== */}
      <section className="relative overflow-hidden bg-white px-2 py-16 md:px-3 md:py-24">
        <div className="relative overflow-hidden rounded-[24px] bg-[#1b2b3b] px-5 py-14 text-white md:rounded-[32px] md:px-12 md:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />

          <ScrollReveal>
            <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-[#17a2e3]">
                Thoughtful comforts
              </p>
              <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Everything you need,
                <span className="block italic text-white/70">all in one place.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-relaxed text-white/70 md:text-base">
                From effortless connectivity to moments of relaxation, discover the amenities designed to make every stay comfortable.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {amenities.map((amenity, index) => (
              <ScrollReveal key={amenity.label} delay={(index % 4) * 60}>
                <div className="group flex h-full min-h-[112px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#17a2e3]/50 hover:bg-white/[0.09] sm:min-h-[132px] sm:px-4 sm:py-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#17a2e3]/10 text-[#45b9ef] transition-all duration-300 group-hover:bg-[#17a2e3] group-hover:text-white">
                    <amenity.icon size={21} strokeWidth={1.6} />
                  </div>
                  <span className="font-body text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                    {amenity.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="relative z-10 mt-10 flex justify-center md:mt-14">
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-5 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-body text-sm font-medium text-[#1b2b3b] transition-all duration-300 hover:bg-[#e8f1f5] sm:text-base"
              >
                View All
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1b2b3b] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ GALLERY ============================ */}

      <section className="bg-white py-20 md:py-28">

        <div className="container mx-auto px-6">

          <ScrollReveal>

            <div className="mb-14 max-w-2xl">

              <p className="mb-4 font-body text-sm text-[#1b2b3b]/60">Visual journey</p>

              <h2 className="font-display text-4xl font-light text-[#1b2b3b] md:text-5xl">Gallery</h2>

            </div>

          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">

            {galleryImages.map((img, i) => (

              <ScrollReveal key={i} delay={i * 80}>

                <div className="group aspect-[4/3] overflow-hidden rounded-[20px]">

                  <img

                    src={img}

                    alt={`Gallery ${i + 1}`}

                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"

                  />

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>

      {/* =========================== TESTIMONIALS =========================== */}

      <section id="reviews" className="bg-[#e8f1f5] py-20 md:py-28">

        <div className="container mx-auto px-6">

          <ScrollReveal>

            <div className="mb-14 max-w-2xl">

              <p className="mb-4 font-body text-sm text-[#1b2b3b]/60">Guest reviews</p>

              <h2 className="font-display text-4xl font-light text-[#1b2b3b] md:text-5xl">

                What our guests say

              </h2>

            </div>

          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">

            {testimonials.map((t, i) => (

              <ScrollReveal key={i} delay={i * 150}>

                <div className="h-full rounded-[24px] bg-white p-8">

                  <div className="mb-4 flex gap-1">

                    {Array.from({ length: t.rating }).map((_, j) => (

                      <Star key={j} size={16} className="fill-[#17a2e3] text-[#17a2e3]" />

                    ))}

                  </div>

                  <p className="mb-6 font-body text-sm leading-relaxed text-[#1b2b3b]/75">“{t.text}”</p>

                  <p className="font-display font-semibold text-[#1b2b3b]">{t.name}</p>

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>

      {/* ============================== CTA ============================== */}

      <section className="p-2 md:p-3">

        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px]">

          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />

          <div className="absolute inset-0 bg-[#1b2b3b]/75" />

          <div className="relative z-10 px-6 py-20 text-center md:py-28">

            <ScrollReveal>

              <h2 className="mx-auto mb-5 max-w-2xl font-display text-4xl font-light text-white md:text-5xl">

                Indulge in the royal experience

              </h2>

              <p className="mx-auto mb-10 max-w-xl font-body text-lg text-white/80">

                Your stay is waiting. Reserve online and arrive to a suite made ready for you.

              </p>

              <Link

                to="/contact"

                className="group inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-7 pr-1.5 font-body text-base font-medium text-[#1b2b3b] shadow-lg"

              >

                Reserve now

                <ArrowCircle />

              </Link>

            </ScrollReveal>

          </div>

        </div>

      </section>

    </div>

  );

};

export default Index;