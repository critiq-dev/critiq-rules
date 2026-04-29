import https from 'node:https';

new https.Agent({
  checkServerIdentity: () => undefined,
});
