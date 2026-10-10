import ScrollReveal from "@/components/ScrollReveal";
import spaImage from "@/assets/spa.jpg";
import { Droplets, Flame, Waves, Dumbbell } from "lucide-react";

const services = [
  {
    icon: Droplets,
    name: "Massage Therapies",
    desc: "Indulge in our signature treatments — from deep tissue and hot stone to aromatherapy and traditional African healing rituals.",
    features: ["Swedish Massage", "Deep Tissue", "Hot Stone Therapy", "Couples Spa Experience"],
  },
  {
    icon: Flame,
    name: "Sauna & Steam",
    desc: "Detoxify and rejuvenate in our state-of-the-art sauna and steam facilities, designed for complete relaxation.",
    features: ["Finnish Sauna", "Eucalyptus Steam Room", "Cold Plunge Pool", "Relaxation Lounge"],
  },
  {
    icon: Waves,
    name: "Infinity Pool",
    desc: "Our spectacular infinity pool overlooks the African landscape, offering a serene escape with poolside service.",
    features: ["Heated Infinity Pool", "Poolside Cabanas", "Champagne Service", "Sunset Views"],
  },
  {
    icon: Dumbbell,
    name: "Fitness Center",
    desc: "A fully equipped modern gym with personal training, yoga studios, and wellness consultations.",
    features: ["Personal Training", "Yoga & Pilates Studio", "TechnoGym Equipment", "Wellness Programs"],
  },
];

const Spa = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${spaImage})` }} />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center px-6">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Rejuvenate</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">Spa & Wellness</h1>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                A Sanctuary of <span className="gold-text-gradient">Serenity</span>
              </h2>
              <p className="text-muted-foreground font-body">
                Surrender to tranquility in our world-class spa. Every treatment is designed to restore balance and awaken your senses.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 100}>
                <div className="bg-card rounded-xl p-8 shadow-md border border-border hover:border-primary/30 transition-colors">
                  <service.icon className="text-primary mb-4" size={36} />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{service.name}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="text-muted-foreground font-body text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spa;
