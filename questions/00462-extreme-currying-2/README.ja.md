<!--info-header-start--><h1>Currying 2 <img src="https://img.shields.io/badge/-%E6%9C%80%E4%B8%8A%E7%B4%9A-b11b8d" alt="最上級"/> </h1><blockquote><p>by Kim <a href="https://github.com/hubvue" target="_blank">@hubvue</a></p></blockquote><p><a href="https://tsch.js.org/462/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

[Currying](https://en.wikipedia.org/wiki/Currying) は、複数の引数を取る関数を、それぞれが 1 つの引数を取る一連の関数に変換する手法です。

しかし、私たちの日常生活では、`Function.bind(this, [...params])` API など、動的引数のカリー化も一般的に使用されています。

```ts
const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)

const result = bindFunc(3) // result: 6
```

したがって、`Currying 1` に基づいて、動的な引数のバージョンが必要になります。

```ts
const add = (a: number, b: number, c: number) => a + b + c
const three = add(1, 1, 1) 

const curriedAdd = DynamicParamsCurrying(add)
const six = curriedAdd(1, 2, 3)
const seven = curriedAdd(1, 2)(4)
const nine = curriedAdd(2)(3)(4)
```

この課題では、`DynamicParamsCurrying` は 0 から複数の引数を持つ関数を受け取る可能性があるため、それを正しく入力する必要があります。返される関数は、少なくとも 1 つの引数を受け入れることができます。すべての引数が満たされている場合、元の関数の戻り値の型が正しく返されるはずです。

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/462/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/462/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <hr><h3>関連する課題</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BBCurrying%201-de3d37" alt="17・Currying 1"/></a> <!--info-footer-end-->