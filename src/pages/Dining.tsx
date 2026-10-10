import ScrollReveal from "@/components/ScrollReveal";
import diningImage from "@/assets/dining.jpg";
import { Wine, UtensilsCrossed, GlassWater, Star } from "lucide-react";

const venues = [
  {
    icon: UtensilsCrossed,
    name: "The Crown Restaurant",
    desc: "Our signature restaurant offers a refined à la carte experience, showcasing the finest local and international flavours prepared by our award-winning culinary team.",
    menu: ["Pan-Seared Springbok Loin", "Lobster Thermidor", "Truffle Risotto", "Wagyu Beef Tenderloin"],
  },
  {
    icon: Star,
    name: "Private Dining",
    desc: "Intimate dining rooms for special occasions, featuring bespoke menus and dedicated sommeliers to curate the perfect wine pairing.",
    menu: ["Chef's Tasting Menu", "Wine Pairing Experience", "Celebration Packages", "Bespoke Menus"],
  },
  {
    icon: Wine,
    name: "The Cellar Wine Lounge",
    desc: "An extensive collection of over 500 wines from South Africa's premier estates and the world's most celebrated vineyards.",
    menu: ["Stellenbosch Reserves", "French Burgundy", "Champagne Selection", "Whiskey Collection"],
  },
  {
    icon: GlassWater,
    name: "Rooftop Bar",
    desc: "Craft cocktails and panoramic sunset views. The perfect setting for an unforgettable evening under the African sky.",
    menu: ["Signature Gold Martini", "African Sunset Spritz", "Artisan Cocktails", "Tapas & Light Bites"],
  },
];

const Dining = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${diningImage})` }} />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center px-6">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Culinary Excellence</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">Dining</h1>
        </div>
      </section>

      {/* Venues */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 space-y-20">
          {venues.map((venue, i) => (
            <ScrollReveal key={venue.name} delay={i * 100}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={diningImage}
                    alt={venue.name}
                    className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <venue.icon className="text-primary mb-4" size={32} />
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory mb-4">{venue.name}</h2>
                  <p className="text-ivory/70 font-body leading-relaxed mb-6">{venue.desc}</p>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">Menu Highlights</h3>
                  <ul className="space-y-2">
                    {venue.menu.map((item) => (
                      <li key={item} className="text-ivory/60 font-body text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dining;
