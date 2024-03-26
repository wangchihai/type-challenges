/*
  9775 - Capitalize Nest Object Keys
  -------
  by MayanDev (@Mayandev) #困难 #object #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  将对象的键大写，如果值为数组，则迭代数组中的对象。

  > 在 Github 上查看：https://tsch.js.org/9775/zh-CN
*/

/* _____________ 你的代码 _____________ */

type CapitalizeNestObjectKeys<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/9775/answer/zh-CN
  > 查看解答：https://tsch.js.org/9775/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
