/*
  9160 - Assign
  -------
  by zhangxiaofan (@workkk98) #困难 #object #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  您有一个目标对象和一个源对象数组。您需要将属性从源复制到目标，如果它与源具有相同的属性，则应始终保留源属性，并删除目标属性。 （受到 `Object.assign` API 的启发）

  ＃＃＃ 例子

  ```ts
  type Target = {
    a: 'a'
  }

  type Origin1 = {
    b: 'b'
  }

  // type Result = Assign<Target, [Origin1]>
  type Result = {
    a: 'a'
    b: 'b'
  }
  ```


  ```ts
  type Target = {
    a: 'a'
    d: {
      hi: 'hi'
    }
  }

  type Origin1 = {
    a: 'a1',
    b: 'b'
  }


  type Origin2 = {
    b: 'b2',
    c: 'c'
  }

  type Answer = {
     a: 'a1',
     b: 'b2',
     c: 'c'
     d: {
        hi: 'hi'
    }
  }
  ```

  > 在 Github 上查看：https://tsch.js.org/9160/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Assign<T extends Record<string, unknown>, U> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// case1
type Case1Target = {}

type Case1Origin1 = {
  a: 'a'
}

type Case1Origin2 = {
  b: 'b'
}

type Case1Origin3 = {
  c: 'c'
}

type Case1Answer = {
  a: 'a'
  b: 'b'
  c: 'c'
}

// case2
type Case2Target = {
  a: [1, 2, 3]
}

type Case2Origin1 = {
  a: {
    a1: 'a1'
  }
}

type Case2Origin2 = {
  b: [2, 3, 3]
}

type Case2Answer = {
  a: {
    a1: 'a1'
  }
  b: [2, 3, 3]
}

// case3

type Case3Target = {
  a: 1
  b: ['b']
}

type Case3Origin1 = {
  a: 2
  b: {
    b: 'b'
  }
  c: 'c1'
}

type Case3Origin2 = {
  a: 3
  c: 'c2'
  d: true
}

type Case3Answer = {
  a: 3
  b: {
    b: 'b'
  }
  c: 'c2'
  d: true
}

// case 4
type Case4Target = {
  a: 1
  b: ['b']
}

type Case4Answer = {
  a: 1
  b: ['b']
}

type cases = [
  Expect<Equal<Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>, Case1Answer>>,
  Expect<Equal<Assign<Case2Target, [Case2Origin1, Case2Origin2]>, Case2Answer>>,
  Expect<Equal<Assign<Case3Target, [Case3Origin1, Case3Origin2]>, Case3Answer>>,
  Expect<Equal<Assign<Case4Target, ['', 0]>, Case4Answer>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/9160/answer/zh-CN
  > 查看解答：https://tsch.js.org/9160/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
