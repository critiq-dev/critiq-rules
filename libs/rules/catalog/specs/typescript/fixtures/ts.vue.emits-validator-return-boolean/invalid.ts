export default {
  name: 'MyComponent',
  emits: {
    submit: (payload) => {
      const valid = payload && payload.length > 0;
    },
  },
};
