# Nuxt 3 and Vuetify 3 bug reproduce

This repo will show two problems:
 - Warnings about missing sourcemaps
 - Really long vite warm up

More discussion related to this here: https://github.com/vuetifyjs/vuetify-loader/issues/290

## Setup

```bash
# npm
npm install
```

## Reproduce

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Assert

Lots of Warnings about missing sourcemaps and long vite warmup.

Go to `nuxt.config.ts` and comment out the styles-line, like this:

```js
  hooks: {
    'vite:extendConfig': config => {
      config.plugins.push(
        vuetify({
          // styles: { configFile: 'assets/settings.scss' },
        })
      )
    },
  },
```

Now there's no warnings and the warm up is as fast as it should be.
