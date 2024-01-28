# Streams

The node core module exposes six constructors for creating streams

1. Stream
2. Readable
3. Writeable
4. Duplex
5. Transform
6. PassThrough

- Stream constructor inherits from the EventEmitter constructor from *Events* module

- Stream constructor implements the **pipe** method

  

  #### Main events emitted by Stream are

  1. data
  2. end
  3. finish
  4. close
  5. error

  

  #### There are two stream modes

  1. Binary
  2. Object

  > By default object mode is false.

  

- Binary mode streams only read or write buffer instances

- The default `highWaterMark` for a readable stream is **16kb** 

- When no more data is there for a readable stream to read, an **end** event is emitted

- Readable stream emit *buffers* by default

  

## Readable Stream



## Writable Stream

```javascript
const {Writable} = require('node:stream');
const crateWritableStream = (data) => {
	return new Writable({
		write(chunk, enc, next) {
            data.push(chunk);
            next();
        }
	})
}

const data = [];
const writable = createWriteStream(data);
writable.on('finish', () => console.log('finished writing ', data));
writable.write('A\n');
writable.write('B');
writable.end('nothign more to write')
```



- `write()` function is used to write data to a writable stream and can be calle dmultiple times

- `end()` function will write a final payload to the stream before ending it

- When the writable stream is ended, **finish** event is emitted

- By default, `objectMode` is `false`, so each string written to the writable stream instance is converted to Buffer before it becomes the chunk argument. The can be changed by setting `decodeStrings` options to `false`

  ``` javascript
  const createWriteStream = (data) => {
    return new Writable({
      decodeStrings: false,
      write (chunk, enc, next) {
        data.push(chunk)
        next()
      }
    })
  }
  const data = []
  const writable = createWriteStream(data)
  writable.on('finish', () => { console.log('finished writing', data) })
  writable.write('A\n')
  writable.write('B\n')
  writable.write('C\n')
  writable.end('nothing more to write')
  ```

  This will allow strings or Buffers to be written to the stream, trying to pass any other JavaScript value will result in error

  

- If we want to support any other JS value such as number, we can instead set `objectMode: true` to create an object mode writable stream

## Duplex Streams

- Duplex Stream constructor's prototype inherits from the `Readable` constructor but it also mixes in functionality from the Writable constructor
- 

## Transform Stream

- The transform constructor inherits from the Duplex Constructor

___

### Determining the End-of-Stream

End of stream can be communicated by the following events

- close
- error
- finish
- end

Instead of adding an event listener for these events we can utilize the `finished` function from stream

Syntax: ` finsihed(stream[,options])`

options {Object}

	- error
	- readable
	- writable
	- signal

```javascript
finished(stream, (err) => {})
```

