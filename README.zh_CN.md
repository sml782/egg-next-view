# egg-next-view

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-next-view.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-next-view
[travis-image]: https://img.shields.io/travis/eggjs/egg-next-view.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-next-view
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-next-view.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-next-view?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-next-view.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-next-view
[snyk-image]: https://snyk.io/test/npm/egg-next-view/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-next-view
[download-image]: https://img.shields.io/npm/dm/egg-next-view.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-next-view

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-next-view 版本 | egg 2.x
--- | ---
2.x | 😁
1.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.nextView = {
  enable: true,
  package: 'egg-next-view',
};
```

## 使用场景

- Why and What: 由于目前 `next.js` 没有很好的和 `egg.js` 结合。
- How: 开启本插件使得可以直接渲染。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
