/*
  847 - String Join
  -------
  by Matt Davis (@tl-matt-davis) #困难

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  创建一个类型安全的字符串连接实用程序，可以像这样使用：

  ```ts
  const hyphenJoiner = join('-')
  const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
  ```

  或者：
  ```ts
  join('#')('a', 'b', 'c') // = 'a#b#c'
  ```

  当我们传递一个空分隔符（即“”）进行连接时，我们应该按原样连接字符串，即：
  ```ts
  join('')('a', 'b', 'c') // = 'abc'
  ```

  当只传递一项时，我们应该返回原始项（不添加任何分隔符）：
  ```ts
  join('-')('a') // = 'a'
  ```

  > 在 Github 上查看：https://tsch.js.org/847/zh-CN
*/

/* _____________ 你的代码 _____________ */

declare function join(delimiter: any): (...parts: any[]) => any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// Edge cases
const noCharsOutput = join('-')()
const oneCharOutput = join('-')('a')
const noDelimiterOutput = join('')('a', 'b', 'c')

// Regular cases
const hyphenOutput = join('-')('a', 'b', 'c')
const hashOutput = join('#')('a', 'b', 'c')
const twoCharOutput = join('-')('a', 'b')
const longOutput = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')

type cases = [
  Expect<Equal<typeof noCharsOutput, ''>>,
  Expect<Equal<typeof oneCharOutput, 'a'>>,
  Expect<Equal<typeof noDelimiterOutput, 'abc'>>,
  Expect<Equal<typeof twoCharOutput, 'a-b'>>,
  Expect<Equal<typeof hyphenOutput, 'a-b-c'>>,
  Expect<Equal<typeof hashOutput, 'a#b#c'>>,
  Expect<Equal<typeof longOutput, 'a-b-c-d-e-f-g-h'>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/847/answer/zh-CN
  > 查看解答：https://tsch.js.org/847/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
