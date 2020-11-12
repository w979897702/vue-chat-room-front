module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://172.16.1.44:9099/',
        changeOrigin: true, // 跨域访问设置，true代表跨域
        pathRewrite: {
          // 路径改写规则
          '^/api': '', // 以/proxy/为开头的改写为''
        },
      },
    },
  },
};
