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

## Notes
- Always test the build before pushing to ensure no compilation errors
- The project uses Rollup to bundle the TypeScript/React code into a single ES module for Decky