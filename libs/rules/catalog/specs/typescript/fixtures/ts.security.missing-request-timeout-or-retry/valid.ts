export async function loadUsers() {
  const controller = new AbortController();

  return await fetch('/users', { signal: controller.signal });
}
