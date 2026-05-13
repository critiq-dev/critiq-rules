export async function handleCheckout() {
  await fetch('/api/orders');
  await db.query('select 1');
  validateCheckout();
  return authorizePayment();
}
