const path = require("path");
const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./",
        aliases: {
          "@": "./src",
        },
        // BUG: https://github.com/risenforces/craco-alias/issues/17
        // source: "tsconfig",
        // baseUrl: "./src",
        // tsConfigPath: "./tsconfig.extend.json"
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
