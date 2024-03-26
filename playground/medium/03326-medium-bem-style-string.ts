/*
  3326 - BEM style string
  -------
  by Songhn (@songhn233) #中等 #template-literal #union #tuple

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  块、元素、修饰符方法 (BEM) 是 CSS 中类的流行命名约定。

  例如，块组件将表示为 `btn`，依赖于块的元素将表示为 `btn__price`，更改块样式的修饰符将表示为 `btn--big` 或 `btn__price--warning`。

  实现 `BEM<B, E, M>` 从这三个参数生成字符串并集。其中 `B` 是字符串文字，`E` 和 `M` 是字符串数组（可以为空）。

  > 在 Github 上查看：https://tsch.js.org/3326/zh-CN
*/

/* _____________ 你的代码 _____________ */

type BEM<B extends string, E extends string[], M extends string[]> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3326/answer/zh-CN
  > 查看解答：https://tsch.js.org/3326/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
