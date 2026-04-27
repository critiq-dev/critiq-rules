window.addEventListener('message', (event) => {
  doSomething(event.data);
});

window.postMessage({ token }, '*');
const html = `<h1>${req.query.title}</h1>`;
const sanitized = input.replaceAll('<', '&lt;');
const socket = new WebSocket('ws://example.com/socket');
