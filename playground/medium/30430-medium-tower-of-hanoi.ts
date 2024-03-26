/*
  30430 - Tower of hanoi
  -------
  by null (@aswinsvijay) #中等 #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  模拟解决河内塔谜题。您的类型应将环的数量作为输入，并返回一系列步骤，以使用塔 C 作为附加将环从塔 A 移动到塔 B。数组中的每个条目应该是一对字符串 `[From, To]` ，表示正在移动的环 `From -> To` 。

  [维基百科](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
  [GeeksForGeeks](https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi)

  > 在 Github 上查看：https://tsch.js.org/30430/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Tests = [
  Expect<Equal<Hanoi<0>, []>>,
  Expect<Equal<Hanoi<1>, [['A', 'B']]>>,
  Expect<Equal<Hanoi<2>, [['A', 'C'], ['A', 'B'], ['C', 'B']]>>,
  Expect<Equal<Hanoi<3>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
  Expect<Equal<Hanoi<5>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['B', 'C'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['C', 'A'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/30430/answer/zh-CN
  > 查看解答：https://tsch.js.org/30430/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
