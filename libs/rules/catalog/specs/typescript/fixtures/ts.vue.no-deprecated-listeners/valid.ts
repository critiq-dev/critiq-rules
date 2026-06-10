export default {
  name: 'MyComponent',
  inheritAttrs: true,
  methods: {
    getAttrs() {
      return this.$attrs;
    },
  },
};
