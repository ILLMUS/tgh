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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Est. 1998</p>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  A Legacy of <span className="gold-text-gradient">Excellence</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  For over two decades, The George Hotel has stood as Eswatini's premier luxury destination. 
                  Born from a vision to create an unparalleled hospitality experience, our hotel blends the rich 
                  cultural heritage of the region with world-class amenities and service.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Every detail — from the hand-selected marble in our lobby to the bespoke fragrances that grace 
                  our corridors — has been meticulously curated to create an atmosphere of refined elegance. 
                  Our commitment to excellence has earned us recognition among the finest hotels on the continent.
                </p>
              </div>
              <img src={exteriorImage} alt="Hotel exterior" className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center"><div className="w-24 h-0.5 gold-gradient rounded-full" /></div>

      {/* Vision */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl font-bold text-foreground mb-8">
                Our <span className="gold-text-gradient">Philosophy</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Heart, title: "Passion", desc: "Every interaction infused with genuine care and warmth." },
                  { icon: Eye, title: "Vision", desc: "Setting the standard for luxury hospitality in Africa." },
                  { icon: Award, title: "Excellence", desc: "Uncompromising quality in every detail, every day." },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-card rounded-xl shadow-sm border border-border">
                    <item.icon className="text-primary mx-auto mb-4" size={32} />
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center"><div className="w-24 h-0.5 gold-gradient rounded-full" /></div>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Our Team</p>
              <h2 className="font-display text-4xl font-bold text-foreground">
                <span className="gold-text-gradient">Leadership</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 100}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full gold-gradient flex items-center justify-center mb-4">
                    <span className="font-display text-xl font-bold text-primary-foreground">{leader.initials}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground">{leader.name}</h3>
                  <p className="text-muted-foreground text-sm font-body">{leader.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Awards & <span className="gold-text-gradient">Recognition</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <Award className="text-primary shrink-0" size={20} />
                  <p className="text-foreground font-body text-sm">{award}</p>
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
