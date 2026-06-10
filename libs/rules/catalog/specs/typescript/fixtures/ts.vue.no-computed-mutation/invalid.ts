export default {
  name: 'MyComponent',
  data() {
    return { firstName: '', lastName: '' };
  },
  computed: {
    fullName() {
      this.firstName = 'John';
      return this.firstName + ' ' + this.lastName;
    },
  },
};
