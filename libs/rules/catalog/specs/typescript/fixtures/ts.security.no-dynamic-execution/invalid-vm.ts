import vm from 'node:vm';

export function evaluateSnippet(source: string) {
  return vm.runInNewContext(source, {});
}
