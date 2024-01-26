const { spawn } = require("node:child_process");

/**
 *
 * @param {string} command
 * @param {Array<string>} arguments
 */
function spawnFn(command, arguments = []) {
  const cp = spawn(command, arguments);
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
}

spawnFn(process.execPath, [
  "-e",
  "const a = require('./03.js'); const z = a('ls'); console.log(z.toString())",
// "02.js"
]);
