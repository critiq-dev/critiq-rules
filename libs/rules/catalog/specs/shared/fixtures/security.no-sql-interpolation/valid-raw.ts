const knex = {
  raw: async (_sql: string, _params: string[]) => [],
};

export async function loadUser(id: string) {
  return knex.raw('SELECT id, email FROM users WHERE id = ?', [id]);
}
