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