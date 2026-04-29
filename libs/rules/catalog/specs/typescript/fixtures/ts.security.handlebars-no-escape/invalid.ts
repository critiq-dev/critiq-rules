const handlebars = Handlebars.create();

export function compileTemplate(templateStr: string) {
  return handlebars.compile(templateStr, { noEscape: true });
}
