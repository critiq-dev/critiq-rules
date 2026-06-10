// this inside a class method
export class Foo {
  value = 1;
  bar() {
    return this.value;
  }
}

// this inside a class field initializer
export class Bar {
  baz = this;

  static create() {
    return new Bar();
  }
}

// this inside an object literal method
export const obj = {
  name: 'test',
  greet() {
    return this.name;
  },
};
