/*
  274 - Integers Comparator
  -------
  by Pig Fang (@g-plane) #地狱 #template-literal #math

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现类型级整数比较器。我们提供了一个枚举来指示比较结果，如下所示：

  - 如果 `a` 大于 `b`，则类型应为 `Comparison.Greater`。
  - 如果 `a` 和 `b` 相等，则类型应为 `Comparison.Equal`。
  - 如果 `a` 低于 `b`，则类型应为 `Comparison.Lower`。

  **注意 `a` 和 `b` 可以是正整数或负整数或零，甚至一个为正而另一个为负。**

  > 在 Github 上查看：https://tsch.js.org/274/zh-CN
*/

/* _____________ 你的代码 _____________ */

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Comparator<A extends number, B extends number> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
  Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
  Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
  Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
  Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
  Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
  Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
  Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
  Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
  Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,

  Expect<Equal<Comparator<1, 100>, Comparison.Lower>>,
  Expect<Equal<Comparator<100, 1>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, 1>, Comparison.Lower>>,
  Expect<Equal<Comparator<1, -100>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, -1>, Comparison.Lower>>,
  Expect<Equal<Comparator<-1, -100>, Comparison.Greater>>,

  // Extra tests if you like to challenge yourself!
  Expect<Equal<Comparator<9007199254740992, 9007199254740992>, Comparison.Equal>>,
  Expect<Equal<Comparator<-9007199254740992, -9007199254740992>, Comparison.Equal>>,
  Expect<Equal<Comparator<9007199254740991, 9007199254740992>, Comparison.Lower>>,
  Expect<Equal<Comparator<9007199254740992, 9007199254740991>, Comparison.Greater>>,
  Expect<Equal<Comparator<-9007199254740992, -9007199254740991>, Comparison.Lower>>,
  Expect<Equal<Comparator<-9007199254740991, -9007199254740992>, Comparison.Greater>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/274/answer/zh-CN
  > 查看解答：https://tsch.js.org/274/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
