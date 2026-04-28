export function loadValue(valueMap: Map<string, string>, key: string) {
  return valueMap.has(key) && valueMap.get(key);
}
