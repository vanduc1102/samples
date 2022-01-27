const CracoLessPlugin = require("craco-less");
const WorkerPlugin = require("worker-plugin");

module.exports = {
  webpack: {
    plugins: [new WorkerPlugin()],
  },
  plugins: [
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
