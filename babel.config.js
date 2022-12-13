const { devDependencies } = require('./package.json');

console.log('babel config is loaded');

const config = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'commonjs',
                useBuiltIns: 'entry',
                targets: { node: 'current' },
                corejs: {
                    version: devDependencies['core-js'],
                },
            },
        ],
        '@babel/typescript',
    ],
    plugins: [],
};

module.exports = config;
