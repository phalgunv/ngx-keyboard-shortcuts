# Migration: Make ngx-keyboard-shortcuts compatible with Angular 16+

This document records investigation findings, a step-by-step migration plan, file-level changes, commands to run, quality gates, risk assessment, and a recommended timeline for upgrading the repository `ngx-keyboard-shortcuts` to be compatible with Angular 16+.

> Generated: 2025-10-28

## Overview

The project is a small Angular library with a demo app. The core library code is minimal and largely framework-agnostic, but the build/test/config tooling targets an older Angular (v10) and older Node/TypeScript versions. Migration focuses on tooling, TypeScript, packaging, and CI updates rather than large code changes.

This doc follows an engineering approach: small safe steps, automated checks, and validates with smoke tests.

---

## Current quick findings

- Root `package.json` and `src/package.json` indicate Angular 10-era dependencies.
- TypeScript version in devDependencies is older (<5.x). Angular 16 requires TypeScript 5.x.
- TSLint is used; it's deprecated in favor of ESLint.
- `ng-packagr` and packaging configuration may need updates to produce APF-compatible outputs for modern Angular projects.
- CI (`azure-pipelines.yml`) currently uses an old Node tool and will need updating to Node >=18.
- Karma/Jasmine test stack may need updates; migrating tests to Jest can improve speed and maintainability.

Files to inspect/modify (examples):
- `package.json` (root)
- `src/package.json` (library manifest)
- `angular.json`
- `tsconfig.json`, `src/tsconfig.*.json`
- `karma.conf.js`
- `azure-pipelines.yml`
- `src/public_api.ts`, `src/index.ts`, `src/**/*.(ts|html)`

---

## Migration contract (brief)

- Inputs: current repo on `master` with Angular v10-era configs and code in `src/`.
- Outputs: a documented plan plus the repository updated (in subsequent tasks) to use Angular 16-compatible package versions, CI Node version >=18, TypeScript 5.x-ready configs, and guidance for packaging and linting updates.
- Success criteria:
  - `docs/ANGULAR-16-MIGRATION.md` created (this file).
  - A clear list of tasks and edits that, when applied, produce a buildable library under Node 18 and TypeScript 5 using Angular 16 libraries.
  - Recommended commands and checks documented.

---

## Phased task breakdown (detailed)

Phase 1 — Preparation & CI/tooling

- T1.1 Update Node version in CI and local guidance
  - Files: `azure-pipelines.yml`, `package.json`
  - Action: set CI NodeTool to `18.x` or `20.x`, update `engines.node` to `>=18`.
  - Why: Angular 16 requires newer Node and many modern toolchains assume Node 18+.

- T1.2 Audit dependencies and create upgrade matrix
  - Files: `package.json`, `src/package.json`
  - Action: list current versions and choose compatible versions:
    - Angular -> 16.x
    - TypeScript -> 5.x (check Angular docs for exact minimal supported version, use latest 5.x)
    - rxjs -> ^7.x or ^8.x (validate)
    - zone.js -> version required by Angular 16
    - ng-packagr -> latest compatible
    - karma, jasmine, chrome-launcher -> latest compatible

Phase 2 — Upgrade Angular & TypeScript

- T2.1 Upgrade Angular packages to v16
  - Files: `package.json`, `src/package.json`
  - Action: update dependencies and run `ng update @angular/core@16 @angular/cli@16`.
  - Notes: follow `ng update` output to apply migrations.

- T2.2 Upgrade TypeScript to 5.x and update tsconfigs
  - Files: `package.json`, `tsconfig.json`, `src/tsconfig.*.json`
  - Action: set TypeScript devDependency to `^5.0.0` (prefer latest 5.x), update `target` to `es2020` or newer where appropriate.

Phase 3 — Build & packaging

- T3.1 Upgrade `ng-packagr` and adapt packaging configuration
  - Files: `src/package.json`, `ng-package.json` (if present), `public_api.ts`
  - Action: bump `ng-packagr` to the compatible version and ensure entry points produce FESM/ESM2020 outputs.

Phase 4 — Tests & Linting

- T4.1 Update Karma + Jasmine (or migrate to Jest)
  - Files: `karma.conf.js`, `package.json`, `test/*.spec.ts`
  - Action: update test dependencies and run unit tests.

- T4.2 Migrate from TSLint to ESLint (recommended)
  - Files: `tslint.json`, `package.json`
  - Action: install `@angular-eslint` and convert rules.

Phase 5 — Code compatibility & refactors

- T5.1 Static code scan for deprecated APIs and SSR safety
  - Files: core `src/*.ts`
  - Action: add null-safety, update any deprecated lifecycle or API usage.

- T5.2 Types and strictness
  - Files: `tsconfig*.json`
  - Action: optionally enable `strict` and fix typing errors.

Phase 6 — CI & Release

- T6.1 Update `azure-pipelines.yml`
  - Files: `azure-pipelines.yml`
  - Action: update NodeTool, test and build steps, caching, and artifacts.

- T6.2 Release validation
  - Files: `package.json`, `src/package.json`
  - Action: run `npm pack` and validate in a sample Angular 16 app.

---

## File-level suggested edits and example snippets

- Update Node engine in root `package.json`:

```json
"engines": {
  "node": ">=18"
}
```

- Update `src/package.json` peerDependencies for Angular 16:

```json
"peerDependencies": {
  "@angular/core": "^16.0.0",
  "@angular/common": "^16.0.0"
}
```

- Update CI `azure-pipelines.yml` Node tool to 18.x sample snippet:

```yaml
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Install Node.js'
```

- Example commands to run locally during migration:

```bash
# run this inside workspace
npm install -g @angular/cli@16
npm ci
ng update @angular/core@16 @angular/cli@16 --force
# or without force, and follow prompts
```

Note: prefer using `npx` for local installs to avoid global pollution: `npx @angular/cli@16 ng update`.

---

## Quality gates

Before and after changes, run these checks.

- Build: `npm run build` (or `ng build` for demo) — passes without syntax or compile errors.
- Lint/Typecheck: `npm run lint` / `tsc --noEmit` — no new type errors.
- Tests: `npm test` — all unit tests pass.

Record results in the PR and fix regressions found.

---

## Edge cases and compatibility notes

- Consumers of the library on older Angular versions will be broken if peerDependencies are bumped. Consider publishing a major version for Angular 16+ while retaining previous versions.
- SSR: library interacts with DOM events; add guards for `document`/`window` when running on server.
- Browsers list: consider updating `browserslist` and `target` to ES2020 for better compatibility with modern browsers.

---

## Estimated timeline

- Phase 1–3: 3–4 days
- Phase 4: 2–4 days
- Phase 5–6: 1–2 days
- Total: 6–10 working days for a single developer (approx.)

---

## Next steps (recommended immediate actions)

1. Update `engines.node` and CI Node version to Node 18.
2. Create a branch `migration/angular16` and run `ng update` with Angular CLI 16.
3. Update `src/package.json` peerDependencies to Angular 16 and bump `ng-packagr`.
4. Run tests and fix migration issues.
5. Migrate linting to ESLint when tests and build are stable.

---

## Appendix: commands and tips

- Use `npx` to avoid global installs:

```bash
npx -p @angular/cli@16 ng update @angular/core@16 @angular/cli@16
```

- If `ng update` suggests migrations, commit before applying them so you can revert.
- To verify packaging outcome:

```bash
npm run build # or ng-packagr -p ng-package.json
npm pack
# then in a separate sample Angular 16 repo
npm i /path/to/ngx-keyboard-shortcuts-<version>.tgz
```

---

## Contacts and notes

If you want, I can implement the safe initial edits now (update `package.json` engines, update `src/package.json` peerDependencies, and update `azure-pipelines.yml`). I can also open a PR with those changes and run CI locally to verify.

---

Generated by automated analysis and tailored to this repository's layout. If you'd like, I can follow up with concrete code changes in a PR.
