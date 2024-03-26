/*
  651 - Length of String 2
  -------
  by null (@uid11) #困难 #template-literal

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  实现一个类型 `LengthOfString<S>` 来计算模板字符串的长度（如 [298 - 字符串长度](https://tsch.js.org/298) 中所示）：

  ```ts
  type T0 = LengthOfString<"foo"> // 3
  ```

  该类型必须支持几百个字符长的字符串（通常的递归计算字符串长度受到TS中递归函数调用深度的限制，即最多支持45个字符左右的字符串长）。

  > 在 Github 上查看：https://tsch.js.org/651/zh-CN
*/

/* _____________ 你的代码 _____________ */

type LengthOfString<S extends string> = number

/* _____________ 测试用例 _____________ */
import type { Equal, IsTrue } from '@type-challenges/utils'

type cases = [
  IsTrue<Equal<LengthOfString<''>, 0>>,
  IsTrue<Equal<LengthOfString<'1'>, 1>>,
  IsTrue<Equal<LengthOfString<'12'>, 2>>,
  IsTrue<Equal<LengthOfString<'123'>, 3>>,
  IsTrue<Equal<LengthOfString<'1234'>, 4>>,
  IsTrue<Equal<LengthOfString<'12345'>, 5>>,
  IsTrue<Equal<LengthOfString<'123456'>, 6>>,
  IsTrue<Equal<LengthOfString<'1234567'>, 7>>,
  IsTrue<Equal<LengthOfString<'12345678'>, 8>>,
  IsTrue<Equal<LengthOfString<'123456789'>, 9>>,
  IsTrue<Equal<LengthOfString<'1234567890'>, 10>>,
  IsTrue<Equal<LengthOfString<'12345678901'>, 11>>,
  IsTrue<Equal<LengthOfString<'123456789012'>, 12>>,
  IsTrue<Equal<LengthOfString<'1234567890123'>, 13>>,
  IsTrue<Equal<LengthOfString<'12345678901234'>, 14>>,
  IsTrue<Equal<LengthOfString<'123456789012345'>, 15>>,
  IsTrue<Equal<LengthOfString<'1234567890123456'>, 16>>,
  IsTrue<Equal<LengthOfString<'12345678901234567'>, 17>>,
  IsTrue<Equal<LengthOfString<'123456789012345678'>, 18>>,
  IsTrue<Equal<LengthOfString<'1234567890123456789'>, 19>>,
  IsTrue<Equal<LengthOfString<'12345678901234567890'>, 20>>,
  IsTrue<Equal<LengthOfString<'123456789012345678901'>, 21>>,
  IsTrue<Equal<LengthOfString<'1234567890123456789012'>, 22>>,
  IsTrue<Equal<LengthOfString<'12345678901234567890123'>, 23>>,
  IsTrue<Equal<LengthOfString<'aaaaaaaaaaaaggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'>, 272>>,
  IsTrue<Equal<LengthOfString<'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'>, 999>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/651/answer/zh-CN
  > 查看解答：https://tsch.js.org/651/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
