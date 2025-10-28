# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0-beta.3] - 2025-10-28

### Breaking Changes

- **Angular 16+ Required**: Upgraded to Angular 16.2.12. The library now requires Angular 16.0.0 or higher.
- **Node.js 18+ Required**: Minimum Node.js version is now 18.x.
- **TypeScript 5.x Required**: Upgraded to TypeScript 5.1.6 for Angular 16 compatibility.
- **Peer Dependencies Updated**: 
  - `@angular/core`: ^16.0.0
  - `@angular/common`: ^16.0.0

### Added

- **Jest Testing**: Migrated from Karma/Jasmine to Jest 29.7.0 with 96%+ code coverage
- **ESLint**: Migrated from TSLint to ESLint 8.57.1 with @angular-eslint
- **Angular Package Format (APF)**: Library now outputs APF-compliant bundles (fesm2022, esm2022)
- **CI/CD Improvements**: Azure Pipelines configured with Jest tests, ESLint checks, and coverage reporting
- **Comprehensive Documentation**: 
  - `docs/ANGULAR-16-MIGRATION.md` - Migration strategy and timeline
  - `docs/DEPENDENCY-AUDIT.md` - Complete dependency inventory
  - `docs/MIGRATION-SUMMARY.md` - Detailed migration summary

### Changed

- Updated all Angular dependencies to 16.2.12
- Updated RxJS to 7.8.1 (Angular 16 compatible)
- Updated zone.js to 0.13.3
- Build system updated to ng-packagr 16.2.3
- Improved TypeScript strict mode compliance

### Removed

- **TSLint**: Completely removed in favor of ESLint
  - Removed: `tslint`, `codelyzer`, `tslint.json`
- **Karma/Jasmine**: Replaced with Jest
  - Removed: `karma` (9 packages), `jasmine-core`, `jasmine-spec-reporter`, `@types/jasmine`
  - Removed: `karma.conf.js`
- Total packages removed: 53

### Fixed

- Fixed Angular ESM module transformation issues in Jest
- Fixed demo app build configuration with proper path mappings
- Resolved peer dependency conflicts

### Security

- 0 production vulnerabilities (down from previous versions)
- 12 development-only vulnerabilities (low/moderate severity, non-blocking)

### Migration Guide

#### For Users Upgrading from v1.x:

1. **Update Angular**: Ensure your project is on Angular 16+
   ```bash
   ng update @angular/core@16 @angular/cli@16
   ```

2. **Update Node.js**: Ensure Node.js 18+ is installed
   ```bash
   node --version  # Should be 18.x or higher
   ```

3. **Install the package**:
   ```bash
   npm install ngx-keyboard-shortcuts@2.0.0-beta.3
   ```

4. **No API Changes**: The library API remains backward compatible. Your existing usage should continue to work without code changes.

#### For Contributors/Developers:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Tests** (now using Jest):
   ```bash
   npm test
   ```

3. **Run Linter** (now using ESLint):
   ```bash
   npm run lint
   ```

4. **Build Library**:
   ```bash
   npm run build
   ```

---

## [1.0.1] - Previous Release

See Git history for details on v1.x releases.
