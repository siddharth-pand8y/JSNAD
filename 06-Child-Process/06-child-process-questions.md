1. Run `ls` command using `spawn` and log stdout, stderr & exit event along with code

2. Run  `ls` command using `exec` and log stdout, stderr & exit event along with code

3. Run `ls` command using `execSync` and also log the output

4. Run a js file using spawn, log **Success** along with output of the command and also handle error

5. Run a js file using `spawnSync` and log **Success** message along with the output and also handle error responsibly

6. Run a js file using `exec` and log **Success** message along with the output and also handle error responsibly

7. Write content of 

   ```
   const fncExecFile = (app, options = []) => {
   
   }
   fncExecFile('node', ['-v']);
   fncExecFile('ls');
   ```

   such that output is logged as well as errors are handled and exit code is logged

8. Write content of 

   ```
   const fncExecFileSync = (app, options = []) => {
   
   
   }
   fncExecFileSync('node', ['-v']);
   fncExecFileSync('ls');
   ```

   such that output is logged as well as errors are handled and exit code is logged

9. Create a child process that can receive a number and calculates the fibonacci of that number