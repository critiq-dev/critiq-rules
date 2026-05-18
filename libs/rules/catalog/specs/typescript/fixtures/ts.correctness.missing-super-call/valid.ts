class Base {
  value = 1;
}

class Child extends Base {
  constructor() {
    super();
    this.value = 2;
  }
}

export { Child };
