const { createProxyMiddleware } = require("http-proxy-middleware");


const Proxy = (app) => {
    app.use(
        '/graphql',
        createProxyMiddleware({
          target: 'https://api.sorare.com',
          changeOrigin: true,
        })
      );
}

module.exports = Proxy
