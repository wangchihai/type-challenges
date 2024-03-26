/*
  14080 - FizzBuzz
  -------
  by Lee Crosby (@Cygnut) #困难 #array #math #infer

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  FizzBu​​zz 问题是编码面试中的一个经典测试。任务很简单：

  打印整数 1 到 N，除了：

  - 如果一个整数能被 3 整除，则打印“Fizz”；
  - 如果一个整数可以被 5 整除，则打印“Buzz”；
  - 如果一个整数可以被 3 和 5 整除，则打印“FizzBu​​zz”。

  例如，对于 N = 20，输出应为：
  `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz`

  在下面的挑战中，我们希望将其生成为字符串文字数组。

  对于较大的 N 值，您需要确保生成的任何类型都能有效执行（例如，通过
  正确使用尾部调用优化进行递归）。

  > 在 Github 上查看：https://tsch.js.org/14080/zh-CN
*/

/* _____________ 你的代码 _____________ */

type FizzBuzz<N extends number> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FizzBuzz<1>, ['1']>>,
  Expect<Equal<FizzBuzz<5>, ['1', '2', 'Fizz', '4', 'Buzz']>>,
  Expect<Equal<FizzBuzz<20>, [
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz',
    '16',
    '17',
    'Fizz',
    '19',
    'Buzz',
  ]>>,
  Expect<Equal<FizzBuzz<100>, [
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz',
    '16',
    '17',
    'Fizz',
    '19',
    'Buzz',
    'Fizz',
    '22',
    '23',
    'Fizz',
    'Buzz',
    '26',
    'Fizz',
    '28',
    '29',
    'FizzBuzz',
    '31',
    '32',
    'Fizz',
    '34',
    'Buzz',
    'Fizz',
    '37',
    '38',
    'Fizz',
    'Buzz',
    '41',
    'Fizz',
    '43',
    '44',
    'FizzBuzz',
    '46',
    '47',
    'Fizz',
    '49',
    'Buzz',
    'Fizz',
    '52',
    '53',
    'Fizz',
    'Buzz',
    '56',
    'Fizz',
    '58',
    '59',
    'FizzBuzz',
    '61',
    '62',
    'Fizz',
    '64',
    'Buzz',
    'Fizz',
    '67',
    '68',
    'Fizz',
    'Buzz',
    '71',
    'Fizz',
    '73',
    '74',
    'FizzBuzz',
    '76',
    '77',
    'Fizz',
    '79',
    'Buzz',
    'Fizz',
    '82',
    '83',
    'Fizz',
    'Buzz',
    '86',
    'Fizz',
    '88',
    '89',
    'FizzBuzz',
    '91',
    '92',
    'Fizz',
    '94',
    'Buzz',
    'Fizz',
    '97',
    '98',
    'Fizz',
    'Buzz',
  ]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/14080/answer/zh-CN
  > 查看解答：https://tsch.js.org/14080/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
