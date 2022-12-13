const { devDependencies } = require('./package.json');

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
