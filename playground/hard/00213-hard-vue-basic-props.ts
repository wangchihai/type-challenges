/*
  213 - Vue Basic Props
  -------
  by Anthony Fu (@antfu) #困难 #vue #application

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  **这个挑战是从[6 - Simple Vue](//tsch.js.org/6)开始的，你应该先完成这个挑战，然后根据它修改你的代码来开始这个挑战**。

  除了 Simple Vue 之外，我们现在在选项中还有一个新的 `props` 字段。这是 Vue 的 `props` 选项的简化版本。以下是一些规则。

  `props` 是一个对象，其中包含每个字段作为注入到 `this` 的真实 props 的键。注入的 props 在所有上下文中都可以访问，包括 `data`、`computed` 和 `methods`。

  prop 将由构造函数或具有包含构造函数的 `type` 字段的对象定义。

  例如

  ```js
  props: {
    foo: Boolean
  }
  // or
  props: {
    foo: { type: Boolean }
  }
  ```

  应推断为 `type Props = { foo: boolean }`。

  传递多个构造函数时，应将类型推断为联合。

  ```ts
  props: {
    foo: { type: [Boolean, Number, String] }
  }
  // -->
  type Props = { foo: boolean | number | string }
  ```

  当传递空对象时，键应推断为 `any`。

  对于更具体的案例，请查看测试案例部分。

  > 本次挑战不考虑 Vue 中的 `required`、`default` 和数组 props。

  > 在 Github 上查看：https://tsch.js.org/213/zh-CN
*/

/* _____________ 你的代码 _____________ */

declare function VueBasicProps(options: any): any

/* _____________ 测试用例 _____________ */
import type { Debug, Equal, Expect, IsAny } from '@type-challenges/utils'

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>,
    ]

    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const propE = this.propE
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>,
      ]
    },
  },
})

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/213/answer/zh-CN
  > 查看解答：https://tsch.js.org/213/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
