declare function validateTemplateMarkup(value: string): string;

export function compileTemplate(templateStr: string) {
  return Handlebars.compile(validateTemplateMarkup(templateStr), {
    noEscape: false,
  });
}
