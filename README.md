# CSS

Things I want to remember about CSS.

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Responsive grid](#responsive-grid)
- [Center aligned icons](#center-aligned-icons)
- [Development](#development)

<!-- tocstop -->

</details>

## Responsive grid

[`src/responsive-grid.css`](./src/responsive-grid.css) provides the
`.smol-css-grid` class. It creates as many columns as fit, with a minimum
width of `15ch` and a `1rem` gap. Columns shrink to the container width
when it's narrower than the minimum.

```html
<div class="smol-css-grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

Override `--min` and `--gap` on the grid to change the column width and
spacing.

## Center aligned icons

[`src/center-icon.css`](./src/center-icon.css) provides the `.center`
class. Its first child is the icon; subsequent content is the label. The
icon aligns with the first line of text, including when the label wraps.

```html
<div class="center">
  <svg aria-hidden="true"><!-- Icon --></svg>
  <span>Label</span>
</div>
```

Set `--size` on the container to change the icon size (default `1em`).
`--py` controls block padding (default `0.5em`); `--px` controls inline
padding and the gap, calculated from `--py`, line height, and cap height
by default. The technique was shared
[on Bluesky](https://bsky.app/profile/haz.dev/post/3n33ozvhwes2b).

## Development

Run `npm install` to install dependencies. Run `npm start` to serve the
examples with Vite on port 8888, or `npm run build-example` to build them
into `public/` for GitHub Pages. The example build uses Lightning CSS with
a `>= 0.25%` Browserslist target.

Run `npm run stylelint` to lint the stylesheets and `npm run build` to
compile each stylesheet in `src/` to readable and minified CSS in `dist/`.
The build replaces `dist/` and uses Lightning CSS's default browser
behavior, without configured compatibility targets.

`npm version` runs Stylelint before changing the version, then pushes tags
and publishes the package. `npm publish` runs the CSS build first.
