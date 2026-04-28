window.addEventListener('message', (event) => {
  if (event.origin !== 'https://app.example.com') {
    return;
  }

  doSomething(event.data);
});

window.postMessage({ ok: true }, 'https://app.example.com');
const html = `<h1>${safeTitle}</h1>`;
const sanitized = DOMPurify.sanitize(input);
const socket = new WebSocket('wss://example.com/socket');

