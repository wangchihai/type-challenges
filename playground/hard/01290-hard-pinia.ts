/*
  1290 - Pinia
  -------
  by Pig Fang (@g-plane) #困难 #this #vue

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  创建一个类型级函数，其类型类似于 [Pinia](https://github.com/posva/pinia) 库。您实际上不需要实现函数，只需添加类型即可。

  ＃＃＃ 概述

  该函数仅接收一个类型为对象的参数。该对象包含 4 个属性：

  - `id` - 只是一个字符串（必需）
  - `state` - 将返回一个对象作为商店状态的函数（必需）
  - `getters` - 一个对象，其方法类似于 Vue 的计算值或 Vuex 的 getter，详细信息如下（可选）
  - `actions` - 具有可以产生副作用和改变状态的方法的对象，详细信息如下（可选）

  ###吸气剂

  当您像这样定义商店时：

  ```typescript
  const store = defineStore({
    // ...other required fields
    getters: {
      getSomething() {
        return 'xxx'
      }
    }
  })
  ```

  你应该像这样使用它：

  ```typescript
  store.getSomething
  ```

  代替：

  ```typescript
  store.getSomething()  // error
  ```

  此外，getter 可以通过 `this` 访问状态和/或其他 getter，但状态是只读的。

  ### 行动

  当您像这样定义商店时：

  ```typescript
  const store = defineStore({
    // ...other required fields
    actions: {
      doSideEffect() {
        this.xxx = 'xxx'
        return 'ok'
      }
    }
  })
  ```

  使用它只是调用它：

  ```typescript
  const returnValue = store.doSideEffect()
  ```

  操作可以返回任何值或不返回任何值，并且可以接收任意数量的不同类型的参数。
  参数类型和返回类型不能丢失，这意味着类型检查必须在调用方可用。

  状态可以通过 `this` 访问和改变。 Getter 可以通过 `this` 访问，但它们是只读的。

  > 在 Github 上查看：https://tsch.js.org/1290/zh-CN
*/

/* _____________ 你的代码 _____________ */

declare function defineStore(store: unknown): unknown

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const store = defineStore({
  id: '',
  state: () => ({
    num: 0,
    str: '',
  }),
  getters: {
    stringifiedNum() {
      // @ts-expect-error
      this.num += 1

      return this.num.toString()
    },
    parsedNum() {
      return Number.parseInt(this.stringifiedNum)
    },
  },
  actions: {
    init() {
      this.reset()
      this.increment()
    },
    increment(step = 1) {
      this.num += step
    },
    reset() {
      this.num = 0

      // @ts-expect-error
      this.parsedNum = 0

      return true
    },
    setNum(value: number) {
      this.num = value
    },
  },
})

// @ts-expect-error
store.nopeStateProp
// @ts-expect-error
store.nopeGetter
// @ts-expect-error
store.stringifiedNum()
store.init()
// @ts-expect-error
store.init(0)
store.increment()
store.increment(2)
// @ts-expect-error
store.setNum()
// @ts-expect-error
store.setNum('3')
store.setNum(3)
const r = store.reset()

type _tests = [
  Expect<Equal<typeof store.num, number>>,
  Expect<Equal<typeof store.str, string>>,
  Expect<Equal<typeof store.stringifiedNum, string>>,
  Expect<Equal<typeof store.parsedNum, number>>,
  Expect<Equal<typeof r, true>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/1290/answer/zh-CN
  > 查看解答：https://tsch.js.org/1290/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
