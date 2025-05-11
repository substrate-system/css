# CSS
[![types](https://img.shields.io/npm/types/@substrate-system/icons?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/css)](https://packagephobia.com/result?p=@substrate-system/css)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-Polyform_Small_Business-249fbc?style=flat-square)](LICENSE)

CSS variables

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Install](#install)
- [Use](#use)
  * [Bundler](#bundler)
  * [CSS import](#css-import)
  * [Variables](#variables)

<!-- tocstop -->

</details>


## Install

```sh
npm i -S @substrate-system/package
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
```

### CSS import
Import from this package via CSS:

```css
@import url("node_modules/@substrate-system/css/dist/index.min.css");
```

### Variables

This package exposes CSS variables, used by [substrate](https://github.com/substrate-system/)
web components.

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
