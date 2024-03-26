/*
  3196 - Flip Arguments
  -------
  by jiangshan (@jiangshanmeta) #中等 #arguments

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现 lodash 的 ```_.flip``` 的类型版本。

  类型 ```FlipArguments<T>``` 需要函数类型 ```T``` 并返回一个新的函数类型，该函数类型与 T 的返回类型相同，但参数相反。

  例如：

  ```typescript
  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
  // (arg0: boolean, arg1: number, arg2: string) => void
  ```

  > 在 Github 上查看：https://tsch.js.org/3196/zh-CN
*/

/* _____________ 你的代码 _____________ */

type FlipArguments<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3196/answer/zh-CN
  > 查看解答：https://tsch.js.org/3196/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
