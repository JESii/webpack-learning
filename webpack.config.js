const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

  // Entries must resolve to files
  const productionConfig = () => commonConfig;

  const developmentConfig = () => {
    const config = {
      devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
      },
    };
    return Object.assign(
      {},
      commonConfig,
      config
  );
};

  const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo flailing',
    }),
  ],
};
module.exports = (env) => {
  if(env === 'production') {
    return productionConfig();
  }
  return developmentConfig();
};
