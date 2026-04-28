export function storeValue(
  valueMap: Record<string, string>,
  key: string,
  value: string,
) {
  valueMap[key] = value;
  return valueMap;
}
