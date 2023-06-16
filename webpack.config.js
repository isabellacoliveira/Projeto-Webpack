// arquivo interpretado pelo node 
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// se estiver em modulo de desenvolvimento 
const modoDev = process.env.NODE_ENV !== 'production'
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path');

// vamos dizer se estamos no modulo desenvolvimento ou produção 
module.exports = {
    mode: modoDev ? 'development' : 'production', 
    entry: './src/Principal.js',
    output: {
        filename: 'Principal.js',
        // pasta de destino que queremos salvar 
        path: __dirname + '/public'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            // nome do arquivo que sera gerado a partir da interpretação do css
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    optimization: {
        minimizer: [
            // new UglifyJsPlugin({
            //     cache: true, 
            //     parallel: true
            // }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    // vamos cadastrar o loader 
    module: {
        rules: [{
            // responsavel por ler css
            test: /\.s?[ac]ss$/,
            use: [
                // extrai o css para um arquivo externo
                MiniCssExtractPlugin.loader,
                // 'style-loader', // adiciona css no DOM injetando a tag style
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          }
          
    ]
    }
}
