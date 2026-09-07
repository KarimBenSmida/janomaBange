# Janoma Bange

Responsive German homepage built with React and Vite. Blush, gold and photo frames follow the supplied HTML design reference.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
npm run build
npm run preview
```

`dist/` contains the production static site and can be served by any static host. The Sites project registration is in `.openai/hosting.json`.

## Content

- `src/content.js`: booking email, telephone, legal details, social profiles, show dates and references.
- `src/main.jsx`: German page copy and sections.
- `src/styles.css`: layout, typography and responsive styling.
- `public/images/`: optimized WebP images. Originals are left untouched in their original folders.

Images use 480px and 960px variants, responsive selection, and lazy loading below the hero. Fonts are bundled locally; there are no embedded social trackers or externally loaded fonts. Email links open the visitor’s mail app; this website does not send or store booking messages.

To optimize a new photo:

```sh
npm run images -- /absolute/path/photo.jpg descriptive-name
```

## Details awaiting confirmation

- Facebook: exact profile URL for Jan Setzkorn. Add it to `socials.facebook` to show the link.
- The supplied telephone number is displayed as a telephone link. Replace it with the dedicated number when ready. No WhatsApp link is enabled.
- Email account setup is outside the website; confirm the mailbox is receiving messages before public launch.
- Show dates and venue are taken from the supplied October 2026 event reference. The source gives conflicting ticket-sale details, so no ticket price or invented purchase URL is published.
- No performance videos were supplied; Instagram provides access to further content.

The Impressum contains the supplied name, address and contact details; no legal certification is implied.
