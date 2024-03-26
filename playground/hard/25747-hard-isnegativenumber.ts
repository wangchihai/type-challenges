/*
  25747 - IsNegativeNumber
  -------
  by andrew jarrett (@ahrjarrett) #困难 #number #template literal

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  有时，在使用数字文字时，我们需要排除（或强制）提供的数字是正整数。

  为此，我们首先需要一种方法来判断数字是否为负数。

  编写一个类型级函数 `IsNegativeNumber` ，它接受数字 `N` 并返回：

  - `true` 如果 `N` 为负数
  - `false` 如果 `N` 为正
  - `false` 如果 `N` 是 `0`，
  - `never` 如果 `N` 是 `number`
  - `never` 如果 `N` 是一个并集

  > 在 Github 上查看：https://tsch.js.org/25747/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsNegativeNumber<T extends number> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNegativeNumber<0>, false>>,
  Expect<Equal<IsNegativeNumber<number>, never>>,
  Expect<Equal<IsNegativeNumber<-1 | -2>, never>>,
  Expect<Equal<IsNegativeNumber<-1>, true>>,
  Expect<Equal<IsNegativeNumber<-1.9>, true>>,
  Expect<Equal<IsNegativeNumber<-100_000_000>, true>>,
  Expect<Equal<IsNegativeNumber<1>, false>>,
  Expect<Equal<IsNegativeNumber<1.9>, false>>,
  Expect<Equal<IsNegativeNumber<100_000_000>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/25747/answer/zh-CN
  > 查看解答：https://tsch.js.org/25747/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
