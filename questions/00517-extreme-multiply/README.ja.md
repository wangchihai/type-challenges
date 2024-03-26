<!--info-header-start--><h1>Multiply <img src="https://img.shields.io/badge/-%E6%9C%80%E4%B8%8A%E7%B4%9A-b11b8d" alt="最上級"/> <img src="https://img.shields.io/badge/-%23math-999" alt="#math"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/517/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

**このチャレンジは [476 - Sum](https://tsch.js.org/476) から続いています。最初にそれを完了し、それに基づいてコードを変更してこのチャレンジを開始することをお勧めします。**

2 つの非負の整数を乗算し、その積を文字列として返す型 `Multiply<A, B>` を実装します。数値は、文字列、数値、または bigint として指定できます。

例えば、

```ts
type T0 = Multiply<2, 3> // '6'
type T1 = Multiply<3, '5'> // '15'
type T2 = Multiply<'4', 10> // '40'
type T3 = Multiply<0, 16> // '0'
type T4 = Multiply<'13', '21'> // '273'
type T5 = Multiply<'43423', 321543n> // '13962361689'
```

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/517/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/517/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00476-extreme-sum/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-476%E3%83%BBSum-b11b8d" alt="476・Sum"/></a> <!--info-footer-end-->