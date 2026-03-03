import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/#about-us" },
  { label: "Contact", to: "/contact" },
];

const callUrl = "tel:9438266515";
const whatsappUrl = "https://wa.me/919438266515?text=Hi%20Shiridi%20Associates%2C%20I%20need%20details%20about%20your%20products.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.includes("#")) {
      const id = to.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", to);
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
        ? "bg-[#0a0f1c]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 py-1"
        : "bg-transparent backdrop-blur-none border-b border-transparent py-3"
        }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group relative">
          <div className="relative w-[42px] h-[42px] md:w-[48px] md:h-[48px] shrink-0 transform transition-transform duration-500 group-hover:scale-105">
            {/* Minimal premium dark background for the logo */}
            <div className="absolute inset-0 rounded-full overflow-hidden z-10 shadow-sm bg-[#0a0f1c] flex items-center justify-center p-0.5 border border-white/5">
              <img
                src="/favicon.png"
                alt="Logo"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
          </div>
          <div className="leading-none mt-0.5">
            <span className="font-display text-lg md:text-[20px] tracking-tight block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5c92f5] to-[#f97316]">
              Shiridi Associates
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-1 md:mt-1.5 block">Since 1994</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={(e) => handleNavClick(e, l.to)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-muted ${location.pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <div className="w-px h-6 bg-border mx-3" />
          <a href={callUrl}>
            <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4 mr-1.5" /> Call
            </Button>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-success hover:bg-success/90 text-primary-foreground shadow-sm">
              <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp
            </Button>
          </a>
        </nav>

        <button className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="pb-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={(e) => handleNavClick(e, l.to)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${location.pathname === l.to ? "text-primary bg-primary/5" : "text-muted-foreground"
                    }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-2 px-4 mt-3">
                <a href={callUrl} className="flex-1">
                  <Button size="sm" variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-1" /> Call
                  </Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full bg-success hover:bg-success/90 text-primary-foreground">
                    <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
