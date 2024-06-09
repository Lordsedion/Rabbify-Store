module.exports = {
    devServer: {
        contentBase: './build',
        hot: true,
        port: 3000,
      },
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/static/build',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },

          {
            test: /\.(png|jpe?g|gif|mp3|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  };