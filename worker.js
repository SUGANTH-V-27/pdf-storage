export default {
  async fetch(request, env, ctx) {
    // Let Cloudflare handle static assets automatically
    return env.ASSETS.fetch(request);
  }
};
