import ScrollReveal from "@/components/ScrollReveal";
import eventsImage from "@/assets/events.jpg";
import { Link } from "react-router-dom";
import { Crown, Building2, Heart, PartyPopper } from "lucide-react";

const venues = [
  {
    icon: Crown,
    name: "Grand Ballroom",
    capacity: "Up to 500 guests",
    desc: "A magnificent venue for galas, banquets, and celebrations of the highest order. Crystal chandeliers, gilded details, and impeccable service.",
  },
  {
    icon: Building2,
    name: "Conference Center",
    capacity: "Up to 200 delegates",
    desc: "State-of-the-art meeting rooms equipped with the latest technology, ideal for executive retreats and corporate events.",
  },
  {
    icon: Heart,
    name: "Wedding Hosting",
    capacity: "Bespoke packages",
    desc: "Create the wedding of your dreams in a setting of unrivalled elegance. Our dedicated planners ensure every detail is perfect.",
  },
  {
    icon: PartyPopper,
    name: "Private Celebrations",
    capacity: "Intimate to grand",
    desc: "From milestone birthdays to anniversary dinners, our private venues offer exclusivity and sophistication for every occasion.",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${eventsImage})` }} />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative z-10 text-center px-6">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Celebrations</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">Events & Conferences</h1>
        </div>
      </section>

      {/* Venues */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Unforgettable <span className="gold-text-gradient">Occasions</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                From intimate gatherings to grand celebrations, our venues and dedicated events team ensure every occasion is extraordinary.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {venues.map((venue, i) => (
              <ScrollReveal key={venue.name} delay={i * 100}>
                <div className="group bg-card rounded-xl overflow-hidden shadow-md border border-border hover:border-primary/30 transition-all">
                  <div className="h-52 overflow-hidden">
                    <img src={eventsImage} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <venue.icon className="text-primary mb-3" size={28} />
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">{venue.name}</h3>
                    <p className="text-primary text-sm font-body mb-3">{venue.capacity}</p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{venue.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-16">
              <Link
                to="/contact"
                className="gold-gradient text-primary-foreground px-10 py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-opacity inline-block"
              >
                Enquire About Events
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Event <span className="gold-text-gradient">Gallery</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={eventsImage} alt={`Event ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
