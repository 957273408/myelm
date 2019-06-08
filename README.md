# myelm
vue +mint ui 仿elm项目

# mintui 适配rem方案
由于mintui属于第三方ui库使用的还是px,无法使用rem适配
解决方案 引入postCss 处理生成后的css将px替换成rem,顺便处理不同游览器css兼容问题
```
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

```