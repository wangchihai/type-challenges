/*
  27932 - MergeAll
  -------
  by scarf (@scarf005) #中等 #object #array #union

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  将可变数量的类型合并为新类型。如果键重叠，则其值应合并为并集。

  例如：

  ```ts
  type Foo = { a: 1; b: 2 }
  type Bar = { a: 2 }
  type Baz = { c: 3 }

  type Result = MergeAll<[Foo, Bar, Baz]> // expected to be { a: 1 | 2; b: 2; c: 3 }
  ```

  > 在 Github 上查看：https://tsch.js.org/27932/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MergeAll<XS> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MergeAll<[]>, {} >>,
  Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
  Expect<Equal<
    MergeAll<[{ a: string }, { a: string }]>,
    { a: string }
>
  >,
  Expect<Equal<
    MergeAll<[{ }, { a: string }]>,
    { a: string }
>
  >,
  Expect<Equal<
    MergeAll<[{ a: 1 }, { c: 2 }]>,
    { a: 1, c: 2 }
>
  >,
  Expect<Equal<
    MergeAll<[{ a: 1, b: 2 }, { a: 2 }, { c: 3 }]>,
    { a: 1 | 2, b: 2, c: 3 }
>
  >,
  Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/27932/answer/zh-CN
  > 查看解答：https://tsch.js.org/27932/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
