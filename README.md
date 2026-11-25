# CSS

Things I want to remember about CSS.

## Grid

See [responsive-grid.css](./src/responsive-grid.css).

## Center Aligned Icons

As seen [on Bluesky](https://bsky.app/profile/haz.dev/post/3n33ozvhwes2b).



See [center-icon.css](./src/center-icon.css).

## Development

Run `npm start` to serve the example locally with Vite. Run
`npm run build-example` to build it into `public/` for GitHub Pages.

Run `npm ci` to install dependencies and `npm run build` to compile each
stylesheet in `src/` to readable and minified CSS in `dist/`. The build
replaces the contents of `dist/`. Lightning CSS uses its default modern
browser behavior; no browser compatibility targets are configured.

Run `npm test` to check that all stylesheets compile. `npm version` runs
this check before changing the version, and `npm publish` builds first.
The package is private until it is ready to publish.
