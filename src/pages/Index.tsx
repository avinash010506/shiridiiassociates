import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock, Phone, MessageCircle, MapPin, Star, Users, Package, Award, Goal, CheckCircle2 } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import OrderModal from "@/components/OrderModal";
import heroConstruction from "@/assets/hero-construction.png";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { MagneticButton } from "@/components/MagneticButton";

const deliveryAreas = [
  "City Center", "Jay Nagar", "Raju Street", "Lingaraj Nagar",
  "Christian Peta", "Bikram Nagar", "Madala Street", "Panchabati Nagar", "Sunabeda"
];

const stats = [
  { icon: Users, numeric: 5000, suffix: "+", decimals: 0, label: "Happy Customers" },
  { icon: Package, numeric: 50000, suffix: "+", decimals: 0, label: "Orders Delivered" },
  { icon: Award, numeric: 30, suffix: "+", decimals: 0, label: "Years Experience" },
  { icon: Star, numeric: 4.9, suffix: "", decimals: 1, label: "Customer Rating" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Civil Contractor", text: "Best prices and fastest delivery in the city. I've been ordering from Shiridi Associates for 3 years now.", rating: 5 },
  { name: "Anil Sharma", role: "Builder", text: "Genuine products, no compromises on quality. Their TMT bars are always top-grade.", rating: 5 },
  { name: "Priya Patel", role: "Home Builder", text: "Built my dream home with materials from Shiridi Associates. Great support throughout the project.", rating: 4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }),
};

const maskWordReveal = {
  hidden: { y: "150%", skewY: 5, filter: "blur(8px)", opacity: 0 },
  visible: { y: "0%", skewY: 0, filter: "blur(0px)", opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
};

function AnimatedCounter({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    latest.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix
  );

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const Index = () => {
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);
  const featured = products.filter((p) => p.inStock).slice(0, 3);

  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);

  return (
    <>
      <CustomCursor />
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
        {/* Full-bleed hero image */}
        <motion.img
          src={heroConstruction}
          alt="Construction site with cement and steel work"
          className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
          style={{ filter: 'contrast(1.05) brightness(0.85) saturate(1.1)', y: heroY }}
        />
        {/* Dark vignette overlays — enhanced for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none" />
        <div className="container relative z-10 py-24">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary border border-primary/30 mb-6"
            >
              Trusted Since 1994
            </motion.span>
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-8xl text-accent-foreground leading-[0.9] mb-5 overflow-hidden flex flex-wrap gap-[0.2em]"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
              }}
              initial="hidden"
              animate="visible"
            >
              <span className="block overflow-hidden"><motion.span className="inline-block" variants={maskWordReveal}>Quality</motion.span></span>
              <span className="block overflow-hidden"><motion.span className="inline-block" variants={maskWordReveal}>Cement</motion.span></span>
              <span className="block overflow-hidden"><motion.span className="inline-block" variants={maskWordReveal}>&</motion.span></span>
              <span className="block overflow-hidden"><motion.span className="inline-block" variants={maskWordReveal}>Steel</motion.span></span>
              <span className="block overflow-hidden w-full mt-1.5"><motion.span variants={maskWordReveal} className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 pb-2">Delivered Fast</motion.span></span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-accent-foreground/75 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
            >
              Your trusted local supplier for premium construction materials. Serving builders and contractors with same-day delivery.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link to="/products">
                <MagneticButton intensity={0.3}>
                  <Button size="lg" className="text-base px-8 h-13 shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_4px_30px_rgba(234,88,12,0.5)] transition-shadow overflow-hidden relative group">
                    <span className="relative z-10 flex items-center max-w-full">Browse Products <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Button>
                </MagneticButton>
              </Link>
              <a href="https://www.whatsapp.com/send/?phone=919438266515&text=Hi%20Shiridi%20Associates%2C%20I%20need%20details%20about%20your%20products." target="_blank" rel="noopener noreferrer">
                <MagneticButton intensity={0.2}>
                  <Button size="lg" variant="outline" className="text-base px-8 h-13 border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur-md transition-colors group">
                    <MessageCircle className="w-5 h-5 mr-2 text-success group-hover:scale-110 transition-transform" /> WhatsApp Us
                  </Button>
                </MagneticButton>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee Trust Strip */}
      <section className="bg-card border-b border-border shadow-sm overflow-hidden py-6 w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex w-max shrink-0 gap-20 pr-20 relative"
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {Array(8).fill([
              { icon: Truck, label: "Same-Day Delivery" },
              { icon: Shield, label: "Genuine Brands" },
              { icon: Clock, label: "Mon–Sat 8AM–7PM" },
              { icon: Phone, label: "+91 94382 66515" },
            ]).flat().map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-card-foreground tracking-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent">
        <div className="container py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, numeric, suffix, decimals, label }, i) => (
              <motion.div
                key={label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-3xl md:text-4xl text-accent-foreground">
                  <AnimatedCounter value={numeric} suffix={suffix} decimals={decimals} />
                </p>
                <p className="text-sm text-accent-foreground/60 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-20">
        <motion.div
          className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block">Top Sellers</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Top-selling construction materials at competitive prices</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex text-sm font-medium text-primary hover:underline items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 }}
            >
              <ProductCard product={p} onOrder={setOrderProduct} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">View All Products <ArrowRight className="w-4 h-4 ml-1" /></Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 border-y border-border">
        <div className="container py-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">What Our Customers Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`w-4 h-4 ${si < t.rating ? "text-warning fill-warning" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="text-card-foreground/80 text-sm leading-relaxed mb-5 relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-primary/10 font-serif">"</span>
                  <span className="relative z-10">"{t.text}"</span>
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="font-display text-lg text-primary group-hover:text-primary-foreground transition-colors">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="bg-accent">
        <div className="container py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block">Delivery</span>
              <h2 className="font-display text-4xl md:text-5xl text-accent-foreground mb-4">
                Local Delivery <span className="text-primary">Areas</span>
              </h2>
              <p className="text-accent-foreground/70 mb-8 leading-relaxed">
                We deliver to all major areas within the city. Same-day delivery available for orders placed before 2 PM.
              </p>
              <div className="flex flex-wrap gap-2">
                {deliveryAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm bg-accent-foreground/10 text-accent-foreground border border-accent-foreground/10 hover:border-primary/30 transition-colors cursor-default hover:bg-primary/20 hover:text-white"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {area}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-card rounded-xl p-8 border border-border shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl text-card-foreground mb-5">Delivery Info</h3>
              <ul className="space-y-4 text-sm text-card-foreground/80">
                {[
                  { icon: Truck, bold: "Same-day delivery", text: " for orders before 2:00 PM" },
                  { icon: Clock, bold: "Next-day delivery", text: " for late orders" },
                  { icon: Shield, bold: "Free delivery", text: " on orders above ₹5,000" },
                  { icon: MapPin, bold: "Delivery charges", text: " apply for areas beyond 15 km radius" },
                ].map(({ icon: Icon, bold, text }) => (
                  <li key={bold} className="flex items-start gap-4 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span><strong className="text-foreground">{bold}</strong>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="container py-20 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block flex items-center gap-2">
              <Goal className="w-4 h-4" /> About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Building Trust <span className="text-primary">Since 1994</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                <span className="font-semibold text-primary">Shiridi Associates</span> has been the cornerstone of countless construction projects for over three decades. We are not just suppliers; we are your partners in building the future.
              </p>
              <p>
                We source our materials directly from India's most reputed manufacturers to ensure that every bag of cement and every ton of steel meets the highest standards of durability and strength.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "100% Genuine Materials",
                "Competitive Wholesale Pricing",
                "Unmatched Reliability",
                "Dedicated Customer Support",
              ].map((bullet, idx) => (
                <motion.div
                  key={bullet}
                  className="flex items-start gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 + (idx * 0.1) }}
                >
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  {bullet}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <motion.img
              src="/about-us-image.jpg"
              alt="Our mission in action"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'contrast(1.1) brightness(0.8) saturate(1.2)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-card/70 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-card/90 transition-colors">
                <p className="text-card-foreground font-semibold text-lg text-center">“Quality is never an accident; it is always the result of high intention.”</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">Get Started</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Ready to <span className="text-primary">Build?</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Get the best prices on cement, steel, and construction materials. Order now or contact us for bulk pricing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/products">
                <MagneticButton intensity={0.2}>
                  <Button size="lg" className="px-10 h-14 text-base shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_4px_30px_rgba(234,88,12,0.5)] transition-shadow group overflow-hidden relative">
                    <span className="relative z-10 flex items-center max-w-full">Browse Products <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-0" />
                  </Button>
                </MagneticButton>
              </Link>
              <a href="https://www.whatsapp.com/send/?phone=919438266515&text=Hi%20Shiridi%20Associates%2C%20I%20need%20details%20about%20your%20products." target="_blank" rel="noopener noreferrer">
                <MagneticButton intensity={0.2}>
                  <Button size="lg" variant="outline" className="px-10 h-14 text-base border-success text-success hover:bg-success/10 group bg-background/50 backdrop-blur-sm">
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> WhatsApp Order
                  </Button>
                </MagneticButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <OrderModal product={orderProduct} open={!!orderProduct} onClose={() => setOrderProduct(null)} />
    </>
  );
};

export default Index;
