/*
  28333 - Public Type
  -------
  by KaiKai (@kaikaibenkai) #中等 #object-keys

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  从给定类型 `T` 中删除以 `_` 开头的键。

  > 在 Github 上查看：https://tsch.js.org/28333/zh-CN
*/

/* _____________ 你的代码 _____________ */

type PublicType<T extends object> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/28333/answer/zh-CN
  > 查看解答：https://tsch.js.org/28333/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
