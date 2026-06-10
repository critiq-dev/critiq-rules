export default {
  name: 'MyComponent',
  data() {
    return {};
  },
  methods: {
    render() {
      const content = this.$slots.default;
      return content;
    },
  },
};
