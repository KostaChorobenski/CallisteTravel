# Calliste Travel

A responsive travel agency website for discovering lesser-known destinations, local experiences, and stories from the road. Built as a team project for the Business Practice course at FCSE.

## Features

- Destination catalogue featuring nine destinations, region and travel-type filters, and an interactive map.
- Destination pages with photo galleries, highlights, seasonal information, suggested trip durations, and location maps.
- Travel journal with individual articles.
- Agency story, values, and team profiles.
- Three-step travel planning overview.
- Contact page with working hours, map, FAQ, and a validated contact form.
- Destination inquiry buttons that prefill the contact form subject.
- Macedonian content with English translation through custom MK/EN controls.
- Responsive navigation, animations, cookie preferences, page metadata, and a custom 404 page.

## Technology

React 19 · TypeScript · Vite · Tailwind CSS 4 · React Router · Framer Motion · Leaflet · React Leaflet · i18next · Google Translate · Phosphor Icons · Oxlint

## Getting started

Install a current Node.js LTS version compatible with Vite, then run:

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal. No API keys or environment variables are required. Maps, English translation, and Google Fonts require an internet connection.

## Build

```bash
npm run build
npm run lint
```

The build runs TypeScript checks and generates the production site in `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```text
public/               Favicon and social preview image
src/
  assets/             Destination photos, team portraits, and branding
  components/         Layout, homepage, maps, forms, FAQ, and shared UI
  data/               Destinations, travel information, journal, and site content
  pages/              Route-level pages
  translations/       Language resources
  App.tsx             Routes and lazy loading
  i18n.ts             Source-language configuration
  index.css           Theme and shared styles
  main.tsx            Application entry point
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/destinatsii` | Destination catalogue |
| `/destinatsii/:id` | Destination details |
| `/dnevnik` | Travel journal |
| `/dnevnik/:id` | Journal article |
| `/za-nas` | About and team |
| `/kontakt` | Contact and FAQ |

Unmatched routes display the 404 page.

## Languages

Macedonian is the original language. The MK/EN controls use Google Translate to display English and preserve the selected route when switching. Switching languages reloads the page and clears unsaved form input. Translation availability and quality depend on Google's service.

## Demo behavior

The contact form validates input and simulates submission. It does not send email or create reservations. Contact details and social profiles are demonstration content. Suggested trip durations illustrate possible itineraries; seasonal information includes source links on the destination pages.

The cookie banner saves the visitor's choice locally. Map and translation services load independently of that choice.

## Deployment

Deploy the contents of `dist/` to a static host. Configure an SPA fallback to `index.html` for application routes so direct visits and refreshes on nested URLs work correctly.

For Vercel, the included `vercel.json` configures this fallback for all routes, including page reloads when switching languages. Use the Vite framework preset with `npm run build` and `dist` as the output directory.

## Team

- Сергеј Денковски
- Ибрахим Феризи
- Коста Чоробенски
- Филип Јовановски
