# Atlas — website starter

A static, multi-page site built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com): About, Solutions, Services, and Contact — with the color palette pulled from your Atlas logo.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Project structure

```
src/
  config/site.ts       ← Rebrand here: name, tagline, nav, emails, GitHub link
  content/              ← All page copy lives here — see "Editing content" below
  components/          ← Nav, Footer, Card, IndexList, PageHero, StatReadout, etc.
  layouts/Layout.astro ← Shared <head>, Nav, Footer wrapper
  pages/
    about/index.astro  ← Mission, Vision, Scientific Expertise all live here as sections
    about/publications.astro
    about/collaborators.astro
    solutions/          ← Overview + 5 sub-pages
    services/           ← Overview + 4 sub-pages
    contact.astro
    index.astro         ← Homepage
  styles/global.css    ← Color palette, fonts, and design tokens (@theme block)
public/
  logo-light.png        ← Logo for light/white backgrounds (header)
  logo-dark.png         ← Reversed logo for dark/navy backgrounds (footer)
  favicon.png
```

## Editing content

**All page copy lives outside the templates, in `src/content/`** — you shouldn't need to touch a `.astro` file just to change wording.

- **`.txt` files** hold prose: hero descriptions, intros, multi-paragraph body copy. Open the file, edit the text, save. Multi-paragraph files just separate paragraphs with a blank line. A few files (like `about/hero-title.txt`) contain a `{{name}}` placeholder that gets swapped for your site name automatically at build time — leave that part alone.
- **`.json` files** hold repeating structured content: cards, list items, publications, capabilities, FAQ-style entries. Each item is an object with named fields (`title`, `description`, etc.) — copy an existing entry's shape when adding a new one, and keep the quotes and commas intact (that's just JSON syntax).

Folder-to-page mapping:
```
src/content/home/              → homepage (src/pages/index.astro)
src/content/about/              → About page sections (src/pages/about/index.astro)
src/content/about-publications/ → src/pages/about/publications.astro
src/content/about-collaborators/→ src/pages/about/collaborators.astro
src/content/solutions/          → Solutions overview
src/content/solutions-pages/    → the 5 individual Solutions pages
src/content/services/           → Services overview
src/content/services-pages/     → the 4 individual Services pages
src/content/contact/            → Contact page
```

A few things that intentionally stayed in the `.astro` files rather than content files: internal links mixed into a single sentence (e.g. the "Contact → Research Collaboration" link on the Collaborators page), and site-wide branding (name, tagline, emails), which lives in `src/config/site.ts` since it's referenced from many places at once.

- **Branding**: site name, tagline, nav labels/links, and contact emails all live in `src/config/site.ts`. Nav is intentionally flat (no dropdowns) — the Footer still shows grouped sub-links using the same config.
- **Colors**: all defined as CSS variables in `src/styles/global.css` under the `@theme` block — change a value there and it updates everywhere that token is used.
- **Logo**: swap `public/logo-light.png` (white backgrounds) and `public/logo-dark.png` (navy backgrounds) if you get updated exports of your logo.

## Contact form

The form on `/contact` posts to [Formspree](https://formspree.io). Sign up for a free account, create a form, and replace `YOUR_FORM_ID` in `src/pages/contact.astro` with your form's ID.

## Deploying

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com), sign in with GitHub, and import the repo.
3. It auto-detects Astro — no config needed. You'll get a live URL in about a minute.
4. To use your own domain: buy it anywhere (Namecheap, Vercel, etc.), then add it in your Vercel/Netlify project settings and update the DNS records they give you.

## Build for production manually

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally to check it
```
