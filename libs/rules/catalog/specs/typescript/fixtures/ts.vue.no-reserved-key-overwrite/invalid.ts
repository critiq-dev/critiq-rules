export default {
  name: 'MyComponent',
  data() {
    return { count: 0 };
  },
  methods: {
    init() {
      this.$el = document.querySelector('#app');
    },
  },
};
