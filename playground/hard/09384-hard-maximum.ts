/*
  9384 - Maximum
  -------
  by ch3cknull (@ch3cknull) #困难 #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  ＃＃＃ 描述

  实现类型 `Maximum`，它采用输入类型 `T`，并返回 `T` 中的最大值。

  如果 `T` 是空数组，则返回 `never`。 **不考虑负数**。

  例如：

  ```ts
  Maximum<[]> // never
  Maximum<[0, 2, 1]> // 2
  Maximum<[1, 20, 200, 150]> // 200
  ```

  ＃＃＃ 先进的

  你能实现受 `Maximum` 启发的类型 `Minimum` 吗？

  > 在 Github 上查看：https://tsch.js.org/9384/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Maximum<T extends any[]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/9384/answer/zh-CN
  > 查看解答：https://tsch.js.org/9384/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
