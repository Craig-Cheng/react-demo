module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        // 其他选项
      },
    ],
    ['tailwindcss'],
    ['autoprefixer'],
    // [
    //   'postcss-px-to-viewport',
    //   {
    //     // options
    //     unitToConvert: 'px',
    //     viewportWidth: 375,
    //     unitPrecision: 5,
    //     viewportUnit: 'vw',
    //     fontViewportUnit: 'vw',
    //     minPixelValue: 1,
    //   },
    // ],
  ],
}
