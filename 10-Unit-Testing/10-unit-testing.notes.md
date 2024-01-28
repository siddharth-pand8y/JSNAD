# Unit Testing

## Assertions

An assertion check a value for a given condition and throws if the values do not match

- The core `assert` module exports a function that will throw as `AssertionError` when the value passed to it is `falsy` 



The  core `assert` module has the following properties

| Function                                         | Explanation |
| ------------------------------------------------ | ----------- |
| `assert.ok(value)`                               |             |
| `assert.equal(val1, val2)`                       |             |
| `assert.notEqual(val1, val2)`                    |             |
| `assert.strictEqual(val1, val2)`                 |             |
| `assert.notStrictEqual(val1, val2)`              |             |
| `assert.deepEqual(ob1, ob2)`                     |             |
| `assert.notDeepEqual(ob1, ob2)`                  |             |
| `assert.deepStringEqual(val1, val2)`             |             |
| `assert.notDeepStrictEqual(val1, val2)`          |             |
| `assert.throws(()=> fn, <Error>)`                |             |
| `assert.doesNotThrow(function)`                  |             |
| `assert.reject(promise | async function)`        |             |
| `assert.doesNotReject(promise | async function)` |             |
| `assert.ifError(err)`                            |             |
| `assert.match(string, regex`)                    |             |
| `assert.doesNotMatch(string,regex)`              |             |
| `assert.fail()`                                  |             |

- Since NodeJS does not print anything for success there is no `assert.pass` method as it would do nothing

Assertions can be grouped into following categories

- Truthiness (`assert.ok`)
- Equality
- Deep Equality
- Errors (ifError)
- Reachability(fail)

### Describe/It Pattern

``` javascript
const { describe, it } = require('node:test');

describe('A thing', () => {
  it('should work', () => {
    assert.strictEqual(1, 1);
  });
});
```

### Only Tests

flag: `--test-only`

``` javascript
test('this test is run', { only: true }, async (t) => {
});
```

### Filtering tests by name

flag: --test-name-pattern

```bash
--test-name-pattern="test [1-3]"
```

This option would cause the test runner to execute *test 1*, *test 2* & *test 3*

```javascript
test('test 1', async (t) => {
  await t.test('test 2');
  await t.test('test 3');
});
```

#### Test Runner execution model

When searching for test files to execute, the test runner behaves as following

- Any files explicitly stated
- CWD is recursively searched for test files
- node_modules is ignore by default
- all files under the `test` folder are stated as test cases and run as test cases
- In all the other directories files with extensions `.js` `.cjs` `.mjs` are scanner with the following patters
  - ^test$
  - ^test-0.+

Each matching test file is executed in a separate test file

### Code Coverage

flag: `--experimental-test-coverage`

### Coverage Reporters

``` bash
node --test --experimental-test-coverage --test-reporter=lcov --test-reporter-destination=lcov.info
```

#### Limitations

- Source maps are not supported
- excluding specific files or directories from the source map are not supported

___

## JEST

## Running from the command line 

```bash
jest
jest folder-name
jest path/to/my-test.js
jest -o //Run tests related to changed files based on hg/git (uncommitted files)
jest -t name-of-spec // Run tests that match against the name in describe or test, basically)
jest --collectCoverage
```

#### **`package.json`**

``` json
"jest": {
    "verbose": true,
    "coverageDirectory": "./code-coverage",
    "coverageThreshold": {
        "global": {
          "branches": 80,
          "functions": 80,
          "lines": 80,
          "statements": 100,
        },
      },
    "displayName": true
  }
```



```javascript
const {describe, it, expect} = require("@jest/globals")
```



