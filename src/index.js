// Cloudflare Workers entry point for static assets
// This is a minimal worker that serves the static files from the build directory

export default {
  async fetch(request, env) {
    // The assets are automatically handled by Cloudflare Workers
    // This is just a placeholder to satisfy the worker requirement
    return new Response('Static assets are served automatically', {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
    });
  },
};
