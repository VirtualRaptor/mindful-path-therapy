import { useLanguage } from "@/i18n/LanguageContext";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-[85vh] flex items-center section-padding pt-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {t.hero.title}
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-3">
              – {t.hero.subtitle}
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+48504188151"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone size={16} />
              {t.hero.call}
            </a>
            <a
              href="https://wa.me/48504188151"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} />
              {t.hero.whatsapp}
            </a>
            <a
              href="mailto:alina@reaktywacje.com"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
            >
              <Mail size={16} />
              {t.hero.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
