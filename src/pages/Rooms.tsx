import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import suiteImage from "@/assets/suite-presidential.jpg";
import heroImage from "@/assets/hero-hotel.jpg";
import {
  ArrowUpRight,
  Wifi,
  Car,
  Coffee,
  Tv,
  Bath,
  Wind,
  Utensils,
  Gem,
  UtensilsCrossed,
  CigaretteOff,
  CircleParking,
  Waves,
  Dumbbell,
  Plane,
  Briefcase,
  DoorOpen,
  KeyRound,
  ConciergeBell,
  PlugZap,
  Baby,
  Users,
  Soup,
  Presentation,
  PawPrint,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Palette (same as the home page)                                     */
/*   ink   #1b2b3b   aqua  #17a2e3   mist  #e8f1f5                     */
/* ------------------------------------------------------------------ */

/* In-room amenities: icon + label, so each icon can be named for screen readers */
const inRoom = {
  wifi: { icon: Wifi, label: "Free WiFi" },
  tv: { icon: Tv, label: "Smart TV" },
  coffee: { icon: Coffee, label: "Coffee maker" },
  bath: { icon: Bath, label: "Marble bathroom" },
  car: { icon: Car, label: "Private transfer" },
  dining: { icon: Utensils, label: "In-suite dining" },
  climate: { icon: Wind, label: "Climate control" },
  gem: { icon: Gem, label: "Premium extras" },
};

const rooms = [
  {
    name: "Deluxe Room",
    desc: "Elegantly appointed rooms featuring premium linens, marble bathrooms, and views of the manicured gardens.",
    price: "From $350",
    size: "45 m²",
    image: suiteImage,
    amenities: [inRoom.wifi, inRoom.tv, inRoom.coffee, inRoom.bath],
  },
  {
    name: "Executive Suite",
    desc: "Spacious suites with a separate living area, executive workspace, and access to the exclusive lounge.",
    price: "From $650",
    size: "75 m²",
    image: suiteImage,
    amenities: [inRoom.wifi, inRoom.tv, inRoom.coffee, inRoom.bath, inRoom.car],
  },
  {
    name: "Presidential Suite",
    desc: "The pinnacle of luxury with a private terrace, personal butler service, and panoramic vistas.",
    price: "From $1,200",
    size: "120 m²",
    image: suiteImage,
    amenities: [inRoom.wifi, inRoom.tv, inRoom.coffee, inRoom.bath, inRoom.car, inRoom.dining],
  },
  {
    name: "Royal Penthouse",
    desc: "An extraordinary residence with private pool, chef's kitchen, and helicopter transfer service.",
    price: "From $3,500",
    size: "250 m²",
    image: suiteImage,
    amenities: [
      inRoom.wifi,
      inRoom.tv,
      inRoom.coffee,
      inRoom.bath,
      inRoom.car,
      inRoom.dining,
      inRoom.climate,
      inRoom.gem,
    ],
  },
];

/* Hotel-wide amenities */
const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: CigaretteOff, label: "Non-smoking rooms" },
  { icon: UtensilsCrossed, label: "On-site restaurant" },
  { icon: CircleParking, label: "Free parking" },
  { icon: Waves, label: "Outdoor pool" },
  { icon: Dumbbell, label: "Fitness center" },
  { icon: Plane, label: "Airport shuttle" },
  { icon: Briefcase, label: "Business center" },
  { icon: DoorOpen, label: "Connecting Rooms" },
  { icon: KeyRound, label: "Digital Key" },
  { icon: ConciergeBell, label: "Concierge" },
  { icon: PlugZap, label: "EV charging" },
  { icon: Baby, label: "Cribs" },
  { icon: Users, label: "Childcare" },
  { icon: Soup, label: "Room service" },
  { icon: Presentation, label: "Meeting rooms" },
  { icon: PawPrint, label: "Pets not allowed", muted: true },
];

const ArrowCircle = () => (
  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1b2b3b] text-white transition-transform duration-300 group-hover:rotate-45">
    <ArrowUpRight size={18} />
  </span>
);

const Rooms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================ HERO ============================ */}
      <section className="m-0 p-0">
        <div className="relative m-0 h-[50vh] min-h-[340px] overflow-hidden bg-[#1b2b3b] p-0">
          <img
            src={suiteImage}
            alt="Presidential suite"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1822]/85 via-[#0e1822]/25 to-[#0e1822]/40 lg:bg-gradient-to-r lg:from-[#0e1822]/70 lg:via-[#0e1822]/20 lg:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 text-center md:pb-12 lg:px-10 lg:text-left">
            <p className="mb-3 font-body text-sm text-white/70">Accommodation</p>
            <h1 className="font-display text-[2.35rem] font-light leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4.1rem]">
              Rooms &amp; Suites
            </h1>
          </div>
        </div>
      </section>

      {/* ============================ ROOMS ============================ */}
      <section className="bg-[#e8f1f5] py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 font-body text-sm text-[#1b2b3b]/60">Choose your stay</p>
              <h2 className="font-display text-4xl font-light text-[#1b2b3b] md:text-5xl">
                Four ways to stay with us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.name} delay={(i % 2) * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-2.5">
                  {/* Image */}
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[18px]">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/40 px-4 py-1.5 font-body text-xs text-white backdrop-blur-md">
                      {room.size}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col px-4 pb-3 pt-6 md:px-5">
                    <h3 className="mb-3 font-display text-2xl font-semibold text-[#1b2b3b] md:text-3xl">
                      {room.name}
                    </h3>
                    <p className="mb-6 font-body text-sm leading-relaxed text-[#1b2b3b]/70">{room.desc}</p>

                    <ul className="mb-8 flex flex-wrap gap-2.5">
                      {room.amenities.map((a) => (
                        <li
                          key={a.label}
                          title={a.label}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f1f5]"
                        >
                          <a.icon size={18} className="text-[#17a2e3]" aria-hidden="true" />
                          <span className="sr-only">{a.label}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[#1b2b3b]/10 pt-5">
                      <p className="font-display text-2xl font-semibold text-[#1b2b3b]">{room.price}</p>
                      <Link
                        to="/contact"
                        className="group flex items-center gap-4 rounded-full bg-[#e8f1f5] py-1.5 pl-6 pr-1.5 font-body text-sm font-medium text-[#1b2b3b] transition-shadow hover:shadow-lg"
                      >
                        Book now
                        <ArrowCircle />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== AMENITIES ========================== */}
      <section className="p-2 md:p-3">
        <div className="rounded-[24px] bg-[#1b2b3b] px-6 py-16 md:rounded-[32px] md:py-24">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="mb-12 max-w-2xl">
                <p className="mb-4 font-body text-sm text-white/60">Amenities</p>
                <h2 className="font-display text-4xl font-light leading-tight text-white md:text-5xl">
                  Everything included for an effortless stay
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {amenities.map((a, i) => (
                <ScrollReveal key={a.label} delay={(i % 4) * 80}>
                  <div
                    className={`flex items-center gap-4 rounded-full p-2 pr-6 backdrop-blur-md ${
                      "muted" in a && a.muted ? "bg-white/5" : "bg-white/10"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        "muted" in a && a.muted ? "bg-white/20 text-white/70" : "bg-white text-[#1b2b3b]"
                      }`}
                    >
                      <a.icon size={18} />
                    </span>
                    <span
                      className={`font-body text-sm ${
                        "muted" in a && a.muted ? "text-white/60" : "text-white"
                      }`}
                    >
                      {a.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
                Ready to book your suite?
              </h2>
              <p className="mx-auto mb-10 max-w-xl font-body text-lg text-white/80">
                Reserve online and arrive to a room made ready for you.
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

export default Rooms;