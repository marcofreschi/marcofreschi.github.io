# marcofreschi.github.io

Sito accademico personale costruito con [Astro](https://astro.build).

## Struttura del progetto

```
/
├── src/
│   ├── layouts/
│   │   └── Base.astro        # Layout base con nav + footer
│   └── pages/
│       ├── index.astro       # Homepage con hero + research preview
│       ├── research.astro    # Lista progetti di ricerca
│       ├── publications.astro # Pubblicazioni
│       └── contact.astro     # Pagina contatti
├── astro.config.mjs
└── package.json
```

## Avvio in locale

### Prerequisiti
- [Node.js](https://nodejs.org/) versione **18.14.1** o superiore
- npm (incluso con Node.js)

### Setup

```bash
# 1. Entra nella cartella del progetto
cd C:\Users\mrcfr\Documents\marcofreschi.github.io

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su **http://localhost:4321**

### Build per produzione (GitHub Pages)

```bash
npm run build
```

I file statici vengono generati nella cartella `dist/`.

### Preview della build

```bash
npm run preview
```

## Deploy su GitHub Pages

1. Crea un repository GitHub chiamato `marcofreschi.github.io`
2. Fai push del codice
3. In `Settings → Pages`, seleziona **GitHub Actions** come source
4. Crea `.github/workflows/deploy.yml` con l'action ufficiale Astro

## Personalizzazione rapida

- **Colori**: modifica le variabili CSS in `src/layouts/Base.astro` (sezione `:root`)
- **Pubblicazioni**: aggiorna l'array `publications` in `src/pages/publications.astro`
- **Progetti**: modifica le research cards in `src/pages/index.astro` e `src/pages/research.astro`
- **Contatti**: aggiorna email, ORCID, LinkedIn in `src/pages/contact.astro`
