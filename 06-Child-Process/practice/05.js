const { spawnSync } = require("node:child_process");

/**
 *
 * @param {string} cmd
 * @param {Array<string>} args
 */
function spawnSyncFn(cmd) {
  try {
    const cp = spawnSync(cmd, {
      stdio: ["pipe", "pipe", "pipe"],
    });

    console.log("output: ", cp);
  } catch (e) {
    console.error(
      `Error with spawnSync for the arguments - ${cmd} :  ${e}`
    );
  }
}

spawnSyncFn(`"${process.execPath}" ./02.js`)