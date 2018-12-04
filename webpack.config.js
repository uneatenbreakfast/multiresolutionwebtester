const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const flexbugsFixes = require("postcss-flexbugs-fixes");
const postcssObjectFit = require("postcss-object-fit-images");
const postcssDeduplicate = require("postcss-discard-duplicates");

const stylesOut = "dist";
const extractSass = new ExtractTextPlugin({
  filename: `${stylesOut}/[name].css`,
  disable: false
});

const postcssPlugins = function() {
  const autopre = autoprefixer({
    remove: true
  });

  return [
    postcssUrl({
      url: options => {
        // Only convert root relative URLs, which CSS-Loader won't process into require().
        if (!options.url.startsWith("/") || options.url.startsWith("//")) {
          return options.url;
        }

        // Join together base-href, deploy-url and the original URL.
        // Also dedupe multiple slashes into single ones.
        return options.url.replace(/\/\/+/g, "/");
      }
    }),
    autopre,
    flexbugsFixes,
    postcssObjectFit,
    postcssDeduplicate
  ];
};

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: "vue-style-loader!css-loader!sass-loader",
            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // options: {
        //   appendTsSuffixTo: [/\.vue$/],
        // }
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },

      {
        test: /\.css$/,
        use: { loader: "css-loader", options: { minimize: false, url: false } }
      },

      {
        test: /\.scss$/,
        use: [
          { loader: "css-loader", options: { minimize: false, url: false } },
          "sass-loader"
        ]
      }

      /*{
        enforce: "pre",
        test: /\.scss$/,
        loader: "import-glob-loader"
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: { sourceMap: true, importLoaders: 1 }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                ident: "postcss",
                plugins: postcssPlugins
              }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true, outputStyle: "expanded" }
            }
          ],
          fallback: "style-loader"
        })
      }*/
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json", ".css", ".scss"],
    modules: ["node_modules"],
    symlinks: true,
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
