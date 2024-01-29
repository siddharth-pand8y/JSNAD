# File System

- In CJS, 
  - `__dirname`  -  directory of the current module 
  - `__filename` - path of the current file 
- In ESM 
  - `url.fileURLToPath(import.meta.url)` : is equivalent to **__filename** 
  - `path.dirname(url.fileURLToPath(import.meta.url))` : is equivalent to **dirname**
- `path.join`  -  can be used join path segments without worrying about separators specific  to that OS
- `path.isAbsolute`  -  returns true if the given path is absolute
- `path.relative` -  give two absolute paths as arguments and it will return the relative path between those files
- `path.resolve` - resolves a sequence of path into an absolute path
- `path.normalize` -  normalizes the given  path, resolving '..' and '.' segments
- `path.format` - builds a string from an object
- `path.parse` - returns an object with the following properties
  1. root  - root directory
  2. base - basename of the file (i.e. file name with extension)
  3. dir - string path of the file
  4. ext - extension of the file
  5. name - file name without extension
- `path.basename` - full file name along with extension
- `path.dirname` - directory of the path
- `path.extname` -  extension of the file
- `fs.readFileSync` - read contents of a file synchronously
- `fs.writeFileSync` - write contents of a file synchronously
- `fs.chmodSync` - update the permissions of a file synchronously
- `fs.readFile` - read contents of a file (callback/promise)
- `fs.writeFile` - write buffer to a file (callback/promise)

### Opening Files
- `fs.openSync(filePath[, flags[, mode]])`

### File System Flags

1. r - read
2. rs
3. r+ - read and write
4. rs+ 
5. a
6. ax
7. a+ - 
8. ax+
9. w -write file
10. w+
11. wx - write and fail if the file exists
12. wx+

#### Reading Directories

- `readdirSync`
- `readdir` (callback & Promises)
- `fs.Dir` for streams or use `Readable.from` to generate a readable stream (Ref: https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fs_class_fs_dir)

#### File or Folder Information

Ref: https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fs_class_fs_stats

- statSync, stat - Follows symbolic link to the source file

- lstatSync, lstat - Does not follow symbolic link rather provides info about the link

- isDirectory()

- isFile()

  

  ##### Time Stats

  Ref: https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fs_stat_time_values

  There are four stats available for files

  1. Access Time (`atime`)
  2. Change Time (`ctime`)
  3. Modified Time (`mtime`)
  4. Birth Time (`birthtime`)

  > The difference between change time and modified time only applies to writes (although it can be manipulated by **fs.utime** ), whereas change time applies tor writes and any status changes such as changing permissions or ownership.




- `fs.watch` - watch a directory or file

  - it takes in three arguments

    1. filename - <string> | <Buffer> | <URL> - either a filename or a directory
    2. options - <string> | <Object>
       1. persitant
       2. recursive
       3. encoding
       4. signal
    3. listener <Function> | <Undefined>
       1. eventType (e.g. 'rename', 'change', )
       2. filename
    4. Returns <fs.FSWatcher>

    > On Windows, no events will be emitted if the watched directory is moved or renamed An `EPERM` error is reported when the watched directory is deleted




    



