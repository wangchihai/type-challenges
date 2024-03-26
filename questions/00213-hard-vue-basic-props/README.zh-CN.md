<!--info-header-start--><h1>Vue Basic Props <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/213/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

**这个挑战是从[6 - Simple Vue](//tsch.js.org/6)开始的，你应该先完成这个挑战，然后根据它修改你的代码来开始这个挑战**。

除了 Simple Vue 之外，我们现在在选项中还有一个新的 `props` 字段。这是 Vue 的 `props` 选项的简化版本。以下是一些规则。

`props` 是一个对象，其中包含每个字段作为注入到 `this` 的真实 props 的键。注入的 props 在所有上下文中都可以访问，包括 `data`、`computed` 和 `methods`。

prop 将由构造函数或具有包含构造函数的 `type` 字段的对象定义。

例如

```js
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}
```

应推断为 `type Props = { foo: boolean }`。

传递多个构造函数时，应将类型推断为联合。

```ts
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }
```

当传递空对象时，键应推断为 `any`。

对于更具体的案例，请查看测试案例部分。

> 本次挑战不考虑 Vue 中的 `required`、`default` 和数组 props。

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/213/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/213/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BB%E7%AE%80%E5%8D%95%E7%9A%84%20Vue%20%E7%B1%BB%E5%9E%8B-de3d37" alt="6・简单的 Vue 类型"/></a> <!--info-footer-end-->