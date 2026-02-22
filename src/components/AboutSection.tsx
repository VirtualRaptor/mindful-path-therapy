import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-10"
        >
          {t.about.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl space-y-5"
        >
          <p className="text-foreground leading-relaxed">{t.about.p1}</p>
          <p className="text-foreground leading-relaxed">{t.about.p2}</p>
          <p className="text-sm font-semibold text-primary tracking-wide mt-8">{t.about.values}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
