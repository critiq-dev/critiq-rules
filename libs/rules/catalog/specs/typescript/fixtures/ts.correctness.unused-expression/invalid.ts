export function test() {
  // pure logical expression as statement
  a && b;

  // literal as statement (not a directive prologue — after other statements)
  'hello';

  // identifier reference as statement
  myVar;

  // ternary as statement
  condition ? x : y;

  // sequence of pure expressions
  a, b;
}
