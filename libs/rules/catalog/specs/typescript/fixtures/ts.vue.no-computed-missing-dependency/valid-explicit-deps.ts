declare const externalConfig: { value: string };

export default {
  name: 'MyComponent',
  data() {
    return {
      firstName: 'John',
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + externalConfig.value;
      },
      dependencies: ['externalConfig'],
    },
  },
};
