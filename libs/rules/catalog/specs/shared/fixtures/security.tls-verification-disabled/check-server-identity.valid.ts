import https from 'node:https';
import tls from 'node:tls';

new https.Agent({
  checkServerIdentity: tls.checkServerIdentity,
});
