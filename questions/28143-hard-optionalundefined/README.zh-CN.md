<!--info-header-start--><h1>OptionalUndefined <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> </h1><blockquote><p>by Jesus The Hun <a href="https://github.com/JesusTheHun" target="_blank">@JesusTheHun</a></p></blockquote><p><a href="https://tsch.js.org/28143/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

实现 util 类型 `OptionalUndefined<T, Props>` ，将 `T` 的所有可以是 `undefined` 的属性转换为可选属性。此外，可以传递第二个可选通用 `Props` 来限制可以更改的属性。

```ts
OptionalUndefined<{ value: string | undefined, description: string }>
// { value?: string | undefined; description: string }

OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
// { value: string | undefined; description?: string | undefined, author?: string | undefined }
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/28143/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/28143/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->