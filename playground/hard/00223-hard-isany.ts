/*
  223 - IsAny
  -------
  by Pavel Glushkov (@pashutk) #困难 #utils

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  有时，检测是否有 `any` 类型的值很有用。这在使用第三方 Typescript 模块时特别有用，该模块可以在模块 API 中导出 `any` 值。当您抑制隐式检查时，了解 `any` 也很有好处。

  因此，让我们编写一个实用程序类型 `IsAny<T>`，它接受输入类型 `T`。如果 `T` 是 `any`，则返回 `true`，否则返回 `false`。

  > 在 Github 上查看：https://tsch.js.org/223/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsAny<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/223/answer/zh-CN
  > 查看解答：https://tsch.js.org/223/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
