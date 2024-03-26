/*
  6228 - JSON Parser
  -------
  by Hydration (@hydrati) #地狱 #template-literal #json

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  您需要实现一个类型级部分解析器来将 JSON 字符串解析为对象文字类型。

  要求：
   - JSON 中的 `Numbers` 和 `Unicode escape (\uxxxx)` 可以忽略。你不需要解析它们。

  > 在 Github 上查看：https://tsch.js.org/6228/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type Token = any
type ParseResult<T, K extends Token[]> = [T, K]
type Tokenize<T extends string, S extends Token[] = []> = Token[]
type ParseLiteral<T extends Token[]> = ParseResult<any, T>

type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<(
    Parse<`
      {
        "a": "b", 
        "b": false, 
        "c": [true, false, "hello", {
          "a": "b", 
          "b": false
        }], 
        "nil": null
      }
    `>
  ), (
    {
      nil: null
      c: [true, false, 'hello', {
        a: 'b'
        b: false
      }]
      b: false
      a: 'b'
    }

  )>>,
  Expect<Equal<Parse<'{}'>, {}>>,

  Expect<Equal<Parse<'[]'>, []>>,

  Expect<Equal<Parse<'[1]'>, never>>,

  Expect<Equal<Parse<'true'>, true>>,

  Expect<Equal<
  Parse<'["Hello", true, false, null]'>,
  ['Hello', true, false, null]
  >>,

  Expect<Equal<
  (
    Parse<`
      {
        "hello\\r\\n\\b\\f": "world"
      }`>
  ), (
    {
      'hello\r\n\b\f': 'world'
    }
  )
  >>,

  Expect<Equal<Parse<'{ 1: "world" }'>, never>>,

  Expect<Equal<Parse<`{ "hello
  
  world": 123 }`>, never>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/6228/answer/zh-CN
  > 查看解答：https://tsch.js.org/6228/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
