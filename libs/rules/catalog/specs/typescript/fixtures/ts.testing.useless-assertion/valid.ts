describe('counter', () => {
  it('increments', () => {
    const result = increment(1);
    expect(result).toBe(2);
  });

  it('is null', () => {
    const result = maybeNull();
    expect(result).toBeNull();
  });
});
