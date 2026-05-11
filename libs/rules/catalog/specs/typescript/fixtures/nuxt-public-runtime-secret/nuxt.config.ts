export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    },
  },
});
