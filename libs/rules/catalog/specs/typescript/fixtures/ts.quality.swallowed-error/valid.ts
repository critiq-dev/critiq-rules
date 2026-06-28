// Pattern 1: Recognised error sink via static set membership.
export async function recognisedSink(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    logger.error("work failed", error);
  }
}

// Pattern 2: Error forwarded to a delegated handler function.
export async function delegatedHandler(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    handleError(error);
  }
}

// Pattern 3: Logger using .log() method (expanded logger detection).
export async function loggerLogMethod(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    serviceLogger.log("work failed", error);
  }
}

// Pattern 4: Empty-array return fallback (expanded fallback detection).
export async function emptyArrayFallback(): Promise<string[]> {
  try {
    return await fetchItems();
  } catch {
    return [];
  }
}

// Pattern 5: Error forwarded as a throw (existing pattern, still valid).
export async function rethrowError(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    throw error;
  }
}

// Pattern 6: Return-null fallback (existing pattern, still valid).
export async function nullFallback(): Promise<string | null> {
  try {
    return await fetchData();
  } catch {
    return null;
  }
}

declare function performWork(): Promise<void>;
declare function handleError(err: unknown): void;

declare const logger: { error(msg: string, err: unknown): void };
declare const serviceLogger: { log(msg: string, err: unknown): void };

declare function fetchItems(): Promise<string[]>;
declare function fetchData(): Promise<string>;
