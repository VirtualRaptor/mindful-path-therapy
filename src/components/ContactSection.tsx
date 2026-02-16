import { useLanguage } from "@/i18n/LanguageContext";
import { Phone, MessageCircle, Mail, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          {t.contact.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.addressLabel}</p>
                <p className="text-foreground font-medium">{t.contact.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.emailLabel}</p>
                <p className="text-foreground font-medium">alina@reaktywacje.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.phoneLabel}</p>
                <p className="text-foreground font-medium">504 188 151</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe size={18} className="text-primary mt-1 shrink-0" />
              <p className="text-muted-foreground text-sm">{t.contact.online}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="tel:+48504188151"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone size={14} />
                {t.contact.callBtn}
              </a>
              <a
                href="https://wa.me/48504188151"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={14} />
                {t.contact.whatsappBtn}
              </a>
              <a
                href="mailto:alina@reaktywacje.com"
                className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
              >
                <Mail size={14} />
                {t.contact.emailBtn}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-border h-[300px] md:h-full min-h-[300px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5!2d18.6038!3d53.0131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470334e2ce74f0a1%3A0x6e5e2e1c5a8b9c0d!2sMa%C5%82achowskiego%209%2C%2087-100%20Toru%C5%84!5e0!3m2!1spl!2spl!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gabinet psychoterapii Toruń"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
