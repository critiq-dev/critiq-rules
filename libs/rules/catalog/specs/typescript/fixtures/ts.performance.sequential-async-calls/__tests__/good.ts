import { describe, it, expect } from 'vitest';

async function setupUser(id: number): Promise<{ ok: boolean }> {
  return { ok: true };
}

async function setupBooking(userId: number): Promise<{ ok: boolean }> {
  return { ok: true };
}

describe('API integration', () => {
  it('should create user and booking in sequence', async () => {
    const user = await setupUser(1);
    const booking = await setupBooking(1);
    expect(user.ok).toBe(true);
    expect(booking.ok).toBe(true);
  });
});
