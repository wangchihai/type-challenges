<!--info-header-start--><h1>Permutations of Tuple <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23conditional%20type-999" alt="#conditional type"/> <img src="https://img.shields.io/badge/-%23recursion-999" alt="#recursion"/></h1><blockquote><p>by null <a href="https://github.com/gaac510" target="_blank">@gaac510</a></p></blockquote><p><a href="https://tsch.js.org/21220/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

给定一个泛型元组类型 `T extends unknown[]`，编写一个将 `T` 的所有排列生成为并集的类型。

例如：

```ts
PermutationsOfTuple<[1, number, unknown]>
/**
 * Should return:
 * | [1, number, unknown]
 * | [1, unknown, number]
 * | [number, 1, unknown]
 * | [unknown, 1, number]
 * | [number, unknown, 1]
 * | [unknown, number ,1]
 */ 
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/21220/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/21220/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-296%E3%83%BBPermutation-d9901a" alt="296・Permutation"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-4260%E3%83%BBAllCombinations-d9901a" alt="4260・AllCombinations"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-8767%E3%83%BBCombination-d9901a" alt="8767・Combination"/></a> <!--info-footer-end-->