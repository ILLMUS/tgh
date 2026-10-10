import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import suiteImage from "@/assets/suite-presidential.jpg";
import heroImage from "@/assets/hero-hotel.jpg";
import { Wifi, Car, Coffee, Tv, Bath, Wind, Utensils, Gem } from "lucide-react";

const rooms = [
  {
    name: "Deluxe Room",
    desc: "Elegantly appointed rooms featuring premium linens, marble bathrooms, and views of the manicured gardens.",
    price: "From $350",
    size: "45 m²",
    amenities: [Wifi, Tv, Coffee, Bath],
  },
  {
    name: "Executive Suite",
    desc: "Spacious suites with a separate living area, executive workspace, and access to the exclusive lounge.",
    price: "From $650",
    size: "75 m²",
    amenities: [Wifi, Tv, Coffee, Bath, Car],
  },
  {
    name: "Presidential Suite",
    desc: "The pinnacle of luxury with a private terrace, personal butler service, and panoramic vistas.",
    price: "From $1,200",
    size: "120 m²",
    amenities: [Wifi, Tv, Coffee, Bath, Car, Utensils],
  },
  {
    name: "Royal Penthouse",
    desc: "An extraordinary residence with private pool, chef's kitchen, and helicopter transfer service.",
    price: "From $3,500",
    size: "250 m²",
    amenities: [Wifi, Tv, Coffee, Bath, Car, Utensils, Wind, Gem],
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${suiteImage})` }} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Accommodation</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">Rooms & Suites</h1>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 space-y-20">
          {rooms.map((room, i) => (
            <ScrollReveal key={room.name} delay={i * 100}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={suiteImage}
                    alt={room.name}
                    className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
                <div>
                  <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">{room.size}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{room.name}</h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">{room.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {room.amenities.map((Icon, j) => (
                      <div key={j} className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Icon size={18} className="text-primary" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="font-display text-2xl font-bold text-primary">{room.price}</p>
                    <Link
                      to="/contact"
                      className="gold-gradient text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
