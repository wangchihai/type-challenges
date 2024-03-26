/*
  4037 - IsPalindrome
  -------
  by jiangshan (@jiangshanmeta) #困难 #string

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现类型 ```IsPalindrome<T>``` 来检查字符串或数字是否是回文。

  例如：

  ```typescript
  IsPalindrome<'abc'> // false
  IsPalindrome<121> // true
  ```

  > 在 Github 上查看：https://tsch.js.org/4037/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsPalindrome<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abba'>, true>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<2332>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4037/answer/zh-CN
  > 查看解答：https://tsch.js.org/4037/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
