'use strict';

export function test() {
  // function call
  foo();

  // constructor call
  new Foo();

  // logical expression with side-effectful right side
  a && b();

  // assignment
  let x;
  x = 5;

  // update expression
  let y = 0;
  y++;

  // await expression
  async function inner() {
    await fetch('/api');
  }

  // delete expression
  const obj = { prop: 1 };
  delete obj.prop;
}
