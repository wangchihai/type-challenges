<!--info-header-start--><h1>Permutations of Tuple <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%B4%9A-d9901a" alt="中級"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23conditional%20type-999" alt="#conditional type"/> <img src="https://img.shields.io/badge/-%23recursion-999" alt="#recursion"/></h1><blockquote><p>by null <a href="https://github.com/gaac510" target="_blank">@gaac510</a></p></blockquote><p><a href="https://tsch.js.org/21220/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

汎用タプル型 `T extends unknown[]` を指定すると、`T` のすべての順列を共用体として生成する型を作成します。

例えば：

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

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/21220/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/21220/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-296%E3%83%BBPermutation-d9901a" alt="296・Permutation"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-4260%E3%83%BB%E6%96%87%E5%AD%97%E3%81%AE%E7%B5%84%E3%81%BF%E5%90%88%E3%82%8F%E3%81%9B-d9901a" alt="4260・文字の組み合わせ"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-8767%E3%83%BBCombination-d9901a" alt="8767・Combination"/></a> <!--info-footer-end-->