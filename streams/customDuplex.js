import { Duplex } from "stream";

class CustomDuplex extends Duplex {
  constructor() {
    super();
  }

  _read() {}

  _write() {}

  _final() {}
}

const duplexStream = new CustomDuplex();
console.log(duplexStream);