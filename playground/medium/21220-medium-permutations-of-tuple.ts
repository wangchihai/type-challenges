/*
  21220 - Permutations of Tuple
  -------
  by null (@gaac510) #中等 #union #tuple #conditional type #recursion

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  给定一个泛型元组类型 `T extends unknown[]`，编写一个将 `T` 的所有排列生成为并集的类型。

  例如：

  ```ts
  PermutationsOfTuple<[1, number, unknown]>
  /**
   * Should return:
   * | [1, number, unknown]
   * | [1, unknown, number]
   * | [number, 1, unknown]
   * | [unknown, 1, number]
   * | [number, unknown, 1]
   * | [unknown, number ,1]
   */
  ```

  > 在 Github 上查看：https://tsch.js.org/21220/zh-CN
*/

/* _____________ 你的代码 _____________ */

type PermutationsOfTuple<T extends unknown[]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect, ExpectFalse } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<Equal<
    PermutationsOfTuple<[any, unknown, never]>,
    | [any, unknown, never]
    | [unknown, any, never]
    | [unknown, never, any]
    | [any, never, unknown]
    | [never, any, unknown]
    | [never, unknown, any]
  >>,
  Expect<Equal<
    PermutationsOfTuple<[1, number, unknown]>,
    | [1, number, unknown]
    | [1, unknown, number]
    | [number, 1, unknown]
    | [unknown, 1, number]
    | [number, unknown, 1]
    | [unknown, number, 1]
  >>,
  ExpectFalse<Equal<PermutationsOfTuple<[ 1, number, unknown ]>, [unknown]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/21220/answer/zh-CN
  > 查看解答：https://tsch.js.org/21220/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
