/*
  2857 - IsRequiredKey
  -------
  by jiangshan (@jiangshanmeta) #困难 #utils

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现一个泛型 ```IsRequiredKey<T, K>``` ，返回 ```K``` 是否是 ```T``` 的必需键。

  例如

  ```typescript
  type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
  type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
  type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/2857/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsRequiredKey<T, K extends keyof T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b' | 'a'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: undefined }, 'b' | 'a'>, true>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2857/answer/zh-CN
  > 查看解答：https://tsch.js.org/2857/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
