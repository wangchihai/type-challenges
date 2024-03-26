/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #中等 #tuple

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现一个类型 ```IsTuple```，它接受输入类型 ```T``` 并返回 ```T``` 是否为元组类型。

  例如：

  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/4484/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsTuple<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4484/answer/zh-CN
  > 查看解答：https://tsch.js.org/4484/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
