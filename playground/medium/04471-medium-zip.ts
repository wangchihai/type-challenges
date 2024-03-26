/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #中等 #tuple

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  在本次挑战中，您应该实现类型 `Zip<T, U>`，T 和 U 必须是 `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```

  > 在 Github 上查看：https://tsch.js.org/4471/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Zip<T, U> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4471/answer/zh-CN
  > 查看解答：https://tsch.js.org/4471/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
