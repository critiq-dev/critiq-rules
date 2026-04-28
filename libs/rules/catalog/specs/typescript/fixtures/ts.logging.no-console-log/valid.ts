const logger = {
  info: (_value: string) => undefined,
};

export function logValue(value: string) {
  logger.info(value);
}
