export function loadValue(valueMap: Map<string, string>, key: string) {
  if (valueMap.has(key)) {
    return valueMap.get(key);
  }

  return undefined;
}
