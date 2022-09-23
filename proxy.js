const { createProxyMiddleware } = require("http-proxy-middleware");


const Proxy = (app) => {
    app.use(
        '/api',
        () => console.log("TOME"),
        createProxyMiddleware({
          target: 'https://api.sorare.com/graphql',
          changeOrigin: true,
        })
      );
}

module.exports = Proxy
