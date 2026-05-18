export function legacy() {
  return arguments.callee;
}

export function other() {
  return arguments.caller;
}
