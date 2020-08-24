const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // debug: true,
        // source: "options",
        // baseUrl: "./src",
        // aliases: {
        //   '@/': './src/',
        //   '@/*': './src/*',
        //   '@': './src',
        // },
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        // baseUrl: "./src",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        // tsConfigPath: "./tsconfig.extend.json"
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {'@primary-color': '#1DA57A'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
