import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          {t.pricing.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md border border-border rounded-2xl p-8 bg-card"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">{t.pricing.session}</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-primary">{t.pricing.price}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
            <Clock size={14} />
            {t.pricing.duration}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.pricing.note}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
