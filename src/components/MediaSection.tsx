import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Radio } from "lucide-react";

const mediaItems = [
  {
    url: "https://www.wnet.fm/2021/12/31/dr-matlakiewicz-nie-powinnismy-odmawiac-sobie-krotkoterminowo-tego-co-bardzo-lubimy",
    source: "wNet.fm",
    titlePl: "Nie powinniśmy odmawiać sobie krótkoterminowo tego, co bardzo lubimy",
    titleDe: "Wir sollten uns kurzfristig nicht das verweigern, was wir sehr mögen",
    titleEn: "We shouldn't deny ourselves short-term what we really enjoy",
  },
  {
    url: "https://www.trojka.polskieradio.pl/artykul/2946160",
    source: "Polskie Radio – Trójka",
    titlePl: "Audycja w Polskim Radiu – Trójka",
    titleDe: "Sendung im Polnischen Radio – Trójka",
    titleEn: "Broadcast on Polish Radio – Trójka",
  },
  {
    url: "https://www.plus.nowosci.com.pl/czarny-piatek-to-marketingowa-gra-psycholog-biznesu-radzi-jak-nie-dac-porwac-sie-wielkiemu-szalenstwu-zakupow/ar/c3-13681218",
    source: "Nowości",
    titlePl: "Czarny Piątek to marketingowa gra – jak nie dać się porwać szaleństwu zakupów",
    titleDe: "Black Friday ist ein Marketingspiel – wie man dem Kaufrausch widersteht",
    titleEn: "Black Friday is a marketing game – how to resist shopping frenzy",
  },
  {
    url: "https://www.zachod.pl/416963/dzien-bez-telefonu-fomo",
    source: "Zachód.pl",
    titlePl: "Dzień bez telefonu – FOMO",
    titleDe: "Ein Tag ohne Telefon – FOMO",
    titleEn: "A day without phone – FOMO",
  },
  {
    url: "https://www.ddtorun.pl/pl/11_wiadomosci/10646_bijatyka-na-boisku-w-stawie-komtura-czy-to-jeszcze-jest-sport.html",
    source: "DD Toruń",
    titlePl: "Bójka na boisku – czy to jeszcze jest sport?",
    titleDe: "Schlägerei auf dem Spielfeld – ist das noch Sport?",
    titleEn: "Fight on the pitch – is this still sport?",
  },
  {
    url: "https://www.jedynka.polskieradio.pl/artykul/2750962",
    source: "Polskie Radio – Jedynka",
    titlePl: "Audycja w Polskim Radiu – Jedynka",
    titleDe: "Sendung im Polnischen Radio – Jedynka",
    titleEn: "Broadcast on Polish Radio – Jedynka",
  },
  {
    url: "https://www.trojka.polskieradio.pl/artykul/2677000",
    source: "Polskie Radio – Trójka",
    titlePl: "Audycja w Polskim Radiu – Trójka (2)",
    titleDe: "Sendung im Polnischen Radio – Trójka (2)",
    titleEn: "Broadcast on Polish Radio – Trójka (2)",
  },
  {
    url: "https://www.jedynka.polskieradio.pl/artykul/2730812",
    source: "Polskie Radio – Jedynka",
    titlePl: "Audycja w Polskim Radiu – Jedynka (2)",
    titleDe: "Sendung im Polnischen Radio – Jedynka (2)",
    titleEn: "Broadcast on Polish Radio – Jedynka (2)",
  },
  {
    url: "https://www.reportaz.polskieradio.pl/artykul/2954301",
    source: "Polskie Radio – Reportaż",
    titlePl: "Audycja w Polskim Radiu – Reportaż",
    titleDe: "Sendung im Polnischen Radio – Reportaż",
    titleEn: "Broadcast on Polish Radio – Reportaż",
  },
];

const MediaSection = () => {
  const { t, lang } = useLanguage();

  const getTitle = (item: typeof mediaItems[0]) => {
    if (lang === "de") return item.titleDe;
    if (lang === "en") return item.titleEn;
    return item.titlePl;
  };

  return (
    <section id="media" className="section-padding">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          {t.media.title}
        </motion.h2>
        <div className="space-y-4">
          {mediaItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow group"
            >
              <Radio size={20} className="text-primary mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {getTitle(item)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{item.source}</p>
              </div>
              <ExternalLink size={16} className="text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
