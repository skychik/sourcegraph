// @ts-check

/** @type {import('@babel/core').TransformOptions} */
const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // Must match "browserslist" from web/package.json
        targets: ['last 1 version', '>1%', 'not dead', 'not <0.25%', 'last 1 Chrome versions', 'not IE > 0'],
        useBuiltIns: 'entry',
      },
    ],
    ,
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', 'babel-plugin-lodash'],
}

module.exports = config