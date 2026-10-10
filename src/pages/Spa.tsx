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
    <div className="m-0 min-h-screen p-0">
      {/* Hero — full width, zero margin and padding */}
      <section className="relative m-0 flex h-[50vh] w-full items-center justify-center overflow-hidden p-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${spaImage})` }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 px-6 text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary">
            Rejuvenate
          </p>
          <h1 className="font-display text-5xl font-bold text-primary-foreground md:text-6xl">
            Spa & Wellness
          </h1>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-display text-4xl font-bold text-foreground">
                A Sanctuary of <span className="gold-text-gradient">Serenity</span>
              </h2>
              <p className="font-body text-muted-foreground">
                Surrender to tranquility in our world-class spa. Every treatment is designed to restore balance and awaken your senses.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, i) => (
              <ScrollReveal key={service.name} delay={i * 100}>
                <div className="rounded-xl border border-border bg-card p-8 shadow-md transition-colors hover:border-primary/30">
                  <service.icon className="mb-4 text-primary" size={36} />
                  <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
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
