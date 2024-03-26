/*
  147 - C-printf Parser
  -------
  by Pig Fang (@g-plane) #困难 #template-literal

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  C语言中有一个函数：`printf`。这个函数允许我们打印一些带有格式的东西。像这样：

  ```c
  printf("The result is %d.", 42);
  ```

  此挑战要求您解析输入字符串并提取格式占位符，例如 `%d` 和 `%f`。例如，如果输入字符串是`"The result is %d."`，则解析结果是元组`['dec']`。

  这是映射：

  ```typescript
  type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
  }
  ```

  > 在 Github 上查看：https://tsch.js.org/147/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/147/answer/zh-CN
  > 查看解答：https://tsch.js.org/147/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
