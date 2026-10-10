import ScrollReveal from "@/components/ScrollReveal";
import exteriorImage from "@/assets/hotel-exterior.jpg";
import heroImage from "@/assets/hero-hotel.jpg";
import { Award, Eye, Heart, Users } from "lucide-react";

const leaders = [
  { name: "Alexander Moyo", role: "General Manager", initials: "AM" },
  { name: "Isabella van der Merwe", role: "Director of Hospitality", initials: "IV" },
  { name: "David Ndlovu", role: "Executive Chef", initials: "DN" },
  { name: "Sarah Botha", role: "Spa Director", initials: "SB" },
];

const awards = [
  "World Luxury Hotel Awards — Best Luxury Hotel in Southern Africa",
  "TripAdvisor Travelers' Choice — Top 1% Worldwide",
  "Condé Nast Traveler — Gold List",
  "African Hospitality Awards — Excellence in Service",
];

const About = () => {
  return (
    <div className="m-0 min-h-screen p-0">
      {/* Hero — full width, zero margin and padding */}
      <section className="relative m-0 flex h-[50vh] w-full items-center justify-center overflow-hidden p-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 px-6 text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary">
            Our Story
          </p>
          <h1 className="font-display text-5xl font-bold text-primary-foreground md:text-6xl">
            About Us
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary">
                  Est. 1998
                </p>
                <h2 className="mb-6 font-display text-4xl font-bold text-foreground">
                  A Legacy of <span className="gold-text-gradient">Excellence</span>
                </h2>
                <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                  For over two decades, The George Hotel has stood as Eswatini's premier luxury destination.
                  Born from a vision to create an unparalleled hospitality experience, our hotel blends the rich
                  cultural heritage of the region with world-class amenities and service.
                </p>
                <p className="font-body leading-relaxed text-muted-foreground">
                  Every detail — from the hand-selected marble in our lobby to the bespoke fragrances that grace
                  our corridors — has been meticulously curated to create an atmosphere of refined elegance.
                  Our commitment to excellence has earned us recognition among the finest hotels on the continent.
                </p>
              </div>
              <img
                src={exteriorImage}
                alt="Hotel exterior"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="gold-gradient h-0.5 w-24 rounded-full" />
      </div>

      {/* Vision */}
      <section className="bg-accent/30 py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 font-display text-4xl font-bold text-foreground">
                Our <span className="gold-text-gradient">Philosophy</span>
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: Heart,
                    title: "Passion",
                    desc: "Every interaction infused with genuine care and warmth.",
                  },
                  {
                    icon: Eye,
                    title: "Vision",
                    desc: "Setting the standard for luxury hospitality in Africa.",
                  },
                  {
                    icon: Award,
                    title: "Excellence",
                    desc: "Uncompromising quality in every detail, every day.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm"
                  >
                    <item.icon className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="gold-gradient h-0.5 w-24 rounded-full" />
      </div>

      {/* Leadership */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-primary">
                Our Team
              </p>
              <h2 className="font-display text-4xl font-bold text-foreground">
                <span className="gold-text-gradient">Leadership</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 100}>
                <div className="text-center">
                  <div className="gold-gradient mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
                    <span className="font-display text-xl font-bold text-primary-foreground">
                      {leader.initials}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground">{leader.name}</h3>
                  <p className="font-body text-sm text-muted-foreground">{leader.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-accent/30 py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Awards & <span className="gold-text-gradient">Recognition</span>
              </h2>
            </div>
            <div className="mx-auto max-w-2xl space-y-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <Award className="shrink-0 text-primary" size={20} />
                  <p className="font-body text-sm text-foreground">{award}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
