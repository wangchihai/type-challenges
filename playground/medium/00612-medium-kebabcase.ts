/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #中等 #template-literal

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  将 `camelCase` 或 `PascalCase` 字符串替换为 `kebab-case`。

  `FooBarBaz` -> `foo-bar-baz`

  例如

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > 在 Github 上查看：https://tsch.js.org/612/zh-CN
*/

/* _____________ 你的代码 _____________ */

type KebabCase<S> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/612/answer/zh-CN
  > 查看解答：https://tsch.js.org/612/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
