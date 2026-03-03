import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const callUrl = "tel:9438266515";
const whatsappUrl = "https://www.whatsapp.com/send/?phone=919438266515&text=Hi%20Shiridi%20Associates%2C%20I%20need%20details%20about%20your%20products.";

const contactItems = [
  { icon: MapPin, label: "Address", value: "Bye Pass Road, Jeypore 764001", href: "https://maps.app.goo.gl/eZazpHU56M9dP9r48" },
  { icon: Phone, label: "Phone", value: "9438266515", href: callUrl },
  { icon: Mail, label: "Email", value: "shiridiassociates@gmail.com", href: "mailto:shiridiassociates@gmail.com" },
  { icon: Clock, label: "Business Hours", value: "Monday – Saturday: 8:00 AM – 7:00 PM\nSunday: Closed" },
];

const Contact = () => (
  <>
    <section className="bg-accent pt-32 pb-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block">Reach Out</span>
          <h1 className="font-display text-5xl md:text-6xl text-accent-foreground mb-2">Contact Us</h1>
          <p className="text-accent-foreground/60 text-lg">Serving builders and homeowners with trusted material supply since 1994.</p>
        </motion.div>
      </div>
    </section>

    <section className="container py-14">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-3xl text-foreground">Get In Touch</h2>

          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-card-foreground font-medium hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-card-foreground font-medium whitespace-pre-line">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a href={callUrl}>
              <Button size="lg" className="shadow-sm shadow-primary/20">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-success text-success hover:bg-success/10">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          className="rounded-xl overflow-hidden border border-border bg-muted min-h-[400px] shadow-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7551.026662529168!2d82.572241!3d18.864295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3aedc3c3388825%3A0x1bda337d9246c584!2sShiridi%20Associates!5e0!3m2!1sen!2sin!4v1772561659334!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  </>
);

export default Contact;
