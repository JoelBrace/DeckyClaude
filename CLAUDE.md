# Claude Assistant Instructions

## Development Workflow

After making updates to the code, follow these steps:

1. **Build the project**: Run `npm run build` to ensure the code compiles correctly
2. **If build succeeds**: Push changes to origin with `git push origin master`

## Build Command
```bash
npm run build
```

## Push Command (after successful build)
```bash
git push origin master
```

## Decky Plugin Development Best Practices (2025)

### Modern Build System
- Use `@decky/rollup` for building instead of manual Rollup configuration
- The modern template uses `deckyPlugin()` which automatically handles:
  - Correct module format for Decky loader
  - Webpack integration with Steam Deck environment
  - External dependencies (react, react-dom, @decky/ui)
- **CRITICAL**: Do NOT use manual rollup plugins - they conflict with @decky/rollup

### Package Manager
- Use `npm` or `pnpm` (pnpm v9 specifically recommended for store submission)
- This prevents CI issues during plugin submission to the store

### Plugin Structure Requirements
- `plugin.json` - Required for every plugin (display and behavior config)
  - **Must include `"api_version": 1`** for modern Decky
- `package.json` - Used by Decky and store for configuration
- `dist/index.js` - Required output file from build process
- `main.py` - Required if using Python backend

### Frontend Dependencies (MODERNIZED)
- **Use `@decky/ui` instead of `decky-frontend-lib`** for UI components
- **Use `@decky/api` for API functionality**
- **React 19.x** (not 16.14.0) - modern template uses React 19.1.1
- **Remove explicit react/react-dom dependencies** - provided by Steam Deck environment
- TypeScript 5.6+ for modern features

### Key Import Changes
```typescript
// OLD (deprecated)
import { definePlugin, PanelSection } from "decky-frontend-lib";
import { VFC } from "react";

// NEW (2025)
import { definePlugin, PanelSection } from "@decky/ui";
import { FC } from "react";
```

### Development Commands
```bash
# Install dependencies
npm install

# Build frontend (no clean step needed)
npm run build

# Watch mode for development
npm run watch
```

### Common Module Import Errors
1. **"Failed to fetch dynamically imported module"**
   - Usually caused by using old `decky-frontend-lib` instead of `@decky/ui`
   - Or missing `api_version` in plugin.json

2. **TypeScript compilation errors**
   - Check that you're using `@decky/ui` components correctly
   - Some props like `placeholder` on TextField may not exist in modern versions

3. **Build succeeds but plugin won't load**
   - Verify `plugin.json` has `"api_version": 1`
   - Check that all imports are from `@decky/ui` not `decky-frontend-lib`

### References
- Official template: https://github.com/SteamDeckHomebrew/decky-plugin-template
- Documentation: https://wiki.deckbrew.xyz/plugin-dev/getting-started
- Modern UI lib: https://github.com/SteamDeckHomebrew/decky-frontend-lib

## Notes
- Always test the build before pushing to ensure no compilation errors
- The project uses modern `@decky/rollup` to bundle TypeScript/React code for Decky
- **Module import errors are fixed by switching from `decky-frontend-lib` to `@decky/ui`**
- When in doubt, check the official template repository for current standards