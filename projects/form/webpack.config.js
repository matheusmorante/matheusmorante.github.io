const path = require('path');

module.exports = {
  entry: './src/js/main.js', // O ponto de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'assets', 'js'), // O diretório de saída onde o Webpack irá gerar seus arquivos
    filename: 'bundle.js' // O nome do arquivo de saída
  },
  mode: 'development', // Modo de construção, pode ser 'development' ou 'production'
  module: {
    rules: [
      {
        test: /\.js$/, // Regra para arquivos JavaScript
        exclude: /node_modules/, // Exclui a pasta node_modules da transpilação
        use: {
          loader: 'babel-loader', // Usa o Babel para transpilar o JavaScript
          options: {
            presets: ['@babel/preset-env'] // Conjunto de configurações do Babel para lidar com JavaScript moderno
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },
    ]
  },
  devtool: 'source-map',
};