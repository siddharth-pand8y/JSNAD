# Module System

- Faux-ESM is ESM link syntax, transpiled by Babel. Faux-ESM compiles to CJS i.e. it loads asynchronously
- When a file is the entry point of a program, it's the main module
- require.main === module , is used to test whether a js file is run as a program or a module
- import.meta.url holds the file:// URL pointing to the file path of current module
- for esm, to check a module or program, we use await realpath(fileURLToPath(import.meta.url)) === await realpath(process.argv[1]
- ESM does not support loading modules without the full extension
- require.resolve(<package-name>) : determine the absolute path for any required module
- const require = createRequire(import.meta.url);
-    pathToFileURL(require.resolve(<package-name>);
-  The code above is used to resolve path of a module in ESM
- const __filename = fileURLToPath(import.meta.url)
-   const __dirname = dirname(__filename)