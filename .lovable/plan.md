
# SmartFridge – Projekt-Landingpage

Eine schicke Landingpage für das SmartFridge-Projekt im gleichen Design wie die App (glassmorphism, blau-cyan Farbverlauf, abgerundete Karten, automatischer Dark Mode basierend auf System-Präferenz).

## Header / Navigation
- Logo (das hochgeladene Kühlschrank-Icon) + "SmartFridge" Schriftzug links
- Rechts zwei Buttons: **GitHub** (→ github.com/henristr/SmartFridgePWA) und **Docs** (→ docs.henristr.de)

## Hero-Bereich
- Großer Titel "SmartFridge" mit Gradient-Text (Blau → Cyan, wie die Accent-Farben der App)
- Kurze Beschreibung: Was SmartFridge ist (intelligente Kühlschrankverwaltung als PWA)
- Entwickler-Credits: Henri Stricker & Justus Böwer

## Features-Übersicht
Karten im glassmorphism-Stil mit den Hauptfunktionen:
1. **Produktverwaltung** – Produkte hinzufügen, bearbeiten, löschen mit Barcode-Scanner
2. **Ablaufdatum-Tracking** – Farbliche Warnung bei bald ablaufenden Produkten
3. **KI-Rezeptgenerator** – Rezeptvorschläge basierend auf vorhandenen Zutaten (Gemini AI)
4. **Rezept-History & Favoriten** – Rezepte speichern und favorisieren
5. **Mehrbenutzersystem** – Login, Passwortverwaltung, Admin-Modus
6. **PWA-Support** – Installierbar auf dem Handy, offline-fähig

## Design
- Automatischer Dark/Light Mode basierend auf `prefers-color-scheme`
- Gleiche Farbpalette wie die App: `#4facfe` → `#00f2fe` Gradient, glassmorphism-Container
- Dark Mode: dunkles Blau-Lila (`#1a1a2e` → `#16213e`)
- Sanfte Animationen und Hover-Effekte
- Responsive für Mobile und Desktop
