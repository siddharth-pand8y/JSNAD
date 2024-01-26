// Question: Run `ls` command using `spawn` and log stdout, stderr & exit event along with code

const cp = require("node:child_process");

function spawnFn(cmd, options = []) {
  const sp = cp.spawn(cmd, options);
  // console.log(sp);
  sp.stdout.on("data", (data) => console.log(data.toString()));
  sp.stderr.on("data", (e) => console.error(e.toString()));
}

spawnFn("ls");

spawnFn(process.execPath, [
  "-e",
  "fs.writeFileSync('random.txt', 'data2', {flag: 'wx'})",
]);
