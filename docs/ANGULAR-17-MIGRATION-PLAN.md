# Angular 17 Migration Plan

## Overview
Migrate `@phalgunv/ngx-keyboard-shortcuts` from Angular 16.2.12 to Angular 17.3.12 (latest LTS).

**Current State:**
- Angular: 16.2.12
- TypeScript: 5.1.6
- Package Version: 16.0.1
- Status: ✅ Stable, all tests passing

**Target State:**
- Angular: 17.3.12 (LTS)
- TypeScript: 5.4.5 (Angular 17 compatible)
- Package Version: 17.0.0
- Timeline: Estimated 2-4 hours

---

## Pre-Migration Checklist

### ✅ Completed Prerequisites
- [x] Angular 16 migration complete
- [x] All tests passing (18/18)
- [x] Zero production vulnerabilities
- [x] Modern tooling in place (Jest, ESLint)
- [x] Package published and validated (16.0.1)
- [x] Clean git state

### 📋 Pre-Flight Checks
- [ ] Create backup branch: `git checkout -b backup/angular16`
- [ ] Verify current tests: `npm test`
- [ ] Verify current build: `npm run build`
- [ ] Document current dependency versions
- [ ] Create migration branch: `git checkout -b migration/angular17`

---

## Angular 17 Key Changes

### Major Features in Angular 17:
1. **Built-in Control Flow** (`@if`, `@for`, `@switch`) - replaces `*ngIf`, `*ngFor`
2. **Deferrable Views** (`@defer`) - lazy loading templates
3. **Signals** (stable) - reactive state management
4. **Standalone APIs** (recommended default)
5. **Improved SSR/SSG** support
6. **Vite + esbuild** as default builder

### Breaking Changes:
- TypeScript 5.2+ required (we'll use 5.4.5)
- Node.js 18.13+ required (we have 22.x, but 18-20 recommended)
- Some deprecated APIs removed
- `@angular/platform-server` changes for SSR

### Impact on Our Package:
✅ **Low Risk** - This package:
- Uses core Angular APIs only
- No advanced features requiring updates
- No template syntax (directive-based)
- No SSR/SSG features
- Clean, simple API surface

---

## Migration Steps

### Phase 1: Update Angular CLI & Core (30 min)

#### Step 1.1: Update Angular CLI globally (optional)
```bash
npm install -g @angular/cli@17
```

#### Step 1.2: Run Angular Update
```bash
# Update to Angular 17 (latest 17.3.x)
ng update @angular/core@17 @angular/cli@17

# Review and apply automatic migrations
# The update will handle:
# - Updating package.json dependencies
# - Running schematics/migrations
# - Updating configuration files
```

#### Step 1.3: Update TypeScript
```bash
npm install typescript@5.4.5 --save-dev --save-exact
```

**Why 5.4.5?**
- Angular 17.3.x supports TypeScript 5.2 - 5.4
- 5.4.5 is stable and well-tested
- Avoids potential issues with 5.5.x

#### Step 1.4: Update zone.js
```bash
npm install zone.js@~0.14.3 --save-dev
```

#### Step 1.5: Update RxJS (if needed)
```bash
# Angular 17 supports RxJS 7.4+
# We have 7.8.x, should be fine, but can update:
npm install rxjs@~7.8.0 --save-dev
```

---

### Phase 2: Update Build Tools (15 min)

#### Step 2.1: Update ng-packagr
```bash
npm install ng-packagr@17.3.0 --save-dev
```

#### Step 2.2: Update Angular DevKit
```bash
ng update @angular-devkit/build-angular@17
```

#### Step 2.3: Update ESLint Plugins
```bash
# Angular ESLint for Angular 17
npm install @angular-eslint/builder@17.5.2 \
            @angular-eslint/eslint-plugin@17.5.2 \
            @angular-eslint/eslint-plugin-template@17.5.2 \
            @angular-eslint/schematics@17.5.2 \
            @angular-eslint/template-parser@17.5.2 \
            --save-dev
```

---

### Phase 3: Update Testing Infrastructure (15 min)

#### Step 3.1: Verify Jest Compatibility
```bash
# Jest 29.x should work fine with Angular 17
# No changes needed unless issues arise

# If needed, update:
npm install jest@29.7.0 ts-jest@29.1.0 --save-dev
```

#### Step 3.2: Update jest-preset-angular (if using)
```bash
# We're not using preset, but if we were:
# npm install jest-preset-angular@14.0.0 --save-dev
```

---

### Phase 4: Code Updates (30 min)

#### Step 4.1: Check for Deprecated APIs
```bash
# Search for deprecated APIs
grep -r "ModuleWithProviders" src/
grep -r "ComponentFactoryResolver" src/
grep -r "ViewContainerRef.createComponent" src/
```

**Expected:** None (our code is clean)

#### Step 4.2: Update peer dependencies in src/package.json
```json
{
  "peerDependencies": {
    "@angular/core": "^17.0.0",
    "@angular/common": "^17.0.0"
  }
}
```

#### Step 4.3: Review TypeScript strict checks
- Ensure `tsconfig.json` settings are compatible
- Angular 17 encourages stricter TypeScript settings

---

### Phase 5: Build & Test (30 min)

#### Step 5.1: Build the Library
```bash
npm run build
```

**Expected issues:** None (clean API surface)

**If issues arise:**
- Check TypeScript compilation errors
- Review ng-packagr output format
- Verify APF compatibility

#### Step 5.2: Run Tests
```bash
npm test
```

**Expected:** All 18 tests passing

**If tests fail:**
- Check TestBed setup changes
- Review zone.js compatibility
- Check for timing/async issues

#### Step 5.3: Lint the Code
```bash
npm run lint
```

**Expected:** 0 errors (same as before)

#### Step 5.4: Build Demo App
```bash
ng build --configuration production
```

**Expected:** Successful build

---

### Phase 6: Update Documentation (20 min)

#### Step 6.1: Update README.md
```markdown
## Requirements

- **Angular**: 17+ (for v17.x)
- **Node.js**: 18.13+ 
- **TypeScript**: 5.2-5.4
```

#### Step 6.2: Update CHANGELOG.md
Add new section:
```markdown
## [17.0.0] - 2025-11-03

### 🎉 Angular 17 Support

Upgraded to Angular 17.3.12 (LTS) with full compatibility.

#### Changed
- Updated to Angular 17.3.12
- Updated to TypeScript 5.4.5
- Updated to zone.js 0.14.3
- Updated to ng-packagr 17.3.0
- Updated peer dependencies to Angular 17+

#### Validated
- ✅ All 18 tests passing
- ✅ Library builds successfully
- ✅ Demo app builds successfully
- ✅ Zero production vulnerabilities
- ✅ Backward compatible API

### Migration from v16.x

Users can upgrade seamlessly:
\`\`\`bash
# Update Angular to 17
ng update @angular/core@17 @angular/cli@17

# Update the package
npm install @phalgunv/ngx-keyboard-shortcuts@17.0.0
\`\`\`

No code changes required - API remains fully compatible.
```

#### Step 6.3: Update Version Strategy Docs
Ensure documentation reflects:
- v16.x.x = Angular 16+
- v17.x.x = Angular 17+
- v18.x.x = Angular 18+ (future)

---

### Phase 7: Version & Publish (20 min)

#### Step 7.1: Update Package Versions
```bash
# Update package.json
# version: "17.0.0"

# Update src/package.json
# version: "17.0.0"
```

#### Step 7.2: Build Final Package
```bash
npm run build
```

#### Step 7.3: Run Final Validation
```bash
# All checks must pass
npm test              # ✅ All tests
npm run lint          # ✅ No errors
npm run build         # ✅ Clean build
npm audit --production # ✅ No vulnerabilities
```

#### Step 7.4: Commit Changes
```bash
git add -A
git commit -m "feat: upgrade to Angular 17.3.12

- Update Angular to 17.3.12 (LTS)
- Update TypeScript to 5.4.5
- Update zone.js to 0.14.3
- Update ng-packagr to 17.3.0
- Update @angular-eslint to 17.5.2
- Update peer dependencies to Angular 17+
- All tests passing (18/18)
- Zero breaking changes to public API"

git push origin migration/angular17
```

#### Step 7.5: Create Pull Request
- Open PR: `migration/angular17` → `master`
- Title: "feat: Angular 17.3.12 upgrade"
- Include migration summary and validation results

#### Step 7.6: Publish to npm
```bash
cd dist
npm publish --access public

# This will publish as latest:
# @phalgunv/ngx-keyboard-shortcuts@17.0.0
```

#### Step 7.7: Create Git Tag
```bash
git tag -a v17.0.0 -m "Release v17.0.0 - Angular 17 support"
git push origin v17.0.0
```

---

## Rollback Plan

If critical issues are discovered:

### Immediate Rollback:
```bash
# Revert to Angular 16
git checkout migration/angular16
npm install
npm run build
cd dist
npm publish --access public  # Republish 16.0.1 as latest if needed
```

### npm dist-tag Management:
```bash
# If 17.0.0 has issues, redirect latest back to 16.x
npm dist-tag add @phalgunv/ngx-keyboard-shortcuts@16.0.1 latest
npm dist-tag add @phalgunv/ngx-keyboard-shortcuts@17.0.0 angular17

# Users can then:
npm install @phalgunv/ngx-keyboard-shortcuts@latest  # Gets 16.0.1
npm install @phalgunv/ngx-keyboard-shortcuts@angular17  # Gets 17.0.0
```

---

## Risk Assessment

### 🟢 Low Risk Areas
- ✅ Core directive API (no template syntax)
- ✅ Service API (pure TypeScript)
- ✅ Event handling (standard browser events)
- ✅ DI patterns (stable across versions)

### 🟡 Medium Risk Areas
- ⚠️ TypeScript 5.1 → 5.4 (minor breaking changes possible)
- ⚠️ ng-packagr output format (APF changes)
- ⚠️ Jest + Angular 17 (zone.js compatibility)

### 🔴 Low Probability Issues
- TestBed initialization changes
- Zone.js async handling
- Build output format incompatibilities

**Overall Risk: LOW** - Clean, simple API with no advanced features.

---

## Success Criteria

Migration is successful when:
- [ ] ✅ Angular 17.3.12 installed
- [ ] ✅ TypeScript 5.4.5 installed
- [ ] ✅ All dependencies updated
- [ ] ✅ Library builds without errors
- [ ] ✅ All 18 tests passing
- [ ] ✅ ESLint passes with 0 errors
- [ ] ✅ Demo app builds successfully
- [ ] ✅ No production vulnerabilities
- [ ] ✅ Package published to npm
- [ ] ✅ Documentation updated
- [ ] ✅ Git tagged and pushed

---

## Timeline Estimate

| Phase | Task | Duration | Status |
|-------|------|----------|--------|
| 1 | Update Angular CLI & Core | 30 min | ⏳ Pending |
| 2 | Update Build Tools | 15 min | ⏳ Pending |
| 3 | Update Testing Infrastructure | 15 min | ⏳ Pending |
| 4 | Code Updates | 30 min | ⏳ Pending |
| 5 | Build & Test | 30 min | ⏳ Pending |
| 6 | Update Documentation | 20 min | ⏳ Pending |
| 7 | Version & Publish | 20 min | ⏳ Pending |
| **Total** | | **2h 40min** | |

*Add 30-60 min buffer for unexpected issues*

---

## Post-Migration Tasks

After successful migration:

1. **Monitor npm downloads** for 17.0.0
2. **Monitor GitHub issues** for bug reports
3. **Update project README** with Angular 17 badge
4. **Announce on social media** (Twitter, Reddit, etc.)
5. **Update awesome-angular** lists if listed
6. **Consider blog post** about the migration experience

---

## Next Steps

Ready to begin? Execute:
```bash
# 1. Create backup
git checkout -b backup/angular16
git push origin backup/angular16

# 2. Create migration branch
git checkout migration/angular16
git checkout -b migration/angular17

# 3. Start Phase 1
ng update @angular/core@17 @angular/cli@17
```

---

## References

- [Angular 17 Update Guide](https://update.angular.io/?v=16.0-17.0)
- [Angular 17 Release Notes](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)
- [TypeScript 5.4 Release Notes](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/)
- [ng-packagr 17 Documentation](https://github.com/ng-packagr/ng-packagr)

---

**Prepared by:** GitHub Copilot  
**Date:** November 3, 2025  
**Current Version:** 16.0.1  
**Target Version:** 17.0.0
