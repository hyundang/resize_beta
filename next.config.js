const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack(config, { dev, webpack }) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./.next/icons/",
          name: "[name].[ext]?[hash]",
          limit: 5000,
        },
      }
    );

    config.plugins.push(
      new webpack.DefinePlugin({
        API_DOMAIN:
          process.env.NODE_ENV === "production"
            ? JSON.stringify(process.env.API_URL)
            : JSON.stringify(process.env.DEV_API_URL),
      }),
      new webpack.EnvironmentPlugin(["NODE_ENV"]),
      new Dotenv({ silent: true })
    );

    return config;
  },

  optimization: {
    minimizer:
      process.env.NODE_ENV === "production"
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ]
        : [],
  },
};
