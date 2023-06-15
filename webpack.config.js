// arquivo interpretado pelo node 
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// vamos dizer se estamos no modulo desenvolvimento ou produção 
module.exports = {
    mode: 'development', 
    entry: './src/Principal.js',
    output: {
        filename: 'Principal.js',
        // pasta de destino que queremos salvar 
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // nome do arquivo que sera gerado a partir da interpretação do css
            filename: "estilo.css"
        })
    ],
    // vamos cadastrar o loader 
    module: {
        rules: [{
            // responsavel por ler css
            test: /\.css$/,
            use: [
                // extrai o css para um arquivo externo
                MiniCssExtractPlugin.loader,
                // 'style-loader', // adiciona css no DOM injetando a tag style
                'css-loader'
            ]
        }]
    }
}