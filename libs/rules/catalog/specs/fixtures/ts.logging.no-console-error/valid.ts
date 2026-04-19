const logger = {
  error: (_value: string) => undefined,
};

export function reportFailure(error: Error) {
  logger.error(error.message);
}
