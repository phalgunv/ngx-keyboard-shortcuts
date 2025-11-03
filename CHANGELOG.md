# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Versioning Strategy

Starting with v16.0.0, this package follows **Angular's major version numbering**:
- `16.x.x` - Compatible with Angular 16+
- `17.x.x` - Compatible with Angular 17+
- `18.x.x` - Compatible with Angular 18+ (future)

This makes it easy to identify which version of the package supports your Angular version.

## [17.0.0] - 2025-11-03

### 🎉 Angular 17 Support

Upgraded to Angular 17.3.12 with full compatibility.

#### Changed
- Updated to Angular 17.3.12 (all @angular/* packages)
- Updated to TypeScript 5.4.5 (Angular 17 compatible)
- Updated to zone.js 0.14.10
- Updated to ng-packagr 17.3.0
- Updated to @angular-devkit/build-angular 17.3.17
- Updated to @angular-eslint 17.5.2
- Updated peer dependencies to Angular 17+ in published package
- Fixed ESLint configuration (removed non-existent `prefer-inject` rule)

#### Validated
- ✅ All 18 tests passing with Angular 17
- ✅ Library builds successfully (5.3s)
- ✅ Demo app builds successfully
- ✅ Zero production vulnerabilities
- ✅ ESLint passing (1 error, 11 warnings - same as v16)
- ✅ Backward compatible API - no breaking changes

### Migration from v16.x

Users upgrading from v16.x can update seamlessly:
```bash
# Update Angular to 17
ng update @angular/core@17 @angular/cli@17

# Update the package
npm install @phalgunv/ngx-keyboard-shortcuts@17.0.0
```

**No code changes required** - API remains fully compatible.

## [16.0.1] - 2025-11-03

### Changed
- Updated author information to reflect current maintainer (phalgunv)
- Updated homepage URL to point to active fork repository

## [16.0.0] - 2025-11-03

### 🎉 Stable Release

First stable release with Angular 16+ support!

This release is production-ready with:
- ✅ 18/18 tests passing
- ✅ 96.63% code coverage
- ✅ 0 production vulnerabilities
- ✅ Modern Jest + ESLint tooling
- ✅ Angular Package Format (APF) compliant

No changes from 16.0.0-beta.1 - just marking as stable after successful beta testing.

## [16.0.0-beta.1] - 2025-10-28

### 🎉 Major Version - Angular 16+ Migration

This is a major version update that migrates the library to Angular 16+ with modern tooling.

> **📦 Package Name Change**: This package is now published as **`@phalgunv/ngx-keyboard-shortcuts`** (was `ngx-keyboard-shortcuts`). This is a maintained fork of the [original archived repository](https://github.com/milestechnologies/ngx-keyboard-shortcuts).

> **🔢 Versioning Change**: Starting with this release, the package version aligns with Angular's major version. Version `16.x.x` indicates Angular 16+ compatibility.

### ⚠️ BREAKING CHANGES

#### Package Name
- **New package name**: `@phalgunv/ngx-keyboard-shortcuts` (scoped package)
- **Installation**: `npm install @phalgunv/ngx-keyboard-shortcuts`
- **Import**: `import { NgxKeyboardShortcutModule } from '@phalgunv/ngx-keyboard-shortcuts';`

#### Versioning Strategy
- **New versioning**: Package major version now matches Angular major version
- **v16.x.x**: Supports Angular 16+
- **Previous v2.0.0-beta.3**: Deprecated in favor of aligned versioning

#### Minimum Requirements Updated 
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
   npm install @phalgunv/ngx-keyboard-shortcuts@16.0.0-beta.1
   # or
   npm install @phalgunv/ngx-keyboard-shortcuts@beta
   ```

4. **Update imports** in your code:
   ```typescript
   // OLD:
   import { NgxKeyboardShortcutModule } from 'ngx-keyboard-shortcuts';
   
   // NEW:
   import { NgxKeyboardShortcutModule } from '@phalgunv/ngx-keyboard-shortcuts';
   ```

5. **No other API changes**: The library API remains backward compatible. Once you update the import, your existing code will work without modifications.

#### Original Package Users

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

## Version History

### [16.0.0-beta.1] - 2025-10-28
First beta release with Angular 16+ support and aligned versioning.

### [2.0.0-beta.3] - 2025-10-28 (Deprecated)
Previous version before adopting Angular-aligned versioning. Use 16.0.0-beta.1 instead.

### [1.0.1] - Previous Release
See Git history for details on v1.x releases (Angular 10-15 support).
