/*
  8767 - Combination
  -------
  by Homyee King (@HomyeeKing) #中等 #array #application #string

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  给定一个字符串数组，进行排列和组合。
  它对于视频等道具类型也很有用 [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)

  ```ts
  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>
  ```

  > 在 Github 上查看：https://tsch.js.org/8767/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Combination<T extends string[]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>, 'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/8767/answer/zh-CN
  > 查看解答：https://tsch.js.org/8767/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
