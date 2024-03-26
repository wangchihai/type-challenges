/*
  553 - Deep object to unique
  -------
  by null (@uid11) #困难 #deep

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  TypeScript 具有结构类型系统，但有时您希望函数仅接受一些先前定义良好的唯一对象（如在名义类型系统中），而不是任何具有所需字段的对象。

  创建一个类型，该类型接受一个对象并使其及其中的所有深层嵌套对象唯一，同时保留所有对象的字符串和数字键以及这些键上的所有属性的值。

  原始类型和生成的唯一类型必须可相互分配，但不能完全相同。

  例如，

  ```ts
  import { Equal } from "@type-challenges/utils"

  type Foo = { foo: 2; bar: { 0: 1 }; baz: { 0: 1 } }

  type UniqFoo = DeepObjectToUniq<Foo>

  declare let foo: Foo
  declare let uniqFoo: UniqFoo

  uniqFoo = foo // ok
  foo = uniqFoo // ok

  type T0 = Equal<UniqFoo, Foo> // false
  type T1 = UniqFoo["foo"] // 2
  type T2 = Equal<UniqFoo["bar"], UniqFoo["baz"]> // false
  type T3 = UniqFoo["bar"][0] // 1
  type T4 = Equal<keyof Foo & string, keyof UniqFoo & string> // true
  ```

  > 在 Github 上查看：https://tsch.js.org/553/zh-CN
*/

/* _____________ 你的代码 _____________ */

type DeepObjectToUniq<O extends object> = any

/* _____________ 测试用例 _____________ */
import type { Equal, IsFalse, IsTrue } from '@type-challenges/utils'

type Quz = { quz: 4 }

type Foo = { foo: 2, baz: Quz, bar: Quz }
type Bar = { foo: 2, baz: Quz, bar: Quz & { quzz?: 0 } }

type UniqQuz = DeepObjectToUniq<Quz>
type UniqFoo = DeepObjectToUniq<Foo>
type UniqBar = DeepObjectToUniq<Bar>

declare let foo: Foo
declare let uniqFoo: UniqFoo

uniqFoo = foo
foo = uniqFoo

type cases = [
  IsFalse<Equal<UniqQuz, Quz>>,
  IsFalse<Equal<UniqFoo, Foo>>,
  IsTrue<Equal<UniqFoo['foo'], Foo['foo']>>,
  IsTrue<Equal<UniqFoo['bar']['quz'], Foo['bar']['quz']>>,
  IsFalse<Equal<UniqQuz, UniqFoo['baz']>>,
  IsFalse<Equal<UniqFoo['bar'], UniqFoo['baz']>>,
  IsFalse<Equal<UniqBar['baz'], UniqFoo['baz']>>,
  IsTrue<Equal<keyof UniqBar['baz'], keyof UniqFoo['baz']>>,
  IsTrue<Equal<keyof Foo, keyof UniqFoo & string>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/553/answer/zh-CN
  > 查看解答：https://tsch.js.org/553/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
