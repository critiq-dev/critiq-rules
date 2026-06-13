it('measures elapsed time with performance.now', () => {
  const start = performance.now();
  doWork();
  const elapsed = performance.now() - start;
  expect(elapsed).toBeLessThan(1000);
});

it('uses Date.now for timing', () => {
  const start = Date.now();
  doWork();
  const elapsed = Date.now() - start;
  expect(elapsed).toBeLessThan(500);
});

it('uses micro-delay for event loop yielding', async () => {
  const result = await new Promise((resolve) => setTimeout(resolve, 5));
  expect(result).toBeUndefined();
});