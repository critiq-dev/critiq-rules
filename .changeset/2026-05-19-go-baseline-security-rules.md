---
"@critiq/rules": minor
---

Ship 6 new Go baseline security catalog rules covering listens that bind to all interfaces, imports of the `unsafe` package, `ssh.InsecureIgnoreHostKey()` host-key callbacks, deprecated `ioutil.TempFile`/`ioutil.TempDir` temporary file helpers, RSA key sizes below 2048 bits, and imports of broken or deprecated `crypto/md5`, `crypto/des`, `crypto/rc4`, and `crypto/sha1` packages.
