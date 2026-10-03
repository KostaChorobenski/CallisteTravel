# Calliste Travel

Calliste Travel is a responsive travel agency website focused on lesser-known destinations, local experiences, and stories from the road. It helps visitors explore places, read travel journals, learn about the agency, and find contact information.

## Features

- A homepage with featured destinations, agency values, and journal previews.
- A destination catalogue with region and travel-type filters and an interactive map.
- Individual destination pages with photographs, descriptions, practical information, and location maps.
- A journal listing and individual travel articles.
- About and contact pages, including a contact map and a form with client-side validation.
- Responsive layouts with desktop navigation and a mobile hamburger menu.
- Page metadata, animated sections, a cookie preference banner, and a not-found page.
- Custom `MK | EN` language controls using the existing Google Translate integration.

The project is a frontend application with locally defined destination and journal data. The contact form validates input and simulates submission with a success message; it does not send messages to a backend. Social profiles are visual placeholders with no external destination. There is no booking or payment system.

## Course requirement review

The site includes agency information, destination services and details, contact information and a validation form, journal articles, language controls, and a cookie preference banner. Before submission:

- Add a team/employees section to About with approved names, roles, and descriptions. The current page only describes the agency and its values.
- Confirm the displayed email, phone, and office address; the current details are demonstration content. The current implementation intentionally simulates sending for the course presentation.
- Supply actual social profile URLs in `src/data/site.ts` if available.
- Verify English translation and navigation on the deployed site; translation depends on Google's external service.
- Deploy to the FCSE system using the course's hosting instructions and verify direct visits and reloads on nested routes. Deployment cannot be confirmed from this checkout.
- Register the team/topic, submit the website link on Courses, present the project, and complete the assigned peer reviews. These course activities happen outside this repository.

The cookie banner stores its choice locally. It does not block external map or translation services, and its text states this explicitly. If consent is intended to control those services, conditional loading must be implemented.

## Technologies

- React 19 and TypeScript
- Vite with the React plugin
- React Router for client-side routing and lazy-loaded pages
- Tailwind CSS 4 for styling
- Framer Motion for animations
- Leaflet and React Leaflet for maps
- Phosphor Icons and clsx
- i18next and react-i18next for source-language strings
- next-google-translate-widget for Google Translate integration
- Oxlint for linting

## Project structure

```text
public/                  Static public assets
src/
  assets/                Destination images and brand wordmark
  components/
    contact/             Contact form and map
    destinations/        Destination cards and map
    home/                Homepage sections
    layout/              Navbar, footer, cookie banner, and shared layout
    seo/                 Page metadata
    ui/                  Shared UI elements
  data/                  Destination, journal, and site content
  pages/                 Route-level pages
  translations/          Existing Macedonian and English string resources
  App.tsx                Route definitions and lazy loading
  i18n.ts                Macedonian source-language configuration
  index.css              Tailwind theme and shared styles
  main.tsx               Application entry point
index.html               HTML entry point
vite.config.ts           Vite configuration
```

## Installation and local development

Use Node.js 22.12 or later with npm (Vite also supports Node.js 20.19 or later in the Node 20 release line).

From the project directory, install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite. No environment variables or API keys are required by the current project. Translation, map tiles, and external fonts require network access.

## Build and checks

```bash
npm run build
npm run lint
```

The build command runs `tsc -b` followed by `vite build`. Production files are written to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

When deploying, configure the host to serve `index.html` for application routes so direct visits and language-switch reloads work on nested pages.

## Pages

- `/` — Home
- `/destinatsii` — Destination catalogue, filters, and map
- `/destinatsii/:id` — Individual destination
- `/dnevnik` — Travel journal
- `/dnevnik/:id` — Individual journal entry
- `/za-nas` — About the agency
- `/kontakt` — Contact details, map, and form
- Unmatched URLs — Not-found page

## Language switcher

Macedonian is the original and default language. React always renders the original Macedonian content, including strings supplied through i18next. English is supplied by Google Translate through the existing hidden widget.

The custom `MK | EN` controls sit at the right of the desktop Navbar and at the bottom of the expanded mobile menu. The selected language uses the existing rust accent and is exposed through `aria-pressed`.

- **EN:** clears old translation cookies, sets `googtrans=/mk/en`, and reloads the current URL so Google Translate translates the Macedonian page into English. The cookie retains the English selection across navigation and refreshes.
- **MK:** removes the translation cookies for applicable paths and host/parent domains, clears stored widget and legacy i18next preferences, and reloads the current URL. This rebuilds the original Macedonian DOM; it never asks Google to translate into Macedonian.

Both actions preserve the current route, query string, and URL fragment. Reloading clears unsaved in-memory state, such as form input. Google's default dropdown is hidden; visitors use only the custom controls.

Google Translate is an external service. English may take a moment to appear and may be unavailable if its scripts or requests are blocked or fail. The active control indicates the selected language, not a guarantee that the service has finished translating. Machine translation quality and coverage vary; content marked `notranslate` is intentionally excluded. Macedonian reset does not depend on the translation service being available.
