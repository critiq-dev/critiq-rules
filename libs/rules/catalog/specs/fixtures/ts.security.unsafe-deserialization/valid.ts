export function parsePayload() {
  const raw = '{"ok":true}';

  return JSON.parse(raw);
}
