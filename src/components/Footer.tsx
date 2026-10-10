import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold gold-text-gradient mb-4">
              The George Hotel
            </h3>
            <p className="text-ivory/70 text-sm leading-relaxed font-body">
              A 3-star luxury destination in the heart of Eswatini. 
              Experience timeless elegance and world-class hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Rooms & Suites", "Dining", "Spa & Wellness", "Events", "Contact"].map((name) => (
                <Link
                  key={name}
                  to={`/${name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-").replace("rooms-&-suites", "rooms")}`}
                  className="text-ivory/70 text-sm font-body hover:text-primary transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-ivory/70 font-body">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Eswatini</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+268 76265725</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>reservations@thegeorgehotel.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/50 text-xs font-body">
            © {new Date().getFullYear()} The George Hotel. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ivory/50 font-body">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
