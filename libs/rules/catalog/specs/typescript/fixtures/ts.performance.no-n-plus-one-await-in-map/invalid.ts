export async function bad(ids: string[]) {
  return await Promise.all(ids.map(async (id) => await fetch(`/u/${id}`)));
}
