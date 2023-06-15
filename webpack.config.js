// arquivo interpretado pelo node 
const webpack = require('webpack')

// vamos dizer se estamos no modulo desenvolvimento ou produção 
module.exports = {
    mode: 'development', 
    entry: './src/Principal.js'
}