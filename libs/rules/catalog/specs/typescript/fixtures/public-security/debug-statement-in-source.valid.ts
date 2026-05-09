function handler() {
  if (process.env.NODE_ENV !== 'production') {
    console.trace('dev checkpoint');
  }

  import.meta.env.DEV && console.trace('dev only');
  __DEV__ && console.trace('rn only');
}
