# Vitae website

Docusaurus website for [vitae.mrbt-software.com](https://vitae.mrbt-software.com).

## Local development

```sh
npm ci
npm run start
```

The development server shows English by default. To preview another locale:

```sh
npm run start -- --locale pt-BR
npm run start -- --locale de
```

Build and preview all locales together:

```sh
npm run build
npm run serve
```

Existing legal pages and assets live in `static/` so their published URLs stay
unchanged. The build script restores localized legal pages after Docusaurus
finishes because locale output would otherwise overwrite them.
