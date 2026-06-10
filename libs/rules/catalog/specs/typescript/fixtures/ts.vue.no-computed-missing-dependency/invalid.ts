declare const externalConfig: { value: string };

export default {
  name: 'MyComponent',
  data() {
    return {
      firstName: 'John',
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + externalConfig.value;
    },
  },
};
