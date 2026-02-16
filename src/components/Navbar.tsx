import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Menu, X } from "lucide-react";

const languages: { code: Language; label: string }[] = [
  { code: "pl", label: "PL" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.offer, href: "#offer" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-6">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="text-lg font-bold tracking-tight text-foreground"
        >
          reaktywacje
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-4 border border-border rounded-full px-1 py-0.5">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-xs px-2.5 py-1 rounded-full transition-colors font-medium ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-xs px-2 py-0.5 rounded-full transition-colors font-medium ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
