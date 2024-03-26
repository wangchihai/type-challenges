/*
  13580 - Replace Union
  -------
  by Konstantin Barabanov (@crutch12) #困难

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  给定 `union of types` 和 `array of type pairs` 来替换 (`[[string, number], [Date, null]]`)，返回一个用 `type pairs` 替换的新联合。

  > 在 Github 上查看：https://tsch.js.org/13580/zh-CN
*/

/* _____________ 你的代码 _____________ */

type UnionReplace<T, U extends [any, any][]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null], [Date, Function]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>, undefined | string | object>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/13580/answer/zh-CN
  > 查看解答：https://tsch.js.org/13580/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
