export default {
  name: 'MyComponent',
  data() {
    return {};
  },
  methods: {
    render() {
      return this.$slots.default({ data: 'test' });
    },
  },
};
