import https from 'node:https';
import tls from 'node:tls';

new https.Agent({ minVersion: 'TLSv1.2' });
tls.createSecureContext({ secureProtocol: 'TLSv1_2_method' });
