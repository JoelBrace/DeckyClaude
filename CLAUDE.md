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
  - External dependencies (react, react-dom, decky-frontend-lib)

### Package Manager
- Use `pnpm` (specifically version 9) as recommended by Decky team
- This prevents CI issues during plugin submission to the store

### Plugin Structure Requirements
- `plugin.json` - Required for every plugin (display and behavior config)
- `package.json` - Used by Decky and store for configuration
- `dist/index.js` - Required output file from build process
- `main.py` - Required if using Python backend

### Frontend Dependencies
- Use `decky-frontend-lib` for UI components
- Stick to React 16.14.0 for compatibility
- External dependencies are provided by Steam Deck environment

### Development Commands
```bash
# Install dependencies (use pnpm v9)
pnpm install

# Build frontend
pnpm run build

# Watch mode for development
pnpm run watch
```

### References
- Official template: https://github.com/SteamDeckHomebrew/decky-plugin-template
- Documentation: https://wiki.deckbrew.xyz/plugin-dev/getting-started
- Frontend lib: https://github.com/SteamDeckHomebrew/decky-frontend-lib

## Notes
- Always test the build before pushing to ensure no compilation errors
- The project uses modern `@decky/rollup` to bundle TypeScript/React code for Decky
- Module import errors are usually caused by incorrect build configuration