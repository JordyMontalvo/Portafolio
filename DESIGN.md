# Design System Specification — Impeccable Standard

## 1. Typography Hierarchy
- **Display / Headings**: `Chivo` (`font-display`) — High visual authority, geometric punch, negative tracking (`-0.025em`).
- **Body / Prose**: `Figtree` (`font-sans`) — Ergonomic legibility, balanced x-height, comfortable line heights (`1.625`).
- **Data / Metrics / Code**: `JetBrains Mono` (`font-mono`) — Technical credibility for KPIs, tags, and timestamps.

## 2. Color Palette & Theming
- **Dark Mode Surface**: Deep Obsidian (`#05080e`, `#090d16`, `#0e1522`, `#111827`) — Replaces generic flat blacks with curated atmospheric depth.
- **Light Mode Surface**: Neutral Crisp White & Alabaster (`#ffffff`, `#fafafa`, `#f8fafc`).
- **Brand & Interaction Accent**: Curated Teal / Cyan (`#14b8a6`, `#0d9488`, `#2dd4bf`) — High contrast against both dark obsidian and light backdrops.
- **Verified / Status Accent**: Emerald (`#10b981`, `#059669`) — Live availability pulse and verified credentials.

## 3. Dark Mode Architecture
- **Root Synchronization**: `<html class="dark">` managed via `ThemeToggle.tsx` with instant inline pre-hydration script in `index.html` eliminating FOIT/FOUC.
- **Explicit Surface Fallbacks**: Root rules on `html.dark` and `body` ensure zero unpainted background leaks.
- **High-Contrast Text**: Text shifts to crisp `#f8fafc` / `#f1f5f9` on dark surfaces; high-contrast ratios exceed WCAG AAA standards.

## 4. Impeccable Anti-Pattern Guardrails
- **Zero Fake Progress Bars**: Replaced with factual years of experience and production contexts.
- **Zero Generic Card Grids**: Replaced with asymmetrical editorial layouts and flagship hero spotlight cards.
- **Zero Gray-on-Color Contrast Failures**: All interactive elements maintain verified WCAG compliant contrast.
- **Exponential Motion**: Eliminated cartoonish `animate-bounce`; all transitions use physics-based bezier curves `ease: [0.16, 1, 0.3, 1]`.
- **Themed Browser Surfaces**: Custom scrollbars, custom selection tints (`rgba(20, 184, 166, 0.25)`), and custom focus rings.
