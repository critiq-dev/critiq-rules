export default {
  name: 'MyComponent',
  data() {
    return {};
  },
  methods: {
    render() {
      const slot = this.$scopedSlots.default;
      return slot({ data: 'test' });
    },
  },
};
