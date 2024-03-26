/*
  2828 - ClassPublicKeys
  -------
  by jiangshan (@jiangshanmeta) #困难 #utils

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现通用 `ClassPublicKeys<T>` ，它返回类的所有公钥。

  例如：

  ```ts
  class A {
    public str: string
    protected num: number
    private bool: boolean
    getNum() {
      return Math.random()
    }
  }

  type publicKeys = ClassPublicKeys<A> // 'str' | 'getNum'
  ```

  > 在 Github 上查看：https://tsch.js.org/2828/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ClassPublicKeys = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }

  getNum() {
    return Math.random()
  }
}

type cases = [
  Expect<Equal<ClassPublicKeys<A>, 'str' | 'getNum'>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2828/answer/zh-CN
  > 查看解答：https://tsch.js.org/2828/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
