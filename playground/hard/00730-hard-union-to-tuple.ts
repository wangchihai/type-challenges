/*
  730 - Union to Tuple
  -------
  by Sg (@suica) #困难 #union #tuple #infer

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现一个类型 `UnionToTuple`，将联合转换为元组。

  众所周知，联合是一种无序结构，但元组是有序结构，这意味着当创建或转换联合时，我们不应该预先假设一个联合的项之间会保留任何顺序。

  因此，在这个挑战中，**输出元组中元素的任何排列都是可接受的**。

  您的类型应解析为以下两种类型之一，但***不是***它们的并集！
  ```ts
  UnionToTuple<1>           // [1], and correct
  UnionToTuple<'any' | 'a'> // ['any','a'], and correct
  ```
  或者
  ```ts
  UnionToTuple<'any' | 'a'> // ['a','any'], and correct
  ```
  它不应该是所有可接受的元组的并集......
  ```ts
  UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect
  ```


  并且联盟可能会崩溃，这意味着某些类型可以吸收其他类型（或被其他类型吸收），并且没有办法阻止这种吸收。请参阅以下示例：
  ```ts
  Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // will always be a true
  Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // will always be a true
  Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // will always be a true
  Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // will always be a true
  ```

  > 在 Github 上查看：https://tsch.js.org/730/zh-CN
*/

/* _____________ 你的代码 _____________ */

type UnionToTuple<T> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/730/answer/zh-CN
  > 查看解答：https://tsch.js.org/730/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
