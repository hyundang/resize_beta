const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

let apiDomain;
if (process.env.NODE_ENV === "development") {
  apiDomain = process.env.DEV_API_URL;
} else if (process.env.NODE_ENV === "production") {
  apiDomain = process.env.API_URL;
}

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
        API_DOMAIN: JSON.stringify(apiDomain),
      }),
      new webpack.EnvironmentPlugin(["NODE_ENV"]),
      new Dotenv({ silent: true })
    );

    return config;
  },
};
