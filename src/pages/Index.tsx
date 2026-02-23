import { Github, BookOpen, ShoppingCart, Clock, ChefHat, Heart, Users, Smartphone, AlertTriangle, Lightbulb, CheckCircle2, ArrowRight, Scan, Bell, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo.jpeg";

const features = [
  {
    icon: ShoppingCart,
    title: "Produktverwaltung",
    desc: "Produkte hinzufügen, bearbeiten und löschen – mit integriertem Barcode-Scanner."
  },
  {
    icon: Clock,
    title: "Ablaufdatum-Tracking",
    desc: "Farbliche Warnungen bei bald ablaufenden Produkten, damit nichts verschwendet wird."
  },
  {
    icon: ChefHat,
    title: "KI-Rezeptgenerator",
    desc: "Rezeptvorschläge basierend auf vorhandenen Zutaten – powered by Gemini AI."
  },
  {
    icon: Heart,
    title: "Rezept-History & Favoriten",
    desc: "Speichere generierte Rezepte und markiere deine Lieblingsrezepte."
  },
  {
    icon: Users,
    title: "Mehrbenutzersystem",
    desc: "Login, Passwortverwaltung und Admin-Modus für die ganze Familie."
  },
  {
    icon: Smartphone,
    title: "PWA-Support",
    desc: "Installierbar auf dem Handy, offline-fähig – wie eine native App."
  }
];

const problems = [
  {
    icon: AlertTriangle,
    title: "Lebensmittelverschwendung",
    desc: "In Deutschland landen jährlich 11 Millionen Tonnen Lebensmittel im Müll – oft, weil der Überblick fehlt."
  },
  {
    icon: Clock,
    title: "Abgelaufene Produkte",
    desc: "Wer kennt es nicht? Joghurt, Käse oder Aufschnitt vergessen und erst Wochen später wiedergefunden."
  },
  {
    icon: ShoppingCart,
    title: "Doppelkäufe",
    desc: "Ohne Übersicht kauft man Produkte nach, die noch im Kühlschrank stehen – Geld und Platz verschwendet."
  }
];

const benefits = [
  "Nie wieder abgelaufene Lebensmittel übersehen",
  "Automatische Warnungen bevor Produkte ablaufen",
  "KI-Rezepte aus vorhandenen Zutaten – kein extra Einkauf nötig",
  "Barcode scannen statt manuell eintippen",
  "Funktioniert offline – auch im Keller mit schlechtem Empfang",
  "Kostenlos und Open Source"
];

const faqs = [
  {
    q: "Was ist SmartFridge?",
    a: "SmartFridge ist eine kostenlose Progressive Web App zur intelligenten Verwaltung deines Kühlschranks. Du kannst Produkte per Barcode-Scanner hinzufügen, Ablaufdaten tracken und dir KI-basierte Rezeptvorschläge generieren lassen."
  },
  {
    q: "Ist SmartFridge kostenlos?",
    a: "Ja, SmartFridge ist vollständig kostenlos und Open Source. Der Quellcode ist auf GitHub verfügbar."
  },
  {
    q: "Muss ich SmartFridge installieren?",
    a: "SmartFridge ist eine Progressive Web App (PWA). Du kannst sie direkt im Browser nutzen oder auf deinem Smartphone installieren – ganz ohne App Store."
  },
  {
    q: "Funktioniert SmartFridge offline?",
    a: "Ja, dank PWA-Technologie funktioniert SmartFridge auch ohne Internetverbindung. Daten werden synchronisiert, sobald du wieder online bist."
  },
  {
    q: "Wie funktioniert der KI-Rezeptgenerator?",
    a: "Der Rezeptgenerator analysiert die Zutaten in deinem Kühlschrank und erstellt passende Rezeptvorschläge mithilfe von Gemini AI. So kannst du kochen, was du hast – ohne extra einkaufen zu müssen."
  },
  {
    q: "Können mehrere Personen SmartFridge nutzen?",
    a: "Ja, SmartFridge unterstützt ein Mehrbenutzersystem mit Login, Passwortverwaltung und Admin-Modus – perfekt für Familien oder WGs."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="fixed inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Hauptnavigation">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SmartFridge Logo" className="w-9 h-9 rounded-xl object-cover" width={36} height={36} loading="eager" />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SmartFridge
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/henristr/SmartFridgePWA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-card/80 backdrop-blur border border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://docs.henristr.de/share/67ql3pqwwj/p/smart-fridge-installation-iKotdAW5TP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Docs</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-32 sm:pb-24 text-center" aria-labelledby="hero-heading">
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="SmartFridge App Icon"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-2xl shadow-primary/25 ring-2 ring-border/30"
              width={128}
              height={128}
              loading="eager"
            />
          </div>
          <h1 id="hero-heading" className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              SmartFridge
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-foreground max-w-3xl mx-auto mb-4">
            Dein Kühlschrank, intelligent verwaltet. Weniger Verschwendung, mehr Genuss.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Die kostenlose Progressive Web App für Ablaufdatum-Tracking, Barcode-Scanner und KI-basierte Rezeptvorschläge – direkt im Browser, ohne Installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href="https://docs.henristr.de/share/67ql3pqwwj/p/smart-fridge-installation-iKotdAW5TP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/25"
            >
              Jetzt testen
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/henristr/SmartFridgePWA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-base font-medium bg-card/80 backdrop-blur border border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all"
            >
              <Github className="w-5 h-5" />
              Quellcode ansehen
            </a>
          </div>
          <p className="text-sm text-muted-foreground/70">
            Entwickelt von{" "}
            <span className="font-semibold text-foreground/80">Henri Stricker</span> &{" "}
            <span className="font-semibold text-foreground/80">Justus Böwer</span>
          </p>
        </section>

        {/* Problem */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24" aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4 text-foreground">
            Das Problem
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Millionen Haushalte kämpfen täglich mit dem gleichen Chaos im Kühlschrank.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {problems.map((p) => (
              <article
                key={p.title}
                className="relative rounded-2xl p-6 backdrop-blur-lg bg-destructive/5 border border-destructive/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Lösung */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24" aria-labelledby="solution-heading">
          <div className="rounded-3xl p-8 sm:p-12 backdrop-blur-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-7 h-7 text-primary" />
              <h2 id="solution-heading" className="text-2xl sm:text-3xl font-bold text-foreground">
                Die Lösung: SmartFridge
              </h2>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
              SmartFridge bringt Ordnung in deinen Kühlschrank. Scanne Produkte per Barcode, werde rechtzeitig an Ablaufdaten erinnert und lass dir aus vorhandenen Zutaten KI-Rezepte vorschlagen – alles in einer App, die auch offline funktioniert.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Scan className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Scannen</h3>
                <p className="text-sm text-muted-foreground">Barcode scannen – Produkt wird automatisch erkannt</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Bell className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Erinnern</h3>
                <p className="text-sm text-muted-foreground">Warnungen bevor Lebensmittel ablaufen</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <ChefHat className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Kochen</h3>
                <p className="text-sm text-muted-foreground">KI-Rezepte aus deinen vorhandenen Zutaten</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4 text-foreground">
            Alle Funktionen
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Alles, was du brauchst, um deinen Kühlschrank smart zu verwalten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <article
                key={f.title}
                className="group relative rounded-2xl p-6 backdrop-blur-lg bg-card/50 border border-border/40 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Vorteile */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-bold text-center mb-12 text-foreground">
            Deine Vorteile
          </h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4" role="list">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl p-4 backdrop-blur-lg bg-card/50 border border-border/40">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24" aria-labelledby="cta-heading">
          <div className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-primary to-accent">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Bereit, deinen Kühlschrank smart zu machen?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-base sm:text-lg">
              Starte jetzt kostenlos – keine Registrierung im App Store nötig. Einfach im Browser öffnen und loslegen.
            </p>
            <a
              href="https://docs.henristr.de/share/67ql3pqwwj/p/smart-fridge-installation-iKotdAW5TP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-base font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all shadow-lg"
            >
              Jetzt testen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-24" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-center mb-12 text-foreground">
            Häufig gestellte Fragen
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl backdrop-blur-lg bg-card/50 border border-border/40 px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © 2025 SmartFridge · Henri Stricker & Justus Böwer
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/henristr/SmartFridgePWA" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://docs.henristr.de/share/67ql3pqwwj/p/smart-fridge-installation-iKotdAW5TP" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">
              Dokumentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
