# ADR-001: Compile CSS with Lightning CSS

**Date:** 2026-11-25

## Context

This repository collects independent CSS examples. It needs a repeatable
build and release workflow consistent with the browser template, which uses
Lightning CSS and npm scripts.

## Decision

Use Lightning CSS to compile each top-level stylesheet in `src/` into readable
and minified files in `dist/`. Use its default browser behavior until the
project defines explicit compatibility targets. Expose the build and its
verification through npm scripts, with checks in `preversion` and a build in
`prepublishOnly`. Keep the package private until publication is intended.

## Consequences

Each example can be consumed independently, and invalid CSS fails the build.
The build clears `dist/`, so that directory is reserved for generated files.
No compatibility transformation is promised for a particular browser range.
