import { test } from '@playwright/test';

test.skip(browserName === 'firefox', 'not implemented yet for Firefox', () => {
  expect(1).toBe(1);
});
