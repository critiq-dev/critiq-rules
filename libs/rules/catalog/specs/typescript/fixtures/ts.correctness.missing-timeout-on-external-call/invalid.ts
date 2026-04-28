export async function fetchUsers(): Promise<Response> {
  return fetch('/users');
}
