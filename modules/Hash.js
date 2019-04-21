class Hash{
  constructor() {
    this.sha256 = require('sha256');
    this.base64usrl = require('base64url');
  }
  createHash(string) {
    let hash = this.sha256(string);
    return this.toBase64url(hash);
  }
  toBase64url(string) {
    return this.base64usrl(string);
  }
  fromBase64url(string) {
    return this.base64usrl.decode(string);
  }
}