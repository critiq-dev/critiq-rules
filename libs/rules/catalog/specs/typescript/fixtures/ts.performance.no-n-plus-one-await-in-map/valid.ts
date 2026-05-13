export async function good(ids: string[]) {
  return await fetch(`/users?ids=${ids.join(",")}`);
}
