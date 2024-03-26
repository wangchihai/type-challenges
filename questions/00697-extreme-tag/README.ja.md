<!--info-header-start--><h1>Tag <img src="https://img.shields.io/badge/-%E6%9C%80%E4%B8%8A%E7%B4%9A-b11b8d" alt="最上級"/> </h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/697/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

TypeScript の構造型型システムにもかかわらず、一部の型をタグでマークすると、これらのタグがこれらの型の値を相互に割り当てる機能を妨げないようにすることが便利な場合があります。

たとえば、タグを使用すると、一部の値が必要な関数の呼び出しを正しい順序で通過することを確認できます。
```ts
const doA = <T extends string>(x: T) => {
  const result = x

  return result as Tag<typeof result, 'A'>
}

const doB = <T extends string>(x: T) => {
  const result = x

  return result as Tag<typeof result, 'B'>
};

const a = doA('foo')
const b = doB(a)

type Check0 = IsTrue<HasTags<typeof b, ['A', 'B']>>
```

`null` と `undefined` 以外の `B` 型を取り、文字列リテラル型 `T` でラベル付けされた型を返す関数 `Tag<B, T extends string>` を作成します。

ラベル付きタイプは、対応する元のタイプと相互に割り当て可能である必要があります。
```ts
declare let x: string
declare let y: Tag<string, 'A'>

x = y = x
```

すでにタグが付けられているタイプにタグを付ける場合は、そのタイプのすべてのタグのリストの最後に新しいタグを追加する必要があります。
```ts
type T0 = Tag<{ foo: string }, 'A'>
type T1 = Tag<T0, 'B'>

type Check1 = IsTrue<HasExactTags<T1, ['A', 'B']>>
```

type タグをチェックする関数をいくつか追加します。

`GetTags<B>` は、タイプ `B` のすべてのタグのリストを取得します。
```ts
type T2 = Tag<number, 'C'>

type Check2 = IsTrue<Equal<GetTags<T2>, ['C']>>
```

`HasTag<B, T extends string>` は、タイプ `B` がタグ `T` でタグ付けされているかどうかを確認します (そして `true` または `false` を返します)。
```ts
type T3 = Tag<0 | 1, 'D'>

type Check3 = IsTrue<HasTag<T3, 'D'>>
```

`HasTags<B, T extends readonly string[]>` は、型 `B` がタプル `T` のタグで連続してタグ付けされているかどうかをチェックします。
```ts
type T4 = Tag<Tag<Tag<{}, 'A'>, 'B'>, 'C'>

type Check4 = IsTrue<HasTags<T4, ['B', 'C']>>
```

`HasExactTags<B, T extends readonly string[]>` は、タイプ `B` のすべてのタグのリストが `T` タプルと正確に等しいかどうかをチェックします。
```ts
type T5 = Tag<Tag<unknown, 'A'>, 'B'>

type Check5 = IsTrue<HasExactTags<T5, ['A', 'B']>>
```

最後に、タイプ `UnTag<B>` を追加します。これにより、タイプ `B` からすべてのタグが削除されます。
```ts
type T6 = Tag<{ bar: number }, 'A'>
type T7 = UnTag<T6>

type Check6 = IsFalse<HasTag<T7, 'A'>>
```

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/697/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/697/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->