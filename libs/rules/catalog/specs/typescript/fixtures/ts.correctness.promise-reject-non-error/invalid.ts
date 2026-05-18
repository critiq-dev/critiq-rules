export async function fail() {
  await Promise.reject('boom');
}
