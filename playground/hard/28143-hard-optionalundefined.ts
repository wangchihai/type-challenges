/*
  28143 - OptionalUndefined
  -------
  by Jesus The Hun (@JesusTheHun) #困难

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现 util 类型 `OptionalUndefined<T, Props>` ，将 `T` 的所有可以是 `undefined` 的属性转换为可选属性。此外，可以传递第二个可选通用 `Props` 来限制可以更改的属性。

  ```ts
  OptionalUndefined<{ value: string | undefined, description: string }>
  // { value?: string | undefined; description: string }

  OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
  // { value: string | undefined; description?: string | undefined, author?: string | undefined }
  ```

  > 在 Github 上查看：https://tsch.js.org/28143/zh-CN
*/

/* _____________ 你的代码 _____________ */

type OptionalUndefined<T, Props> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalUndefined<{ value: string | undefined }, 'value'>, { value?: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string, desc: string }, 'value'>, { value: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string }, 'value'>, { value?: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string | undefined }, 'value'>, { value?: string | undefined, desc: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string }, 'value' | 'desc'>, { value?: string, desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined, desc: string | undefined }>, { value?: string, desc?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }, 'value'>, { value?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }>, { value?: string }>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/28143/answer/zh-CN
  > 查看解答：https://tsch.js.org/28143/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
