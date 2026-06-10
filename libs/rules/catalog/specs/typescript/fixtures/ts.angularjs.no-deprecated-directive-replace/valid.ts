export const config = {
  replace: true,
  timeout: 5000,
};

export function updateConfig(opts: { replace: boolean }) {
  if (opts.replace) {
    console.log('replacing');
  }
}
