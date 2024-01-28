```bash
npm init --yes // initialize package
npm install --save // installs package in dependency
npm install --save-dev // installs package in devDependency
npm install --production // installs only packages that are not development dependency
npm install --save-exact // installs an exact version
npm install --save-optional //optional dependency
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
- `npm ci` - clean install
- In semver, `^8.14.1` is same as `8.x.x`
- `^0.0.0` is not the same `0.x.x`
- We can use `--` to pass flags via npm run

## Flags

- `--save`
- `--save-exact`
- `--save-dev`
- `--save-optional`
- `--global`
- `--install-strategy`
- `--omit-dev`
- `--omit-optional`
- `--omit-peer`
- `--omit-prod`
- `--package-lock-only`



| value       | desc                                                         |
| ----------- | ------------------------------------------------------------ |
| `~version`  | Approximately equivalent to version, i.e., only accept new **patch** versions See [npm semver - Tilde Ranges](https://github.com/npm/node-semver#tilde-ranges-123-12-1) |
| `^version`  | Compatible with version, i.e., accept new **minor and patch** versions See [npm semver - Caret Ranges](https://github.com/npm/node-semver#caret-ranges-123-025-004) |
| `version`   | Must match version exactly                                   |
| `>version`  | Must be greater than version                                 |
| `>=version` | Must be equal or greater than version                        |
| `<version`  | Must be lesser than version                                  |
| `<=version` | Must be equal or lesser than version                         |
| `1.2.x`     | 1.2.0, 1.2.1, etc., but not 1.3.0                            |
| `*`         | Matches any version                                          |
| `latest`    | Obtains latest release                                       |

## Allow or disallow changes

- Pin version: `1.2.3`.

- Use `^` (like head). Allows updates at the second non-zero level from the left: `^0.2.3` means `0.2.3 <= v < 0.3`.

- Use `~` (like tail). Generally freeze right-most level or set zero if omitted:

- `~1` means `1.0.0 <= v < 2.0.0`

- `~1.2` means `1.2.0 <= v < 1.3.0`.

- `~1.2.4` means `1.2.4 <= v < 1.3.0`.

- Ommit right-most level:

   

  ```
  0.2
  ```

   

  means

   

  ```
  0.2 <= v < 1
  ```

  . Differs from

   

  ```
  ~
  ```

   

  because:

  - Starting omitted level version is always `0`
  - You can set starting major version without specifying sublevels.

## All (hopefully) possibilities

**Set starting major-level and allow updates upward**

```js
*  or "(empty string)   any version
1                         v >= 1
```

**Freeze major-level**

```js
~0 (0)            0.0 <= v < 1
0.2               0.2 <= v < 1          // Can't do that with ^ or ~ 
~1 (1, ^1)        1 <= v < 2
^1.2              1.2 <= v < 2
^1.2.3            1.2.3 <= v < 2
^1.2.3-beta.4     1.2.3-beta.4 <= v < 2
```

**Freeze minor-level**

```js
^0.0 (0.0)        0 <= v < 0.1
~0.2              0.2 <= v < 0.3
~1.2              1.2 <= v < 1.3
~0.2.3 (^0.2.3)   0.2.3 <= v < 0.3
~1.2.3            1.2.3 <= v < 1.3
```

**Freeze patch-level**

```js
~1.2.3-beta.4     1.2.3-beta.4 <= v < 1.2.4 (only beta or pr allowed)
^0.0.3-beta       0.0.3-beta.0 <= v < 0.0.4 or 0.0.3-pr.0 <= v < 0.0.4 (only beta or pr allowed)
^0.0.3-beta.4     0.0.3-beta.4 <= v < 0.0.4 or 0.0.3-pr.4 <= v < 0.0.4 (only beta or pr allowed)
```

**Disallow updates**

```js
1.2.3             1.2.3
^0.0.3 (0.0.3)    0.0.3
```
