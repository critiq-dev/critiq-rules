import https from 'node:https';
import tls from 'node:tls';

new https.Agent({ minVersion: 'TLSv1.1' });
tls.createSecureContext({ secureProtocol: 'TLSv1_method' });
