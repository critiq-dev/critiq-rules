export function negate(values: readonly number[]): number[] {
  return values.map((v) => (v =- v, v));
}
