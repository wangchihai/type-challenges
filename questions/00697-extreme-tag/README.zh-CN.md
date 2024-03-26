<!--info-header-start--><h1>Tag <img src="https://img.shields.io/badge/-%E5%9C%B0%E7%8B%B1-b11b8d" alt="地狱"/> </h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/697/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

尽管 TypeScript 中有结构类型系统，但有时用标签标记某些类型很方便，这样这些标签就不会干扰将这些类型的值相互分配的能力。

例如，使用标签，您可以检查某些值是否以正确的顺序通过所需函数的调用：
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

编写一个函数 `Tag<B, T extends string>`，它采用除 `null` 和 `undefined` 之外的类型 `B` 并返回标有字符串文字类型 `T` 的类型。

标记类型必须可以与相应的原始类型相互赋值：
```ts
declare let x: string
declare let y: Tag<string, 'A'>

x = y = x
```

当标记已经用标签标记的类型时，必须将新标签添加到该类型的所有标签列表的末尾：
```ts
type T0 = Tag<{ foo: string }, 'A'>
type T1 = Tag<T0, 'B'>

type Check1 = IsTrue<HasExactTags<T1, ['A', 'B']>>
```

添加一些函数来检查类型标签。

`GetTags<B>` 检索类型 `B` 的所有标签的列表：
```ts
type T2 = Tag<number, 'C'>

type Check2 = IsTrue<Equal<GetTags<T2>, ['C']>>
```

`HasTag<B, T extends string>` 检查类型 `B` 是否用标签 `T` 标记（并返回 `true` 或 `false`）：
```ts
type T3 = Tag<0 | 1, 'D'>

type Check3 = IsTrue<HasTag<T3, 'D'>>
```

`HasTags<B, T extends readonly string[]>` 检查类型 `B` 是否连续使用元组 `T` 中的标签进行标记：
```ts
type T4 = Tag<Tag<Tag<{}, 'A'>, 'B'>, 'C'>

type Check4 = IsTrue<HasTags<T4, ['B', 'C']>>
```

`HasExactTags<B, T extends readonly string[]>` 检查 `B` 类型的所有标签的列表是否完全等于 `T` 元组：
```ts
type T5 = Tag<Tag<unknown, 'A'>, 'B'>

type Check5 = IsTrue<HasExactTags<T5, ['A', 'B']>>
```

最后，添加类型 `UnTag<B>`，这会删除类型 `B` 中的所有标签：
```ts
type T6 = Tag<{ bar: number }, 'A'>
type T7 = UnTag<T6>

type Check6 = IsFalse<HasTag<T7, 'A'>>
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/697/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/697/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->