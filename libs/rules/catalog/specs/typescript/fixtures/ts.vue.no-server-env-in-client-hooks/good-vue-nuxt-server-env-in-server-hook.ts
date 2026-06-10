export default {
  asyncData({ params }) {
    if (process.server) {
      return { serverData: params.id };
    }
    return { serverData: null };
  },
};
