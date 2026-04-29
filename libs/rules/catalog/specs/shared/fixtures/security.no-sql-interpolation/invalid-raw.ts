const knex = {
  raw: async (_sql: string) => [],
};

interface RequestLike {
  query: {
    id?: string;
  };
}

export async function loadUser(req: RequestLike) {
  const statement =
    "SELECT id, email FROM users WHERE id = '" + (req.query.id ?? '') + "'";

  return knex.raw(statement);
}
