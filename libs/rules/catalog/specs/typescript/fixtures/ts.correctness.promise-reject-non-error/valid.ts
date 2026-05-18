export async function fail() {
  await Promise.reject(new Error('boom'));
}
