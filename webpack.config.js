const path = require('path');
const webpack = require('webpack');

console.log('wp config is loaded');

module.exports = {
    target: 'node19.2',
    mode: process.env['NODE_ENV'] || 'development',
    cache: {
        type: 'filesystem',
    },
    entry: {
        index: './src/index.ts',
    },
    output: {
        path: path.resolve(`./dist`),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: ['node_modules', 'src'],
        alias: {},
    },

    module: {
        rules: [
            {
                test: /\.(ts|js|json)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
