import { waitFor } from '@testing-library/react';

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('modern waiters', async () => {
  await waitFor(() => expect(1).toBe(1));
  await wait(100);
});
