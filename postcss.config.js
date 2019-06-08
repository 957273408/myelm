module.exports = {
  plugins: {
    "postcss-cssnext": {
      'overrideBrowserslist.': [
        'last 10 Chrome versions',
        'last 5 Firefox versions',
        'Safari >= 6',
        'ie > 8',
        "android >= 4.0"
      ]
    },
    'postcss-px2rem': {
      remUnit: '20' //设计尺寸的1/10
    }
  }
}
