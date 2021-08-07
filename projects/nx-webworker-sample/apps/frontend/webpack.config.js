const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const WorkerPlugin = require('worker-plugin');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    node: {
      Buffer: true,
    },
    plugins: [new WorkerPlugin(), ...config.plugins],
  };
};
