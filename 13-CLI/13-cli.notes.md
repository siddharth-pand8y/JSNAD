```bash
node -e "1+1" // evaluates and no print --eval
node -p "1+1" // evaluates and prints --print
node -c file.js // checks syntax in provided file and prints if error --check
node --stack-trace-limit=999 file.js // increase stack trace limit
node --abort-on-uncaught-exception //Aborting instead of exiting causes a core file to be generated for post-mortem analysis using a debugger (such as lldb, gdb, and mdb).
node --inspect file.js // activate inspector
node --inspect-brk file.js // activate inspector and break at start
node -r module.js file.js // require module before running the file --requ9ire
node --trace-uncaught file.js // used to trace uncaught exceptions
node -i // --interactive
```