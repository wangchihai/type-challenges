/*
  2822 - Split
  -------
  by Andrea Simone Costa (@jfet97) #困难 #string #split #array #tuple

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  众所周知的 `split()` 方法通过查找分隔符将字符串拆分为子字符串数组，并返回新数组。此挑战的目标是通过使用分隔符来分割字符串，但在类型系统中！

  例如：

  ```ts
  type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
  ```

  > 在 Github 上查看：https://tsch.js.org/2822/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Split<S extends string, SEP extends string> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Split<'Hi! How are you?'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'The sine in cosine', 'in'>, ['The s', 'e ', ' cos', 'e']>>,
  Expect<Equal<Split<'Never say never, forever and ever.', 'ver'>, ['Ne', ' say ne', ', fore', ' and e', '.']>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<''>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2822/answer/zh-CN
  > 查看解答：https://tsch.js.org/2822/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
