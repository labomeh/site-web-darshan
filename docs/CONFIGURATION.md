# Configuration Guide - Darshan Project

This document explains all configuration files that enforce best practices for the project.

---

## 📋 Overview

This project uses comprehensive tooling to ensure code quality, consistency, and best practices:

- **TypeScript** - Strict type checking
- **ESLint** - Code quality and style enforcement
- **Prettier** - Automatic code formatting
- **EditorConfig** - Consistent editor settings
- **VS Code** - Recommended extensions and settings
- **Tailwind CSS v4** - Modern utility-first CSS
- **Next.js 15** - Optimized production builds

---

## 📄 Configuration Files

### 1. `tsconfig.json` - TypeScript Configuration

**Purpose:** Enforce strict type checking and modern JavaScript features.

**Key Features:**
- ✅ `strict: true` - Maximum type safety
- ✅ `noUnusedLocals` - Catch unused variables
- ✅ `noUnusedParameters` - Catch unused function parameters
- ✅ `noUncheckedIndexedAccess` - Prevent undefined array access errors
- ✅ `noImplicitReturns` - Ensure all code paths return values
- ✅ `forceConsistentCasingInFileNames` - Prevent case-sensitive import errors

**What it prevents:**
- Using `any` type without explicit declaration
- Accessing array elements without checking for undefined
- Implicit any types
- Unused variables cluttering the codebase

---

### 2. `eslint.config.mjs` - ESLint Configuration

**Purpose:** Enforce code quality rules and React/Next.js best practices.

**Key Rules:**

#### TypeScript Rules
- ❌ `no-explicit-any: error` - Prevents use of `any` type
- ⚠️ `consistent-type-imports` - Enforces `import type` for type-only imports
- ⚠️ `no-unused-vars` - Warns about unused variables (allows `_` prefix for intentionally unused)

#### Code Quality
- ❌ `no-console` - Prevents console.log (allows warn/error)
- ❌ `prefer-const` - Enforces const over let when variable isn't reassigned
- ❌ `no-var` - Prevents old-style var declarations

#### React Best Practices
- ❌ `self-closing-comp` - Enforces self-closing tags (`<Component />` not `<Component></Component>`)
- ❌ `jsx-boolean-value` - Enforces `<Button disabled />` not `<Button disabled={true} />`
- ❌ `jsx-curly-brace-presence` - Enforces `<div className="foo">` not `<div className={"foo"}>`
- ❌ `function-component-definition` - Enforces function declarations for named components

#### Import Organization
- ⚠️ Automatically organizes imports in this order:
  1. React/Next.js
  2. External libraries
  3. Internal (@/) imports
  4. Relative imports
- Alphabetically sorted within each group

**Example of auto-fixed imports:**
```typescript
// Before
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import Link from 'next/link';

// After (auto-fixed)
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
```

---

### 3. `.prettierrc.json` - Prettier Configuration

**Purpose:** Automatic code formatting on save.

**Settings:**
- Single quotes for JavaScript/TypeScript
- Semicolons required
- 2-space indentation
- 100 character line width
- Trailing commas in ES5 (objects, arrays)
- **Tailwind class sorting** - Automatically sorts Tailwind classes

**Example of auto-formatting:**
```tsx
// Before save
<Button className="px-4 bg-primary hover:bg-primary-dark text-white py-2">

// After save (auto-formatted)
<Button className="bg-primary px-4 py-2 text-white hover:bg-primary-dark">
```

**Prettier Plugin:** `prettier-plugin-tailwindcss`
- Sorts Tailwind classes according to official order
- Recognizes `cn()` and `clsx()` functions

---

### 4. `postcss.config.mjs` - PostCSS Configuration

**Purpose:** Process Tailwind CSS v4 styles.

**Simple configuration:**
```javascript
{
  plugins: {
    "@tailwindcss/postcss": {}
  }
}
```

**What it does:**
- Processes `@import "tailwindcss"` in CSS files
- Transforms `@theme` directive into CSS variables
- Tree-shakes unused CSS (removes unused Tailwind classes)
- Minifies CSS for production

---

### 5. `.editorconfig` - Editor Configuration

**Purpose:** Ensure consistent formatting across all editors (VS Code, WebStorm, Sublime, etc.).

**Settings:**
- UTF-8 encoding
- LF line endings (Unix-style)
- 2-space indentation
- Trim trailing whitespace
- Insert final newline

**Works with:** VS Code, JetBrains IDEs, Sublime Text, Atom, Vim, Emacs

---

### 6. `.vscode/settings.json` - VS Code Settings

**Purpose:** Configure VS Code for optimal development experience.

**Auto-formatting:**
- ✅ Format on save (Prettier)
- ✅ Fix ESLint errors on save
- ✅ Organize imports automatically

**Tailwind IntelliSense:**
- Autocomplete for `cn()` and `clsx()` functions
- Class suggestions in JSX className props

**File Exclusions:**
- Hides `.next`, `node_modules`, `out` from file explorer
- Excludes build artifacts from search

**TypeScript:**
- Uses workspace TypeScript version
- Non-relative imports preferred (@/ paths)

---

### 7. `.vscode/extensions.json` - Recommended Extensions

**Purpose:** Prompt users to install recommended extensions.

**Extensions:**
1. **Prettier** - Code formatter
2. **ESLint** - JavaScript/TypeScript linter
3. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
4. **Error Lens** - Inline error messages
5. **Path Intellisense** - Autocomplete file paths
6. **Auto Rename Tag** - Rename paired HTML/JSX tags
7. **Code Spell Checker** - Catch typos

**Installation:**
VS Code will prompt: "This workspace has extension recommendations. Would you like to install them?"

---

### 8. `next.config.ts` - Next.js Configuration

**Purpose:** Optimize Next.js for static export and production.

**Optimizations:**
- ✅ `compress: true` - Enable gzip compression
- ✅ `poweredByHeader: false` - Remove X-Powered-By header (security)
- ✅ `removeConsole` - Strip console.log in production (keeps warn/error)
- ✅ `optimizePackageImports` - Reduce bundle size for React
- ✅ `eslint/typescript: ignoreBuildErrors: false` - Fail build on errors

**Static Export:**
- `output: 'export'` - Generate static HTML/CSS/JS
- `images.unoptimized: true` - Use regular <img> tags
- `trailingSlash: true` - URLs end with / for consistency

---

## 🚀 NPM Scripts

Run these commands to maintain code quality:

### Development
```bash
npm run dev          # Start dev server with hot reload
```

### Production Build
```bash
npm run build        # Build static site for production
npm start            # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Check for ESLint errors
npm run lint:fix     # Auto-fix ESLint errors

npm run format       # Format all files with Prettier
npm run format:check # Check if files are formatted

npm run type-check   # Check TypeScript types (no output)

npm run validate     # Run ALL checks (type-check + lint + format)
```

### Utilities
```bash
npm run clean        # Remove build artifacts and cache
```

---

## ✅ Pre-Commit Workflow (Recommended)

Before committing code, run:

```bash
npm run validate
```

This ensures:
1. ✅ No TypeScript errors
2. ✅ No ESLint errors
3. ✅ All files are formatted with Prettier

**Automated option:** Install Husky for automatic pre-commit checks (optional).

---

## 🎯 Enforced Best Practices

### 1. No `any` Type
```typescript
// ❌ BAD - ESLint error
function handleClick(event: any) { }

// ✅ GOOD
function handleClick(event: React.MouseEvent<HTMLButtonElement>) { }
```

### 2. Consistent Type Imports
```typescript
// ⚠️ WARNING - Auto-fixed to:
import type { ButtonProps } from '@/types';
```

### 3. Self-Closing Components
```tsx
// ❌ BAD - ESLint error
<Container></Container>

// ✅ GOOD - Auto-fixed
<Container />
```

### 4. No Unnecessary Curly Braces
```tsx
// ❌ BAD - ESLint error
<Button variant={"primary"}>

// ✅ GOOD - Auto-fixed
<Button variant="primary">
```

### 5. Organized Imports
Imports are automatically sorted:
1. React/Next.js
2. External libraries
3. Internal (@/) imports
4. Relative imports
5. Alphabetically within each group

### 6. Tailwind Class Sorting
```tsx
// Before save
<div className="px-4 bg-white hover:bg-gray-100 text-black py-2 rounded-lg">

// After save - Auto-sorted by Prettier
<div className="rounded-lg bg-white px-4 py-2 text-black hover:bg-gray-100">
```

### 7. No console.log in Production
```typescript
console.log('Debug');  // ⚠️ WARNING in dev, REMOVED in production build
console.error('Err');  // ✅ ALLOWED in production
```

---

## 🔧 Troubleshooting

### ESLint Errors Not Auto-Fixing
1. Check VS Code has ESLint extension installed
2. Verify `.vscode/settings.json` has `editor.codeActionsOnSave`
3. Reload VS Code window (Cmd/Ctrl + Shift + P → "Reload Window")

### Prettier Not Formatting
1. Install Prettier extension for VS Code
2. Check default formatter: `"editor.defaultFormatter": "esbenp.prettier-vscode"`
3. Ensure `"editor.formatOnSave": true` is set

### Tailwind Classes Not Autocompleting
1. Install "Tailwind CSS IntelliSense" extension
2. Create `styles/tailwind.css` with `@import "tailwindcss"`
3. Restart VS Code

### TypeScript Errors in VS Code
1. Ensure workspace TypeScript is used: Cmd/Ctrl + Shift + P → "Select TypeScript Version" → "Use Workspace Version"
2. Run `npm run type-check` to see all errors

---

## 📚 Additional Resources

- **TypeScript Strict Mode:** https://www.typescriptlang.org/tsconfig#strict
- **ESLint Rules:** https://eslint.org/docs/latest/rules/
- **Prettier Options:** https://prettier.io/docs/en/options.html
- **Tailwind CSS v4:** https://tailwindcss.com/docs
- **Next.js Config:** https://nextjs.org/docs/app/api-reference/next-config-js

---

**Last Updated:** January 2025
**Next.js Version:** 15.5.4
**Tailwind CSS Version:** 4.1.0
