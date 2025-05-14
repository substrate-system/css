# CSS
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/css)](https://packagephobia.com/result?p=@substrate-system/css)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-Polyform_Small_Business-249fbc?style=flat-square)](LICENSE)

CSS [normalize](./src/normalize.css), [some variables](./src/index.css), and
[the Stack](https://every-layout.dev/layouts/stack/).

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Install](#install)
- [Use](#use)
  * [Bundler](#bundler)
  * [CSS import](#css-import)
  * [Variables](#variables)
  * [normalize](#normalize)
  * [The Stack](#the-stack)
- [see also](#see-also)

<!-- tocstop -->

</details>


## Install

```sh
npm i -S @substrate-system/css
```

## Use

### Bundler
In a bundler (`esbuild`), import from this package.

```js
import '@substrate-system/css'
```

Or minified:
```js
import '@substrate-system/css/min'

// import specific files
import '@substrate-system/css/min/normalize'
```

### CSS import
Import from this package via CSS:

```css
@import url("node_modules/@substrate-system/css/dist/normalize.min.css");
```

### Variables
This package exposes CSS variables, used by [substrate](https://github.com/substrate-system/)
web components.

```js
import '@substrate-system/css'
```

```css
:root {
    --substrate-background: #f4f7f9;
    --substrate-accent: #38b9ff;
    --substrate-primary: #36393d;
    --substrate-secondary: #e8e8e4;
    --substrate-light: #999da0;
    --substrate-medium: #999da0;
    --substrate-dark: #5a6571;
    --substrate-shadow: #96969640;
    --substrate-disabled: #98a1af;
    --substrate-button-text: #36393d;
    --substrate-button-shadow: #00000054;
    --substrate-button-background: #f5f5f5;
    --substrate-button-background-hover: #e6e6e6;
    --substrate-button-background-focus: #ededed;
    --substrate-input-text: #36393d;
    --substrate-input-text-hover: #e4e4e4;
    --substrate-input-border: #c9c9c9;
    --substrate-input-border-hover: #36393d;
    --substrate-input-background-focus: #eee;
    --substrate-border: #e7edf1;
    --substrate-error: #f06653;
    --substrate-notification: #f06653;
    --substrate-danger: #f06653;
    --substrate-success: #85b274;
    --substrate-warning: #f9a967;
    --substrate-info: #999da0;
    --substrate-overlay: #fff66;
}
```

### normalize

Reset/normalize styles for a nice blank slate.

See [joshcomeau.com/css/custom-css-reset](https://www.joshwcomeau.com/css/custom-css-reset/)

> These days, browsers don't have massive discrepancies when it comes to layout
> or spacing. By and large, browsers implement the CSS specification faithfully,
> and things behave as you'd expect.

__*Featuring*__:

1. `box-sizing: border-box;` -- Sizes [based on `border-box`, not `content-box`](https://www.joshwcomeau.com/css/custom-css-reset/#one-box-sizing-model-2).
2. `margin: 0` -- [Remove default margin](https://www.joshwcomeau.com/css/custom-css-reset/#two-remove-default-margin-3). Add margins as needed in application CSS.
3. [`line-height: calc(2px + 2ex + 2px);`](https://www.joshwcomeau.com/css/custom-css-reset/#three-add-accessible-line-height-4) -- [Dyslexia friendly](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html) line height.
>
> [!NOTE]  
> You may want to override the `line-height` for headings in your application CSS.
> See [this article](https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/) for more info about `line-height`.
>
4. `-webkit-font-smoothing: antialiased;` -- [Chrome and Safari still use subpixel antialiasing by default](https://www.joshwcomeau.com/css/custom-css-reset/#four-improve-text-rendering-5), which is bad on high DPI screens.
5. [Use block display by default for media tags](https://www.joshwcomeau.com/css/custom-css-reset/#five-improve-media-defaults-6), like `img` and `video`.
6. [Inherit fonts for form controls](https://www.joshwcomeau.com/css/custom-css-reset/#six-inherit-fonts-for-form-controls-7)
> `font` is a rarely-used shorthand that sets a bunch of font-related properties, like `font-size`, `font-weight`, and `font-family`. 
7. Avoid text overflows -- Permission to [use hard wraps when no soft wrap opportunties can be found](https://www.joshwcomeau.com/css/custom-css-reset/#seven-avoid-text-overflows-8)
8. [Improve line wrapping](https://www.joshwcomeau.com/css/custom-css-reset/#eight-improve-line-wrapping-9) -- widows and orphans
9. [Root stacking context](https://www.joshwcomeau.com/css/custom-css-reset/#nine-root-stacking-context-10) -- **OPTIONAL** -- Create a new stacking context without needing to set a `z-index`. See [What The Heck, z-index??](https://www.joshwcomeau.com/css/stacking-contexts/)

### [The Stack](https://every-layout.dev/layouts/stack/)

```js
import '@substrate-system/css/stack'

// minified
import '@substrate-system/css/min/stack'
```

It's [Andy Bell's favorite 3 lines](https://piccalil.li/blog/my-favourite-3-lines-of-css/).

In its entirety:

```css
.stack > * + * {
    margin-block-start: 1.5rem;
}
```

-------------------

## see also

* [scrolling with reduced motion media query](https://gomakethings.com/how-to-animate-scrolling-to-anchor-links-with-one-line-of-css/#accessibility-concerns)
