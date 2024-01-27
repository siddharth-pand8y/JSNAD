```bash
npm init --yes // initialize package
npm install --save // installs package in dependency
npm install --save-dev // installs package in devDependency
npm install --production // installs only packages that are not development dependency
npm install --save-exact // installs an exact version
npm install alias@npm:package // installs package under an alias
npm install package@major.minor.patch // install a specific version
npm install package@major.minor.x // install a specific version and latest patch
npm install package@~major.minor // install a specific version and latest patch
npm install package@major.x // install a specific version and latest minor
npm install package@^major // install a specific version and latest minor
```

- `npm init -y` (When we run it in a git repo, package.json will automatically read repo remote URL & add it to package.json
- `node -e "fs.appendFileSync(path.join(os.homedir(), '.npmrc'), '\npackage-lock=false\n')"`
- npm i -h  help for the npm install command
- npm ls --depth=999
- deduped - same dependency being used in different packages
- `npm i --save-dev <package-name>` - for installing a development dependency
- `npm i --omit-dev`  : install packages omitting the dev dependencies
- `npm i --production` : same as --omit-dev but is deprecated
- In semver, `^8.14.1` is same as `8.x.x`
- `^0.0.0` is not the same `0.x.x`
- We can use `--` to pass flags via npm run