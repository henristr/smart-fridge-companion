import { Github, BookOpen, ShoppingCart, Clock, ChefHat, Heart, Users, Smartphone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const features = [
  {
    icon: ShoppingCart,
    title: "Produktverwaltung",
    desc: "Produkte hinzufügen, bearbeiten und löschen – mit integriertem Barcode-Scanner.",
  },
  {
    icon: Clock,
    title: "Ablaufdatum-Tracking",
    desc: "Farbliche Warnungen bei bald ablaufenden Produkten, damit nichts verschwendet wird.",
  },
  {
    icon: ChefHat,
    title: "KI-Rezeptgenerator",
    desc: "Rezeptvorschläge basierend auf vorhandenen Zutaten – powered by Gemini AI.",
  },
  {
    icon: Heart,
    title: "Rezept-History & Favoriten",
    desc: "Speichere generierte Rezepte und markiere deine Lieblingsrezepte.",
  },
  {
    icon: Users,
    title: "Mehrbenutzersystem",
    desc: "Login, Passwortverwaltung und Admin-Modus für die ganze Familie.",
  },
  {
    icon: Smartphone,
    title: "PWA-Support",
    desc: "Installierbar auf dem Handy, offline-fähig – wie eine native App.",
  },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SmartFridge Logo" className="w-9 h-9 rounded-xl object-cover" />
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
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-32 sm:pb-24 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="SmartFridge"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-2xl shadow-primary/25 ring-2 ring-border/30"
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              SmartFridge
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Deine intelligente Kühlschrankverwaltung als Progressive Web App.
            Behalte den Überblick über deine Lebensmittel, vermeide Verschwendung
            und lass dir KI-basierte Rezeptvorschläge generieren.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Entwickelt von{" "}
            <span className="font-semibold text-foreground/80">Henri Stricker</span> &{" "}
            <span className="font-semibold text-foreground/80">Justus Böwer</span>
          </p>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-foreground">
            Funktionen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl p-6 backdrop-blur-lg bg-card/50 border border-border/40 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <p className="text-center text-xs text-muted-foreground/60">
          © 2025 SmartFridge · Henri Stricker & Justus Böwer
        </p>
      </footer>
    </div>
  );
};

export default Index;
