# Process

- All of the numbers on `process.memoryUsage()` are in bytes
- `rss` - Resident Set Size - amount of ram used
- `process.memoryUsage` returns in total four types of memory 
  1.  `rss` 
  2. `heapTotal` 
  3. `heapUsed` 
  4. `external` - refers to memory usage by the C layer
