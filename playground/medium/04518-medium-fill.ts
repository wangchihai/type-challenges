/*
  4518 - Fill
  -------
  by キリサメ qianxi (@qianxi0410) #中等 #tuple

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  `Fill`，一个常见的 JavaScript 函数，现在让我们用类型来实现它。
  `Fill<T, N, Start?, End?>`，可以看到，`Fill`接受四种类型的参数，其中`T`和`N`是必需参数，`Start`和`End`是可选参数。
  这些参数的要求是：`T` 必须是 `tuple`，`N` 可以是任何类型的值，`Start` 和 `End` 必须是大于或等于 0 的整数。

  ```ts
  type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
  ```
  为了模拟真实的功能，测试中可能会包含一些边界条件，希望您能喜欢:)

  > 在 Github 上查看：https://tsch.js.org/4518/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4518/answer/zh-CN
  > 查看解答：https://tsch.js.org/4518/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
