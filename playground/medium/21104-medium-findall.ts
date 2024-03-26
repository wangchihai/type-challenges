/*
  21104 - FindAll
  -------
  by tunamagur0 (@tunamagur0) #中等 #template-literal #string

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  给定模式字符串 P 和文本字符串 T，实现类型 `FindAll<T, P>` 返回一个数组，该数组包含 T 中 P 匹配的所有索引（从 0 开始索引）。

  > 在 Github 上查看：https://tsch.js.org/21104/zh-CN
*/

/* _____________ 你的代码 _____________ */

type FindAll<T extends string, P extends string> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/21104/answer/zh-CN
  > 查看解答：https://tsch.js.org/21104/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
