export async function loadUsers() {
  return await fetch('/users');
}
