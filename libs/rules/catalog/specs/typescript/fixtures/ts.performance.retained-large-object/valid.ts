export async function cacheDownload(response: { arrayBuffer(): Promise<ArrayBuffer> }) {
  const retained = await response.arrayBuffer();
  return retained.byteLength;
}
