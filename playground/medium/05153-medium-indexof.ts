/*
  5153 - IndexOf
  -------
  by Pineapple (@Pineapple0919) #中等 #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现 Array.indexOf 的类型版本，indexOf<T, U> 接受一个数组 T、任意 U 并返回数组 T 中第一个 U 的索引。

  ```ts
  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
  ```

  > 在 Github 上查看：https://tsch.js.org/5153/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IndexOf<T, U> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/5153/answer/zh-CN
  > 查看解答：https://tsch.js.org/5153/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
