export default {
  data() {
    return { items: [] };
  },
  mounted() {
    if (process.server) {
      this.items = ['server'];
    }
  },
};
