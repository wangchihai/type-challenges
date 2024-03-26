/*
  25270 - Transpose
  -------
  by Apollo Wayne (@Shinerising) #中等 #array #math

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  矩阵的转置是一个将矩阵翻转其对角线的运算符；也就是说，它通过生成另一个矩阵（通常用 A<sup>T</sup> 表示）来切换矩阵 A 的行索引和列索引。

  ```ts
  type Matrix = Transpose <[[1]]>; // expected to be [[1]]
  type Matrix1 = Transpose <[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
  type Matrix2 = Transpose <[[1, 2, 3], [4, 5, 6]]>; // expected to be [[1, 4], [2, 5], [3, 6]]
  ```

  > 在 Github 上查看：https://tsch.js.org/25270/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Transpose<M extends number[][]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Transpose<[]>, []>>,
  Expect<Equal<Transpose<[[1]]>, [[1]]>>,
  Expect<Equal<Transpose<[[1, 2]]>, [[1], [2]]>>,
  Expect<Equal<Transpose<[[1, 2], [3, 4]]>, [[1, 3], [2, 4]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6]]>, [[1, 4], [2, 5], [3, 6]]>>,
  Expect<Equal<Transpose<[[1, 4], [2, 5], [3, 6]]>, [[1, 2, 3], [4, 5, 6]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>, [[1, 4, 7], [2, 5, 8], [3, 6, 9]]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/25270/answer/zh-CN
  > 查看解答：https://tsch.js.org/25270/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
