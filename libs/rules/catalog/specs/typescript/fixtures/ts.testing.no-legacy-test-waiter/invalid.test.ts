import { wait, waitForElement, waitForDomChange } from '@testing-library/react';

test('legacy waiters', async () => {
  await wait(() => expect(1).toBe(1));
  await waitForElement(() => document.querySelector('.foo'));
  await waitForDomChange();
});
