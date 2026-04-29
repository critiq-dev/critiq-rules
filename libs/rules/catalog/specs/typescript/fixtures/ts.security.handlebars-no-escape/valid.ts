export function compileTemplate(templateStr: string) {
  return Handlebars.compile(templateStr, { noEscape: false });
}
