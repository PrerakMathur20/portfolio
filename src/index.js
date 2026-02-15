// Cloudflare Workers entry point for static assets
// This worker serves static files from the build directory

export default {
  async fetch(request, env, ctx) {
    // Get the asset from the static assets
    const url = new URL(request.url);
    
    // Try to get the static asset
    // When using Workers with Static Assets, the ASSETS binding is automatically available
    try {
      // First, try to serve the exact path
      let response = await env.ASSETS.fetch(request);
      
      // If we get a 404 and the path doesn't have an extension, try adding .html
      if (response.status === 404 && !url.pathname.includes('.')) {
        // Try with .html extension
        const htmlRequest = new Request(
          new URL(url.pathname + '.html', url.origin),
          request
        );
        const htmlResponse = await env.ASSETS.fetch(htmlRequest);
        
        if (htmlResponse.status === 200) {
          return htmlResponse;
        }
        
        // If still 404, try index.html in that directory
        const indexRequest = new Request(
          new URL(url.pathname + '/index.html', url.origin),
          request
        );
        response = await env.ASSETS.fetch(indexRequest);
      }
      
      return response;
    } catch (e) {
      // If there's an error, return a 500
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
