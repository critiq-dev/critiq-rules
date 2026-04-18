const pool = {
  query: async (_sql: string) => [],
};

export async function findUsersByEmail(email: string) {
  return pool.query(`SELECT id, email FROM users WHERE email = '${email}'`);
}

