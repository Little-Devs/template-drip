# Drip Theory

Fitzroy coffee roastery and cupping room landing. Charcoal, cherrywood, cream,
and a cupping-sheet hero. Small-lot coffee roasted twice a week on Brunswick Street.

Live demo: https://drip.little.website/

Built with Astro 5 (static output) and a plain CSS design system. No CMS, no auth,
no payments, no ecommerce — contact goes straight to `mailto:sales@little.cloud`.

## Quick start

```sh
bun install
bun run dev      # local dev server
bun run build    # static build to dist/
bun run preview  # preview the build
```

## Customise

Everything copy- and structure-related lives in **src/data/site.ts**:

- `sections` — turn any of `hero, roastery, lots, cupping, room, contact` on/off
- `nav`, contact, hero cupping sheet, lots, room hours
- Brand tokens (palette, type) live in **src/styles/tokens.css**

Swap `public/images/*.jpg` for your own roast-room photography and update the credits
in the footer (`src/components/Footer.astro`).

## Contact form

The contact form composes a `mailto:` to **sales@little.cloud**. It opens the
visitor's mail client — there is no backend by design. Not a restaurant; no dinner service.

## License

MIT — see LICENSE.
Template ID: drip  Category: Landing Page
Repository: https://github.com/Little-Devs/template-drip
