import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container-narrow flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Reaktywacje. {t.footer.rights}</span>
        <span>alina@reaktywacje.com</span>
      </div>
    </footer>
  );
};

export default Footer;
