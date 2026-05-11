'use server';

import { db } from '@/db';

export async function deleteAccount(formData: FormData) {
  const accountId = String(formData.get('accountId'));
  await db.account.delete({ where: { id: accountId } });
}
