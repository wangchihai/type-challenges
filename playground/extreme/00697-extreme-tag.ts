/*
  697 - Tag
  -------
  by null (@uid11) #地狱

  ### 题目

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

  > 在 Github 上查看：https://tsch.js.org/697/zh-CN
*/

/* _____________ 你的代码 _____________ */

type GetTags<B> = any

type Tag<B, T extends string> = any

type UnTag<B> = any

type HasTag<B, T extends string> = any
type HasTags<B, T extends readonly string[]> = any
type HasExactTags<B, T extends readonly string[]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect, IsTrue } from '@type-challenges/utils'

/**
 * Tests of assignable of tagged variables.
 */
interface I {
  foo: string
}

declare let x0: I
declare let x1: Tag<I, 'a'>
declare let x2: Tag<I, 'b'>
declare let x3: Tag<Tag<I, 'a'>, 'b'>
declare let x4: Tag<Tag<I, 'b'>, 'a'>
declare let x5: Tag<Tag<I, 'c'>, 'a'>
declare let x6: Tag<Tag<I, 'c'>, 'b'>
declare let x7: UnTag<Tag<Tag<I, 'c'>, 'b'>>

x0 = x1 = x0 = x2 = x0 = x3 = x0 = x4 = x0 = x5 = x0 = x6 = x0 = x7 = x0
x1 = x2 = x1 = x3 = x1 = x4 = x1 = x5 = x1 = x6 = x1 = x7 = x1
x2 = x3 = x2 = x4 = x2 = x5 = x2 = x6 = x2 = x7 = x2
x3 = x4 = x3 = x5 = x3 = x6 = x3 = x7 = x3
x4 = x5 = x4 = x6 = x4 = x7 = x4
x5 = x6 = x5 = x7 = x5
x6 = x7 = x6

declare let y0: string
declare let y1: Tag<string, 'a'>
declare let y2: Tag<string, 'b'>
declare let y3: Tag<Tag<string, 'a'>, 'b'>
declare let y4: Tag<Tag<string, 'b'>, 'a'>
declare let y5: Tag<Tag<string, 'c'>, 'a'>
declare let y6: Tag<Tag<string, 'c'>, 'b'>
declare let y7: UnTag<Tag<Tag<string, 'c'>, 'b'>>

y0 = y1 = y0 = y2 = y0 = y3 = y0 = y4 = y0 = y5 = y0 = y6 = y0 = y7 = y0
y1 = y2 = y1 = y3 = y1 = y4 = y1 = y5 = y1 = y6 = y1 = y7 = y1
y2 = y3 = y2 = y4 = y2 = y5 = y2 = y6 = y2 = y7 = y2
y3 = y4 = y3 = y5 = y3 = y6 = y3 = y7 = y3
y4 = y5 = y4 = y6 = y4 = y7 = y4
y5 = y6 = y5 = y7 = y5
y6 = y7 = y6

// @ts-expect-error
x0 = y0
// @ts-expect-error
x1 = y1
// @ts-expect-error
x2 = y2
// @ts-expect-error
x3 = y3
// @ts-expect-error
x4 = y4
// @ts-expect-error
x5 = y5
// @ts-expect-error
x6 = y6
// @ts-expect-error
x7 = y7

declare const UNIQUE_SYMBOL: unique symbol
type US = typeof UNIQUE_SYMBOL

/**
 * Tests of API (Tag, GetTags, Untag, HasTag, HasTags, HasExactTags).
 */
type cases = [
  /**
   * Tag.
   */
  IsTrue<Equal<Tag<null, 'foo'>, null>>,
  IsTrue<Equal<Tag<undefined, 'foo'>, undefined>>,
  IsTrue<Equal<'x', keyof Tag<{ x: 0 }, 'foo'> & string>>,

  /**
   * GetTags.
   */
  IsTrue<Equal<GetTags<null>, []>>,
  IsTrue<Equal<GetTags<any>, []>>,
  IsTrue<Equal<GetTags<undefined>, []>>,
  IsTrue<Equal<GetTags<Tag<any, 'foo'>>, ['foo']>>,
  IsTrue<Equal<GetTags<Tag<null | 1, 'foo'>>, ['foo']>>,
  IsTrue<Equal<GetTags<Tag<0, 'foo'> | 1>, []>>,
  IsTrue<Equal<GetTags<Tag<{}, 'foo'> | Tag<1, 'foo'>>, ['foo']>>,
  IsTrue<Equal<GetTags<Tag<string, 'foo'>>, ['foo']>>,
  IsTrue<Equal<GetTags<Tag<never, 'foo'>>, ['foo']>>,
  IsTrue<Equal<GetTags<Tag<Tag<string, 'foo'>, 'bar'>>, ['foo', 'bar']>>,
  IsTrue<
  Equal<
  GetTags<Tag<Tag<Tag<{}, 'foo'>, 'bar'>, 'baz'>>,
  ['foo', 'bar', 'baz']
  >
  >,

  /**
   * UnTag.
   */
  IsTrue<Equal<UnTag<null>, null>>,
  IsTrue<Equal<UnTag<undefined>, undefined>>,
  IsTrue<Equal<UnTag<Tag<{}, 'foo'>>, {}>>,
  IsTrue<Equal<UnTag<Tag<Tag<{ x: 0 }, 'foo'>, 'bar'>>, { x: 0 }>>,
  IsTrue<Equal<keyof UnTag<Tag<Tag<number, 'foo'>, 'bar'>>, keyof number>>,

  /**
   * HasTag.
   */
  Expect<Equal<HasTag<null, 'foo'>, false>>,
  Expect<Equal<HasTag<undefined, 'foo'>, false>>,
  Expect<Equal<HasTag<Tag<any, 'foo'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<1, 'foo'> | {}, 'foo'>, false>>,
  Expect<Equal<HasTag<Tag<{}, 'foo'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<0, 'foo'> | Tag<1, 'foo'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<0, 'foo'> | Tag<1, 'bar'>, 'foo'>, false>>,
  Expect<Equal<HasTag<Tag<Tag<{}, 'foo'>, 'bar'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<Tag<symbol, 'bar'>, 'foo'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<Tag<{}, 'bar'>, 'baz'>, 'foo'>, false>>,
  Expect<Equal<HasTag<Tag<true, 'foo'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<null, 'foo'>, 'foo'>, false>>,
  Expect<Equal<HasTag<Tag<Tag<undefined, 'foo'>, 'bar'>, 'bar'>, false>>,
  Expect<Equal<HasTag<Tag<Tag<false, 'foo'>, 'bar'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<Tag<never, 'bar'>, 'foo'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<{}, 'foo'>, 'foo'>, true>>,
  Expect<Equal<HasTag<Tag<{}, 'foo'>, 'bar'>, false>>,
  Expect<Equal<HasTag<{}, 'foo'>, false>>,

  /**
   * HasTags.
   */
  Expect<Equal<HasTags<null, ['foo']>, false>>,
  Expect<Equal<HasTags<undefined, ['foo']>, false>>,
  Expect<Equal<HasTags<Tag<any, 'bar'>, ['foo']>, false>>,
  Expect<Equal<HasTags<Tag<{}, 'bar'>, ['foo']>, false>>,
  Expect<Equal<HasTags<Tag<{}, 'foo'>, ['foo']>, true>>,
  Expect<Equal<HasTags<Tag<any, 'foo'>, ['foo']>, true>>,
  Expect<Equal<HasTags<Tag<{} | undefined, 'foo'>, ['foo']>, true>>,
  Expect<Equal<HasTags<Tag<Tag<string, 'foo'>, 'bar'>, ['foo', 'bar']>, true>>,
  Expect<Equal<HasTags<Tag<Tag<3n, 'foo'>, 'bar'>, ['foo', 'bar']>, true>>,
  Expect<Equal<HasTags<Tag<Tag<{}, 'bar'>, 'foo'>, ['foo', 'bar']>, false>>,
  Expect<Equal<HasTags<Tag<Tag<Tag<{}, 'baz'>, 'foo'>, 'bar'>, ['foo', 'bar']>, true>>,
  Expect<Equal<HasTags<Tag<Tag<Tag<symbol, 'baz'>, 'foo'>, 'bar'>, ['foo', 'bar']>, true>>,
  Expect<Equal<HasTags<Tag<Tag<Tag<{}, 'foo'>, 'bar'>, 'baz'>, ['foo', 'bar']>, true>>,
  Expect<Equal<HasTags<Tag<Tag<Tag<0, 'foo'>, 'bar'>, 'baz'>, ['foo', 'bar']>, true>>,
  Expect<Equal<HasTags<Tag<Tag<Tag<{}, 'foo'>, 'baz'>, 'bar'>, ['foo', 'bar']>, false>>,
  Expect<Equal<HasTags<Tag<Tag<unknown, 'foo'>, 'bar'>, ['foo', 'bar']>, true>>,

  /**
   * HasExactTags.
   */
  Expect<Equal<HasExactTags<0, []>, true>>,
  Expect<Equal<HasExactTags<null, []>, true>>,
  Expect<Equal<HasExactTags<undefined, []>, true>>,
  Expect<Equal<HasExactTags<Tag<number, 'foo'>, ['foo']>, true>>,
  Expect<Equal<HasExactTags<Tag<any, 'foo'>, ['bar']>, false>>,
  Expect<Equal<HasExactTags<Tag<Tag<any, 'foo'>, 'bar'>, ['foo', 'bar']>, true>>,
  Expect<Equal<HasExactTags<Tag<'', 'foo'>, ['foo']>, true>>,
  Expect<Equal<HasExactTags<Tag<US, 'foo'>, ['foo']>, true>>,
  Expect<Equal<HasExactTags<Tag<{}, 'foo'>, ['bar']>, false>>,
  Expect<Equal<HasExactTags<Tag<Tag<Tag<{}, 'foo'>, 'bar'>, 'baz'>, ['foo', 'bar']>, false>>,
  Expect<Equal<HasExactTags<Tag<Tag<Tag<{}, 'foo'>, 'bar'>, 'baz'>, ['foo', 'bar', 'baz']>, true>>,
  Expect<Equal<HasExactTags<Tag<Tag<void, 'foo'>, 'bar'>, ['foo', 'bar']>, true>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/697/answer/zh-CN
  > 查看解答：https://tsch.js.org/697/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
