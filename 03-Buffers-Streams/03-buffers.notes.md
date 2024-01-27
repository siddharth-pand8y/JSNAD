# Buffers

- ArrayBuffer instance can be accessed with a Float64Array where set of 8 bytes is interpreted as a 64-bit floating point number (Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

- `Buffer.slice` method will return a buffer instance that references the binary data in the original buffer on which slice was called on 

- `Buffer.alloc` - Allocate a buffer a certain amount of bytes

- `Buffer.allocUnsafe` - return a buffer of garbage bytes ( Security risk but performance advantages )

  > `new Buffer` is deprecated because it used to have the `Buffer.allocUnsafe` behavior

- `Buffer.from` - when a string is passed, characters in the string are converted to byte value

- Default encoding that `Buffer.from` uses is **UTF-8** 

- UTF-8 encoding may have up to four bytes per character so it isnt safe to assume the string length will always match the converted buffer size (Ref: https://mathiasbynens.be/notes/javascript-unicode)

- `.toString()` can be used to convert buffer to a string value

- Use **string_decoder** should be used when we want split characters across a byte boundary

  ```javascript
  const {StringDecoder} = require('string_decoder');
  const frag1=Buffer.from ('f09f', 'hex');
  const frag2 = Buffer.from('9180', 'hex');
  console.log(frag1.toString());
  console.log(frag2.toString());
  const decoder = new StringDecoder();
  console.log(decoder.write(frag1));
  console.log(decoder.write(frag2));
  ```

  Ref: https://nodejs.org/dist/latest-v20.x/docs/api/string_decoder.html

- Buffer has a predefined `.toString()` methods & alternatively Buffer can be represented in JS Object via `.toJSON`

  ``` 
  const buf = Buffer.from('hello');
  const stringify = JSON.stringify(buf);
  const parsed = JSON.parse(stringify);
  console.log(parsed);
  ```

  