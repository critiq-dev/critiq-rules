// this at module level
const globalThis = this;

// this inside a standalone function
export function foo() {
  return this;
}

// this inside an arrow function at module level
export const fn = () => {
  this.x = 1;
};
