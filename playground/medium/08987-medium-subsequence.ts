/*
  8987 - Subsequence
  -------
  by jiangshan (@jiangshanmeta) #中等 #union

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  给定一个唯一元素数组，返回所有可能的子序列。

  子序列是可以通过删除一些元素或不删除元素而不改变剩余元素的顺序从数组派生的序列。

  例如：

  ```typescript
  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
  ```

  > 在 Github 上查看：https://tsch.js.org/8987/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Subsequence<T extends any[]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/8987/answer/zh-CN
  > 查看解答：https://tsch.js.org/8987/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
