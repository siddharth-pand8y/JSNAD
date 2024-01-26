function bufSlice() {
  const buf1 = Buffer.alloc(10);
  const buf2 = buf1.slice(2, 3);
  buf2[0] = 200;

  const buf3 = new Uint8Array(10);
  const buf4 = buf3.slice(2, 3);

  buf4[0] = 200;

  console.log({
    buf1,
    buf2,
    buf3,
    buf4,
  });
}

function bufEncoding() {
  const buf1 = Buffer.from("👀");
  const buf2 = Buffer.from("👀", "utf16le");
  const buf3 = Buffer.from("8J+RgA==", "base64");
  console.log({
    buf1,
    buf2,
    buf3,
    length: {
      buf1: buf1.length,
      buf2: buf2.length,
      buf3: buf3.length,
    },
  });
}

function bufDecoder() {
  const { StringDecoder } = require("string_decoder");
  const frag1 = Buffer.from("f09f", "hex");
  const frag2 = Buffer.from("9180", "hex");
  console.log({ frag1: frag1.toString() });
  console.log({ frag2: frag2.toString() });
  const decoder = new StringDecoder();
  console.log({ frag1: decoder.write(frag1) });
  console.log({ frag2: decoder.write(frag2) });
}

module.exports = {
  bufDecoder,
  bufEncoding,
  bufSlice,
};
