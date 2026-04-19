let retained: ArrayBuffer;

export async function cacheDownload(response: { arrayBuffer(): Promise<ArrayBuffer> }) {
  retained = await response.arrayBuffer();
  return retained.byteLength;
}
