/*
  1042 - IsNever
  -------
  by hiroya iizuka (@hiroyaiizuka) #中等 #union #utils

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现一个 IsNever 类型，它采用输入类型 `T`。
  如果 的类型解析为 `never`，则返回 `true`，否则返回 `false`。

  例如：

  ```ts
  type A = IsNever<never> // expected to be true
  type B = IsNever<undefined> // expected to be false
  type C = IsNever<null> // expected to be false
  type D = IsNever<[]> // expected to be false
  type E = IsNever<number> // expected to be false
  ```

  > 在 Github 上查看：https://tsch.js.org/1042/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsNever<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/1042/answer/zh-CN
  > 查看解答：https://tsch.js.org/1042/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
