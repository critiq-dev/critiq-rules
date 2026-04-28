const controller = {
  signal: {},
};

export async function fetchUsers(): Promise<Response> {
  return fetch('/users', { signal: controller.signal });
}
