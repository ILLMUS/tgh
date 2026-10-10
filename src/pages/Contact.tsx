import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-hotel.jpg";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    roomType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: integrate with booking system
    alert("Thank you for your reservation request. Our team will contact you shortly.");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">Contact & Reservations</h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info + Map */}
            <ScrollReveal>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Reach <span className="gold-text-gradient">Us</span>
                </h2>
                <div className="space-y-6 mb-10">
                  {[
                    { icon: MapPin, label: "Location", value: "Eswatini" },
                    { icon: Phone, label: "Phone", value: "+268 76265725" },
                    { icon: Mail, label: "Email", value: "reservations@thegeorgehotel.com" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-foreground">{item.label}</p>
                        <p className="text-muted-foreground font-body text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/26876265725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(142_71%_35%)] text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:bg-[hsl(142_71%_30%)] transition-colors mb-10"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp
                </a>

                {/* Map placeholder */}
                <div className="w-full h-64 rounded-xl overflow-hidden border border-border">
                  <iframe
                    title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7238579.041417553!2d22.9375!3d-30.5595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sEswatini!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Reservation Form */}
            <ScrollReveal delay={200}>
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Make a <span className="gold-text-gradient">Reservation</span>
                </h2>
                <p className="text-muted-foreground font-body text-sm mb-8">
                  Fill out the form below and our concierge team will respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-1">Check-in</label>
                      <input
                        type="date"
                        required
                        value={form.checkin}
                        onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-1">Check-out</label>
                      <input
                        type="date"
                        required
                        value={form.checkout}
                        onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Room Type</label>
                    <select
                      value={form.roomType}
                      onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select room type</option>
                      <option value="deluxe">Deluxe Room</option>
                      <option value="executive">Executive Suite</option>
                      <option value="presidential">Presidential Suite</option>
                      <option value="penthouse">Royal Penthouse</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Special requests or enquiries..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient text-primary-foreground py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-opacity"
                  >
                    Submit Reservation
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
