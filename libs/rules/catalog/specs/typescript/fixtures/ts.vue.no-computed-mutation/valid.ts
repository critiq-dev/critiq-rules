export default {
  name: 'MyComponent',
  data() {
    return { firstName: 'John', lastName: 'Doe' };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
