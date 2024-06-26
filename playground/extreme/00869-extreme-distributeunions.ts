/*
  869 - DistributeUnions
  -------
  by Gabriel Vergnaud (@gvergnaud) #地狱

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现类型 `Distribute Unions`，将包含联合类型的数据结构类型转换为联合
  不包含任何联合的所有可能的允许数据结构类型。数据结构可以是任意的
  任何嵌套级别上的对象和元组的组合。

  例如：

  ```ts
  type T1 = DistributeUnions<[1 | 2, 'a' | 'b']>
  // =>   [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']

  type T2 = DistributeUnions<{ type: 'a', value: number | string } | { type: 'b', value: boolean }>
  //  =>  | { type 'a', value: number }
  //      | { type 'a', value: string }
  //      | { type 'b', value: boolean }

  type T3 = DistributeUnions<[{ value: 'a' | 'b' },  { x: { y: 2 | 3  } }] | 17>
  //  =>  | [{ value: 'a' },  { x: { y: 2  } }]
  //      | [{ value: 'a' },  { x: { y: 3  } }]
  //      | [{ value: 'b' },  { x: { y: 2  } }]
  //      | [{ value: 'b' },  { x: { y: 3  } }]
  //      | 17
  ```

  对于上下文，如果您想排除深层数据结构的情况，此类型可能非常有用：

  ```ts
  type ExcludeDeep<A, B> = Exclude<DistributeUnions<A>, B>

  type T0 = ExcludeDeep<[{ value: 'a' | 'b' },  { x: { y: 2 | 3  } }] | 17, [{ value: 'a' },  any]>
  //  =>  | [{ value: 'b' },  { x: { y: 2  } }]
  //      | [{ value: 'b' },  { x: { y: 3  } }]
  //      | 17
  ```

  > 在 Github 上查看：https://tsch.js.org/869/zh-CN
*/

/* _____________ 你的代码 _____________ */

type DistributeUnions<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Already distributed unions should stay the same:
  Expect<Equal<DistributeUnions<1>, 1>>,
  Expect<Equal<DistributeUnions<string>, string>>,
  Expect<Equal<DistributeUnions<1 | 2>, 1 | 2>>,
  Expect<Equal<DistributeUnions<'b' | { type: 'a' } | [1]>, 'b' | { type: 'a' } | [1]>>,
  // tuples:
  Expect<Equal<DistributeUnions<[1 | 2, 3]>, [1, 3] | [2, 3]>>,
  Expect<Equal<DistributeUnions<[1 | 2, 'a' | 'b']>, [1, 'a'] | [1, 'b'] | [2, 'a'] | [2, 'b']>>,
  Expect<
  Equal<
  DistributeUnions<[1 | 2, 'a' | 'b', false | true]>,
  | [1, 'a', false]
  | [1, 'a', true]
  | [1, 'b', false]
  | [1, 'b', true]
  | [2, 'a', false]
  | [2, 'a', true]
  | [2, 'b', false]
  | [2, 'b', true]
  >
  >,
  // objects
  Expect<
  Equal<
  DistributeUnions<{ x: 'a' | 'b', y: 'c' | 'd' }>,
  { x: 'a', y: 'c' } | { x: 'a', y: 'd' } | { x: 'b', y: 'c' } | { x: 'b', y: 'd' }
  >
  >,
  Expect<
  Equal<
  DistributeUnions<{ type: 'a', value: number | string } | { type: 'b', value: boolean }>,
  | { type: 'a', value: string }
  | { type: 'a', value: number }
  | { type: 'b', value: false }
  | { type: 'b', value: true }
  >
  >,
  Expect<
  Equal<
  DistributeUnions<
    | {
      type: 'a'
      option: { kind: 'none' } | { kind: 'some', value: 'x' | 'y' }
    }
    | { type: 'b', msg: string }
  >,
  | { type: 'b', msg: string }
  | { type: 'a', option: { kind: 'none' } }
  | { type: 'a', option: { kind: 'some', value: 'x' } }
  | { type: 'a', option: { kind: 'some', value: 'y' } }
  >
  >,
  // mixed structures:
  Expect<
  Equal<
  DistributeUnions<[false | true, { value: 'a' | 'b' }, { x: { y: 2 | 3 } }]>,
  | [false, { value: 'a' }, { x: { y: 2 } }]
  | [false, { value: 'a' }, { x: { y: 3 } }]
  | [false, { value: 'b' }, { x: { y: 2 } }]
  | [false, { value: 'b' }, { x: { y: 3 } }]
  | [true, { value: 'a' }, { x: { y: 2 } }]
  | [true, { value: 'a' }, { x: { y: 3 } }]
  | [true, { value: 'b' }, { x: { y: 2 } }]
  | [true, { value: 'b' }, { x: { y: 3 } }]
  >
  >,
  Expect<
  Equal<
  DistributeUnions<17 | [10 | { value: 'a' | 'b' }, { x: { y: 2 | 3 } }]>,
  | 17
  | [10, { x: { y: 2 } }]
  | [10, { x: { y: 3 } }]
  | [{ value: 'a' }, { x: { y: 2 } }]
  | [{ value: 'a' }, { x: { y: 3 } }]
  | [{ value: 'b' }, { x: { y: 2 } }]
  | [{ value: 'b' }, { x: { y: 3 } }]
  >
  >,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/869/answer/zh-CN
  > 查看解答：https://tsch.js.org/869/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
