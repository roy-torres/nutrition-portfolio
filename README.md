# Life Time — Power Creatine

A static demo page for LTH Power Creatine Monohydrate, with Flex Whey and Glow Omega-3 from Daily Essentials.

This is a personal portfolio demo. It is not an official Life Time site.

**Live demo:** https://roy-torres.github.io/nutrition-portfolio/

## View locally

From this folder:

```bash
python3 -m http.server 8765
```

Then open http://127.0.0.1:8765/

## What’s on the page

- Product profile, formula, and serving calculator
- Featured Daily Essentials
- Light and dark mode, saved in the browser

## Design

- Spacing uses an 8-point grid with a fixed set of values: 8, 16, 24, 32, 48, and 64px.
- Gaps around text are measured from baseline to cap height. Text boxes are trimmed with `text-box: trim-both cap alphabetic`. Browsers without support show slightly larger gaps.
- Type is Outfit, with body text at 18px.
- Transitions are short, color-only, and use ease-out.

## Accessibility

- Text and controls meet WCAG AA contrast in both themes.
- Buttons and header controls are at least 48px tall. Other links have a 44px minimum touch target.
- Everything works by keyboard, with visible focus rings and a skip link.
- The theme switch is a labeled `role="switch"`. It follows the system setting until you choose a theme.
- Animations turn off when the system asks for reduced motion.

## Files

- `index.html`: page structure
- `css/styles.css`: theme tokens, layout, and components
- `js/main.js`: product content, theme switch, navigation, and interactions
- `assets/`: product images
