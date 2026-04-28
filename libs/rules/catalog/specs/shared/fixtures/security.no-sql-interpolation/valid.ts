const pool = {
  query: async (_sql: string, _params: string[]) => [],
};

export async function findUsersByEmail(email: string) {
  return pool.query('SELECT id, email FROM users WHERE email = $1', [email]);
}

