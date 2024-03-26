/*
  18220 - Filter
  -------
  by Muhun Kim (@x86chi) #中等 #array #filter

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现类型 `Filter<T, Predicate>` 接受数组 `T`、原始类型或联合原始类型 `Predicate` 并返回包含 `Predicate` 元素的数组。

  > 在 Github 上查看：https://tsch.js.org/18220/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Filter<T extends any[], P> = []

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/18220/answer/zh-CN
  > 查看解答：https://tsch.js.org/18220/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
