# Process

- `process.memoryUsage` returns in total four types of memory
  1.  `rss` - Resident Set Size - amount of ram used
  2.  `heapTotal`
  3.  `heapUsed`
  4.  `external` - refers to memory usage by the C layer

```javascript
process.on("message", (msg) => {
  console.log(msg);
});

process.on("exit", (code) => {
  console.log(`Process exited with the code: ${code}`);
});

process.exit(code);
```

| Command                 | Output                                                       | Remarks                                                    |
| ----------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| `process.cwd()`         |                                                              |                                                            |
| `process.platform`      | `win32`                                                      |                                                            |
| `process.pid`           |                                                              |                                                            |
| `process.chdir`         |                                                              |                                                            |
| `process.uptime()`      | `0.021468`                                                   | seconds                                                    |
| `process.cpuUsage()`    | `{ user: 15000, system: 31000 }`                             | microseconds(one millionth of a second)                    |
| `process.memoryUsage()` | `{ rss: 21598208,  heapTotal: 4366336,  heapUsed: 3206712,  external: 1148873,  arrayBuffers: 10507}` | All of the numbers on `process.memoryUsage()` are in bytes |
|                         |                                                              |                                                            |
|                         |                                                              |                                                            |
