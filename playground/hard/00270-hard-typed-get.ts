/*
  270 - Typed Get
  -------
  by Anthony Fu (@antfu) #困难 #utils #template-literal

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  lodash 中的 [`get` 函数](https://lodash.com/docs/4.17.15#get) 是一个非常方便的帮助器，用于访问 JavaScript 中的嵌套值。然而，当我们使用 TypeScript 时，使用这样的函数会让你丢失类型信息。借助 TS 4.1 即将推出的[模板文字类型](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types) 功能，正确键入 `get` 成为可能。你能实施吗？

  例如，

  ```ts
  type Data = {
    foo: {
      bar: {
        value: 'foobar',
        count: 6,
      },
      included: true,
    },
    hello: 'world'
  }

  type A = Get<Data, 'hello'> // 'world'
  type B = Get<Data, 'foo.bar.count'> // 6
  type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
  ```

  此挑战不需要访问数组。

  > 在 Github 上查看：https://tsch.js.org/270/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Get<T, K> = string

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar', count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  'foo.baz': false
  hello: 'world'
}

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/270/answer/zh-CN
  > 查看解答：https://tsch.js.org/270/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
