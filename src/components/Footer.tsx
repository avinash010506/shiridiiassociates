import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";

const callUrl = "tel:9438266515";
const whatsappUrl = "https://wa.me/919438266515?text=Hi%20Shiridi%20Associates%2C%20I%20need%20details%20about%20your%20products.";

const Footer = () => (
  <footer className="bg-card text-card-foreground border-t border-border">
    <div className="container py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="md:col-span-1">
        {/* Changed to flex-col to prevent horizontal overlap with Quick Links */}
        <div className="flex flex-col items-start gap-4 mb-6">
          <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 group cursor-default">
            {/* Massive ambient background pulse glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-orange-400/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
            {/* Delicate outer ring that illuminates on hover */}
            <div className="absolute -inset-1 rounded-full border border-transparent group-hover:border-primary/20 transition-colors duration-700 z-0"></div>
            {/* Inner glass ring over image */}
            <div className="absolute inset-0 rounded-full border border-primary/10 group-hover:border-orange-400/40 transition-colors duration-700 z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"></div>

            {/* Direct image without strict circular background container */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <img
                src="/favicon.png"
                alt="Logo"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </div>
          </div>
          <h3 className="font-display text-4xl font-bold drop-shadow-sm leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5c92f5] to-[#f97316]">
            Shiridi Associates
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed whitespace-nowrap">
          Premium construction supply partner since 1994.
        </p>
      </div>
      <div>
        <h4 className="font-display text-xl mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
          {[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: "Contact", to: "/contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-primary transition-colors flex items-center gap-1 group">
              <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display text-xl mb-4">Products</h4>
        <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
          <Link to="/products?cat=cement" className="hover:text-primary transition-colors">Cement</Link>
          <Link to="/products?cat=steel" className="hover:text-primary transition-colors">Steel & TMT Bars</Link>
          <Link to="/products?cat=materials" className="hover:text-primary transition-colors">Construction Materials</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-xl mb-4">Contact Info</h4>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <a href="https://maps.app.goo.gl/eZazpHU56M9dP9r48" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Bye Pass Road, Jeypore 764001
            </a>
          </div>
          <a href={callUrl} className="flex items-center gap-2.5 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span>9438266515</span>
          </a>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span>Mon–Sat: 8AM – 7PM</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-success hover:underline"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-border py-5">
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-primary font-medium">Shiridi Associates</span>. Since 1994. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
