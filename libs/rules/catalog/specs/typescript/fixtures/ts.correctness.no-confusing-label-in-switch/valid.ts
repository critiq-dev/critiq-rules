export function process(value: string): void {
  myLabel: {
    console.log(value);
  }
}

export function handle(input: string): void {
  switch (input) {
    case 'a':
      console.log('a');
      break;
    default:
      break;
  }
}
