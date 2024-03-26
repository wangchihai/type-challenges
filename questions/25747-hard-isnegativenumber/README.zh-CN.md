<!--info-header-start--><h1>IsNegativeNumber <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23number-999" alt="#number"/> <img src="https://img.shields.io/badge/-%23template%20literal-999" alt="#template literal"/></h1><blockquote><p>by andrew jarrett <a href="https://github.com/ahrjarrett" target="_blank">@ahrjarrett</a></p></blockquote><p><a href="https://tsch.js.org/25747/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

有时，在使用数字文字时，我们需要排除（或强制）提供的数字是正整数。

为此，我们首先需要一种方法来判断数字是否为负数。

编写一个类型级函数 `IsNegativeNumber` ，它接受数字 `N` 并返回：

- `true` 如果 `N` 为负数
- `false` 如果 `N` 为正
- `false` 如果 `N` 是 `0`，
- `never` 如果 `N` 是 `number`
- `never` 如果 `N` 是一个并集

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/25747/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/25747/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->