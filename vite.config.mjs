// @ts-check
import { browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'

export default {
  root: 'example',
  build: {
    outDir: '../public',
    emptyOutDir: true
  },
  css: {
      transformer: 'lightningcss',
      lightningcss: {
          targets: browserslistToTargets(browserslist('>= 0.25%')),
      },
  },
  server: {
      port: 8888,
      host: true,
      open: true,
  },
}
