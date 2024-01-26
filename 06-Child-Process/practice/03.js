const { execSync } = require("node:child_process");

/**
 * @param {string} command - the command to run via execSync
 */
function execSyncFn(command) {
  try {
    const exsy = execSync(command);
    console.log(exsy.toString());
  } catch (e) {
    console.error(
      `Error while running exec sync with the command ${command} \n ${e}`
    );
  }
}

module.exports = execSync;