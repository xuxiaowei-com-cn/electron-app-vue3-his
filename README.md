# electron-app-vue3-his
一个基于 Electron、Vue 3 的 HIS 项目

## 创建项目
- [Electron Forge Webpack](https://www.electronforge.io/templates/webpack-template)
- [electron](https://developer.aliyun.com/mirror/npm/package/electron)
~~~
npm i -g create-electron-app
npx create-electron-app electron-app-vue3-his --template=webpack
~~~

## vue
- [vue cli](https://cli.vuejs.org/zh/)
- [vue-loader](https://vue-loader.vuejs.org/guide/#manual-setup)
- [copy-webpack-plugin](https://developer.aliyun.com/mirror/npm/package/copy-webpack-plugin)
~~~
npm i vue
npm i -D vue-loader
npm i -D vue-template-compiler
npm i -D copy-webpack-plugin
npm i -D @vue/compiler-sfc
~~~

## eslint
- [eslint-config-airbnb](https://developer.aliyun.com/mirror/npm/package/eslint-config-airbnb)
- [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)
~~~
npm i -D eslint
npm i -D eslint-config-airbnb
npm i -D eslint-plugin-jsx-a11y
npm i -D eslint-plugin-react
npm i -D eslint-plugin-import
~~~
