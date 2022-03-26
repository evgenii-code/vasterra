const { defineConfig } = require('@vue/cli-service');

const { REPO_NAME = '/' } = process.env;

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? REPO_NAME : '/',
  transpileDependencies: true,
});
