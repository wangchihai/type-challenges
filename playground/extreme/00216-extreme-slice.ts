/*
  216 - Slice
  -------
  by Anthony Fu (@antfu) #地狱 #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  在类型系统中实现 JavaScript `Array.slice` 函数。 `Slice<Arr, Start, End>` 采用三个参数。输出应该是 `Arr` 的子数组，从索引 `Start` 到 `End`。带有负数的索引应该从倒数开始计数。

  例如

  ```ts
  type Arr = [1, 2, 3, 4, 5]
  type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
  ```

  > 在 Github 上查看：https://tsch.js.org/216/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Slice<Arr, Start, End> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Arr = [1, 2, 3, 4, 5]

type cases = [
  // basic
  Expect<Equal<Slice<Arr, 0, 1>, [1]>>,
  Expect<Equal<Slice<Arr, 0, 0>, []>>,
  Expect<Equal<Slice<Arr, 2, 4>, [3, 4]>>,

  // optional args
  Expect<Equal<Slice<[]>, []>>,
  Expect<Equal<Slice<Arr>, Arr>>,
  Expect<Equal<Slice<Arr, 0>, Arr>>,
  Expect<Equal<Slice<Arr, 2>, [3, 4, 5]>>,

  // negative index
  Expect<Equal<Slice<Arr, 0, -1>, [1, 2, 3, 4]>>,
  Expect<Equal<Slice<Arr, -3, -1>, [3, 4]>>,

  // invalid
  Expect<Equal<Slice<Arr, 10>, []>>,
  Expect<Equal<Slice<Arr, 1, 0>, []>>,
  Expect<Equal<Slice<Arr, 10, 20>, []>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/216/answer/zh-CN
  > 查看解答：https://tsch.js.org/216/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
