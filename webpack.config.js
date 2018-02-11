const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', //相对路径
  output: {
    path: path.resolve(__dirname, 'build'), //打包文件的输出路径
    filename: 'bundle.js' //打包文件名
  },
  module: {
    loaders: [ //配置加载器
      {
        test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
        loader: 'babel-loader', //使用的加载器名称
        query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer'), //自动添加浏览器前缀
                //require('precss'), //如果要使用less就不用这个插件了，precss语法类似于sass
                require('postcss-flexbugs-fixes') //解决flex布局的一些bug
              ]
            }

          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000, //该大小以下图片会转成base64
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //指定模板路径
      filename: 'index.html', //指定文件名
    })
  ]
}