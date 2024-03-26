/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #困难

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现类型 `ValidDate`，它接受输入类型 T 并返回 T 是否为有效日期。

  **不考虑闰年**

  祝你好运！

  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/9155/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ValidDate<T extends string> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/9155/answer/zh-CN
  > 查看解答：https://tsch.js.org/9155/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
