/*
  31447 - CountReversePairs
  -------
  by jiangshan (@jiangshanmeta) #地狱

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  给定一个整数数组 nums，返回数组中反向对的数量。

  反向对是一对 (i, j)，其中：

  * 0 <= i < j < nums.length 并且
  * nums[i] > nums[j]。

  > 在 Github 上查看：https://tsch.js.org/31447/zh-CN
*/

/* _____________ 你的代码 _____________ */

type CountReversePairs<T extends number[]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CountReversePairs<[5, 2, 6, 1]>, 4>>,
  Expect<Equal<CountReversePairs<[1, 2, 3, 4]>, 0>>,
  Expect<Equal<CountReversePairs<[-1, -1]>, 0>>,
  Expect<Equal<CountReversePairs<[-1]>, 0>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/31447/answer/zh-CN
  > 查看解答：https://tsch.js.org/31447/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
