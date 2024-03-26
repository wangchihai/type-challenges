/*
  1097 - IsUnion
  -------
  by null (@bencor) #中等 #union

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现类型 `IsUnion`，它接受输入类型 `T` 并返回 `T` 是否解析为联合类型。

  例如：

  ```ts
  type case1 = IsUnion<string> // false
  type case2 = IsUnion<string | number> // true
  type case3 = IsUnion<[string | number]> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/1097/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsUnion<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/1097/answer/zh-CN
  > 查看解答：https://tsch.js.org/1097/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
