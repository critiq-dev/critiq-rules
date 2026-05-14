import Store from 'electron-store';

const secureStore = new Store();
secureStore.set('accessToken', 'secret-value');
