export async function bad() {
  await fetch("/api/config");
  await fetch("/api/config");
}
