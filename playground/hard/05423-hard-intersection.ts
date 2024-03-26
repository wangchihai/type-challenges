/*
  5423 - Intersection
  -------
  by Pineapple (@Pineapple0919) #困难 #union #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现 Lodash.intersection 的类型版本，但略有不同。 Intersection<T> 接受一个包含多个数组或任何类型元素（包括联合类型）的数组 T，并返回一个包含所有交集元素的新联合。

  ```ts
  type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // expected to be 2
  type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // expected to be 2 | 3
  type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // expected to be never
  type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // expected to be 3
  type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // expected to be 2 | 3
  type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // expected to be never
  ```

  > 在 Github 上查看：https://tsch.js.org/5423/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Intersection<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Intersection<[[1, 2], [2, 3], [2, 2]]>, 2>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2], [3, 4], [5, 6]]>, never>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], 3]>, 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2, 3]>, never>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/5423/answer/zh-CN
  > 查看解答：https://tsch.js.org/5423/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
