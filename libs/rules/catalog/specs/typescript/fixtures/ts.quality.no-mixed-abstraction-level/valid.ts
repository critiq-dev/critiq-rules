export async function loadOrder() {
  return db.query('select 1');
}

export function validateOrder() {
  return true;
}
