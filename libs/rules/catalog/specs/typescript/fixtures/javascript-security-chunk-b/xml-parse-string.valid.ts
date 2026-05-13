declare function parseString(
  xml: string,
  callback: (err: Error | null, result: unknown) => void,
): void;

export function parseLiteral(): void {
  parseString('<root/>', () => {});
}
