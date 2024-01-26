const { exec } = require("node:child_process");

/**
 * @param {string} command -  the command to run with space
 */
function execFn(command) {
  const ex = exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("e2", error);
      return;
    }
    if (stdout) {
      console.log("output: ", stdout);
    }
    if (stderr) {
      console.log("error: ", Object.getPrototypeOf(sterr));
    }
  });
}

execFn("ls");

// execFn(`node -e "fs.writeFileSync('filename.txt', 'data3', {flag: 'w+'})"`)
// execFn(
//   `"${process.execPath}" -e "fs.writeFileSync('filename.txt', 'data4', 'utf8', {flag: 'w'})"`
// );
execFn(
  `"${process.execPath}" -e "fs.writeFileSync('filename.txt', 'data6', {encoding: 'utf8',flag: 'a+'})"`
);
