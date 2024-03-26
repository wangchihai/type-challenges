/*
  32427 - Unbox
  -------
  by Julian Coy (@eXamadeus) #困难 #utils #promise #function #tuple #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  我们如何构建一个“拆箱”数组、函数、promise 和元组的类型？

  例子：

  ```typescript
  Unbox<string> // string
  Unbox<()=>number> // number
  Unbox<boolean[]> // boolean
  Unbox<Promise<boolean>> // boolean
  ```

  奖励：我们可以让它递归吗？

  ```typescript
  Unbox<() => () => () => () => number> // number
  ```

  双倍奖励：我们可以控制递归吗？

  ```typescript
  Unbox<() => () => () => () => number, 3> // () => number
  ```

  > 在 Github 上查看：https://tsch.js.org/32427/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Unbox<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Base cases
  Expect<Equal<Unbox<number>, number>>,
  Expect<Equal<Unbox<() => number>, number>>,
  Expect<Equal<Unbox<() => number | string>, number | string>>,
  Expect<Equal<Unbox<number[]>, number>>,
  Expect<Equal<Unbox<(number | string)[]>, number | string>>,
  Expect<Equal<Unbox<[number]>, number>>,
  Expect<Equal<Unbox<Promise<number>>, number>>,

  // Bonus: Recursion
  Expect<Equal<Unbox<() => Promise<() => Array<Promise<boolean>>>>, boolean>>,

  // Bonus: Recusion levels
  Expect<Equal<Unbox<() => () => () => () => number, 0>, number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 1>, () => () => () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 2>, () => () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 3>, () => number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 4>, number>>,
  Expect<Equal<Unbox<() => () => () => () => number, 5>, number>>,
  Expect<Equal<Unbox<number[][][][], 0>, number>>,
  Expect<Equal<Unbox<number[][][][], 1>, number[][][]>>,
  Expect<Equal<Unbox<number[][][][], 2>, number[][]>>,
  Expect<Equal<Unbox<number[][][][], 3>, number[]>>,
  Expect<Equal<Unbox<number[][][][], 4>, number>>,
  Expect<Equal<Unbox<number[][][][], 5>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 0>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 1>, [[[number]]]>>,
  Expect<Equal<Unbox<[[[[number]]]], 2>, [[number]]>>,
  Expect<Equal<Unbox<[[[[number]]]], 3>, [number]>>,
  Expect<Equal<Unbox<[[[[number]]]], 4>, number>>,
  Expect<Equal<Unbox<[[[[number]]]], 5>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 0>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 1>, Promise<Promise<number>>>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 2>, Promise<number>>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 3>, number>>,
  Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 4>, number>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/32427/answer/zh-CN
  > 查看解答：https://tsch.js.org/32427/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
