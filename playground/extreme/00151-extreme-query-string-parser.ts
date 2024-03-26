/*
  151 - Query String Parser
  -------
  by Pig Fang (@g-plane) #地狱 #template-literal

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  您需要实现一个类型级解析器来将 URL 查询字符串解析为对象文字类型。

  一些详细要求：

  - 查询字符串中键的值可以被忽略，但仍会解析为 `true`。例如，`'key'` 没有值，因此解析器结果是 `{ key: true }`。
  - 重复的密钥必须合并为一个。如果存在具有相同键的不同值，则必须将值合并为元组类型。
  - 当一个键只有一个值时，该值不能包装到元组类型中。
  - 如果具有相同键的值出现多次，则必须将其视为一次。例如，`key=value&key=value` 必须仅被视为 `key=value`。

  > 在 Github 上查看：https://tsch.js.org/151/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ParseQueryString = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParseQueryString<''>, {}>>,
  Expect<Equal<ParseQueryString<'k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k1'>, { k1: true }>>,
  Expect<Equal<ParseQueryString<'k1&k2'>, { k1: true, k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1'>, { k1: 'v1' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v2'>, { k1: ['v1', 'v2'] }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2'>, { k1: 'v1', k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2&k1=v2'>, { k1: ['v1', 'v2'], k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2'>, { k1: 'v1', k2: true }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v1'>, { k1: 'v1' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1=v2&k1=v1'>, { k1: ['v1', 'v2'] }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v1&k1=v2&k1=v1'>, { k1: ['v1', 'v2'], k2: 'v1' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k2=v2&k1=v2&k1=v3'>, { k1: ['v1', 'v2', 'v3'], k2: 'v2' }>>,
  Expect<Equal<ParseQueryString<'k1=v1&k1'>, { k1: ['v1', true] }>>,
  Expect<Equal<ParseQueryString<'k1&k1=v1'>, { k1: [true, 'v1'] }>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/151/answer/zh-CN
  > 查看解答：https://tsch.js.org/151/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
