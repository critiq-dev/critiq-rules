export async function good() {
  const config = await fetch("/api/config");
  return config;
}
