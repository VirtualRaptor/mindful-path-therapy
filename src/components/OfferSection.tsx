import { useLanguage } from "@/i18n/LanguageContext";
import { Brain, ShieldAlert, CloudRain, Compass, Monitor, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const OfferSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Brain, title: t.offer.cbt, desc: t.offer.cbtDesc },
    { icon: ShieldAlert, title: t.offer.anxiety, desc: t.offer.anxietyDesc },
    { icon: CloudRain, title: t.offer.depression, desc: t.offer.depressionDesc },
    { icon: Compass, title: t.offer.crisis, desc: t.offer.crisisDesc },
    { icon: Users, title: t.offer.change, desc: t.offer.changeDesc },
    { icon: Monitor, title: t.offer.online, desc: t.offer.onlineDesc },
    { icon: MapPin, title: t.offer.stationary, desc: t.offer.stationaryDesc },
    { icon: Brain, title: t.offer.adults, desc: t.offer.adultsDesc },
  ];

  return (
    <section id="offer" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          {t.offer.title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-6 rounded-xl border border-border bg-background hover:shadow-md transition-shadow"
            >
              <item.icon size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
