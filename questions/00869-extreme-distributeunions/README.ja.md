<!--info-header-start--><h1>DistributeUnions <img src="https://img.shields.io/badge/-%E6%9C%80%E4%B8%8A%E7%B4%9A-b11b8d" alt="最上級"/> </h1><blockquote><p>by Gabriel Vergnaud <a href="https://github.com/gvergnaud" target="_blank">@gvergnaud</a></p></blockquote><p><a href="https://tsch.js.org/869/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

型 `Distribute Unions` を実装します。これは、共用体型を含むデータ構造の型を次の共用体に変換します。
共用体を含まない、許可されたデータ構造の考えられるすべてのタイプ。データ構造は任意です
ネストの任意のレベルでのオブジェクトとタプルの組み合わせ。

例えば：

```ts
type T1 = DistributeUnions<[1 | 2, 'a' | 'b']>
// =>   [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']

type T2 = DistributeUnions<{ type: 'a', value: number | string } | { type: 'b', value: boolean }>
//  =>  | { type 'a', value: number }
//      | { type 'a', value: string }
//      | { type 'b', value: boolean }

type T3 = DistributeUnions<[{ value: 'a' | 'b' },  { x: { y: 2 | 3  } }] | 17>
//  =>  | [{ value: 'a' },  { x: { y: 2  } }]
//      | [{ value: 'a' },  { x: { y: 3  } }]
//      | [{ value: 'b' },  { x: { y: 2  } }]
//      | [{ value: 'b' },  { x: { y: 3  } }]
//      | 17
```

コンテキストに関して、このタイプは、深いデータ構造のケースを除外する場合に非常に役立ちます。

```ts
type ExcludeDeep<A, B> = Exclude<DistributeUnions<A>, B>

type T0 = ExcludeDeep<[{ value: 'a' | 'b' },  { x: { y: 2 | 3  } }] | 17, [{ value: 'a' },  any]>
//  =>  | [{ value: 'b' },  { x: { y: 2  } }]
//      | [{ value: 'b' },  { x: { y: 3  } }]
//      | 17
```

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/869/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/869/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->