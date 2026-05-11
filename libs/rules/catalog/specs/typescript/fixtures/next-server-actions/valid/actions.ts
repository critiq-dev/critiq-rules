'use server';

import { auth } from '@/auth';
import { db } from '@/db';

export async function deleteAccount(formData: FormData) {
  const user = await auth();
  if (!user) {
    throw new Error('Unauthorized');
  }

  const accountId = String(formData.get('accountId'));
  await db.account.delete({ where: { id: accountId, ownerId: user.id } });
}
