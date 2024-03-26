<!--info-header-start--><h1>Fill <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%B4%9A-d9901a" alt="中級"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></h1><blockquote><p>by キリサメ qianxi <a href="https://github.com/qianxi0410" target="_blank">@qianxi0410</a></p></blockquote><p><a href="https://tsch.js.org/4518/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

一般的な JavaScript 関数である `Fill` を型を使用して実装してみましょう。
ご覧のとおり、`Fill<T, N, Start?, End?>` は 4 種類のパラメータを受け入れます。そのうち `T` と `N` は必須パラメータであり、`Start` と `End` はオプションのパラメータです。
これらのパラメーターの要件は、`T` は `tuple` である必要があり、`N` は任意のタイプの値にすることができ、`Start` および `End` は 0 以上の整数である必要があります。

```ts
type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
```
実際の関数をシミュレートするために、テストにはいくつかの境界条件が含まれる場合があります。楽しんでいただければ幸いです :)

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/4518/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/4518/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->