export default {
  name: 'MyComponent',
  emits: {
    submit: (payload) => {
      return payload && payload.length > 0 ? true : false;
    },
  },
};
