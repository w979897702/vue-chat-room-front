module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090/',
        changeOrigin: true, // 跨域访问设置，true代表跨域
        pathRewrite: {
          // 路径改写规则
          '^/api': '', // 以/proxy/为开头的改写为''
        },
      },
    },
  },
};
