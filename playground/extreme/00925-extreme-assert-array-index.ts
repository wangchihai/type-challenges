/*
  925 - Assert Array Index
  -------
  by null (@uid11) #地狱 #array

  ### 题目

  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。

  有时我们想使用带有索引的老式 `for` 循环来遍历数组，但在这种情况下，TypeScript 不会以任何方式检查我们是否正在访问数组的真实索引处的元素（不超过数组的长度）数组），并且我们没有使用任意数字作为索引，或另一个数组的索引（对于嵌套循环，用于遍历矩阵或图形）：
  ```ts
  const matrix = [
      [3, 4],
      [5, 6],
      [7, 8],
  ];

  // This example contains no type errors when the noUncheckedIndexedAccess option is off.
  for (let i = 0; i < matrix.length; i += 1) {
      const columns: number[] = matrix[i];

      for (let j = 0; j < columns.length; j += 1) {
          const current: number = columns[i]; // oops! i instead of j

          console.log(
              current.toFixed(), // TypeError: Cannot read property 'toFixed' of undefined
          );
      }
  }
  ```

  您可以启用 [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) 选项（在 `tsconfig.json` 中），但是每次访问数组元素时，您都需要检查该元素是否存在，即有点冗长和不方便，特别是在这样的 `for` 遍历的情况下，我们确信索引不会超过数组的长度：
  ```ts
  const numbers = [5, 7];

  for (let i = 0; i < numbers.length; i += 1) {
      const current = numbers[i];

      if (current !== undefined) {
          console.log(current.toFixed());
      }
  }
  ```

  编写一个可应用于任何 `array`（具有任意唯一字符串 `key`，需要在类型级别区分数组）的 `assert` 函数 `assertArrayIndex(array, key)`，以允许仅通过从数组获取的索引来访问该数组的元素特殊泛型类型 `Index<typeof array>` （此功能需要在 `tsconfig.json` 中启用 [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) 选项）：
  ```ts
  const numbers = [5, 7];

  assertArrayIndex(numbers, 'numbers');

  for (let i = 0 as Index<typeof numbers>; i < numbers.length; i += 1) {
      console.log(numbers[i].toFixed());
  }
  ```

  当通过这样的索引访问时，必须保证数组中的某个元素存在，而当通过任何其他索引访问数组时，则没有这样的保证（该元素可能不存在）：
  ```ts
  const matrix = [
      [3, 4],
      [5, 6],
      [7, 8],
  ];

  assertArrayIndex(matrix, 'rows');

  let sum = 0;

  for (let i = 0 as Index<typeof matrix>; i < matrix.length; i += 1) {
      const columns: number[] = matrix[i];

      // @ts-expect-error: number | undefined in not assignable to number
      const x: number[] = matrix[0];

      assertArrayIndex(columns, 'columns');

      for (let j = 0 as Index<typeof columns>; j < columns.length; j += 1) {
          sum += columns[j];

          // @ts-expect-error: number | undefined in not assignable to number
          const y: number = columns[i];

          // @ts-expect-error: number | undefined in not assignable to number
          const z: number = columns[0];

          // @ts-expect-error: number[] | undefined in not assignable to number[]
          const u: number[] = matrix[j];
      }
  }
  ```

  不能在元组上调用 `assertArrayIndex` 函数（因为元素的访问已经在其中明确键入）：
  ```ts
  const tuple = [5, 7] as const;

  // @ts-expect-error
  assertArrayIndex(tuple, 'tuple');
  ```

  （建议的 API 的其他设计注意事项：[#925](https://github.com/type-challenges/type-challenges/issues/925#issuecomment-780889329)。）

  > 在 Github 上查看：https://tsch.js.org/925/zh-CN
*/

/* _____________ 你的代码 _____________ */

function assertArrayIndex(array: readonly unknown[], key: string) {}

type Index<Array> = any

/* _____________ 测试用例 _____________ */
const matrix = [
  [3, 4],
  [5, 6],
  [7, 8],
]

assertArrayIndex(matrix, 'rows')

let sum = 0

for (let i = 0 as Index<typeof matrix>; i < matrix.length; i += 1) {
  const columns: number[] = matrix[i]

  // @ts-expect-error: number | undefined in not assignable to number
  const x: number[] = matrix[0]

  assertArrayIndex(columns, 'columns')

  for (let j = 0 as Index<typeof columns>; j < columns.length; j += 1) {
    sum += columns[j]

    // @ts-expect-error: number | undefined in not assignable to number
    const y: number = columns[i]

    // @ts-expect-error: number | undefined in not assignable to number
    const z: number = columns[0]

    // @ts-expect-error: number[] | undefined in not assignable to number[]
    const u: number[] = matrix[j]
  }
}

const a: string[] = []

assertArrayIndex(a, 'a')

for (let p = 0 as Index<typeof a>; p < a.length; p += 1) {
  const value: string = a[p]

  // @ts-expect-error: string | undefined is not assignable to string
  const z: string = a[2]
}

a.push('qux')
// @ts-expect-error: number is not assignable to string
a.push(3)

for (const value of a) {
  const other: string = value
}

const b: number[] = []

assertArrayIndex(b, 'b')

for (let p = 0 as Index<typeof a>; p < b.length; p += 1) {
  // @ts-expect-error: number | undefined is not assignable to string
  const value: string = b[p]
}

const c: string[] = []

assertArrayIndex(c, 'c')

for (let p = 0; p < c.length; p += 1) {
  // @ts-expect-error: string | undefined is not assignable to string
  let value: string = c[p]

  // @ts-expect-error: string | undefined is not assignable to string
  value = c[0 as Index<typeof a>]
}

const d: readonly number[] = []

assertArrayIndex(d, 'd')

for (let p = 0 as Index<typeof d>; p < d.length; p += 1) {
  const value: number = d[p]

  // @ts-expect-error: only permits reading
  d[2] = 3
}

// @ts-expect-error: push does not exist on readonly
d.push(3)

const e: [number] = [0]

// @ts-expect-error: [number] is not assignable to never
assertArrayIndex(e, 'e')

const f: readonly [boolean] = [false]

// @ts-expect-error: [boolean] is not assignable to never
assertArrayIndex(f, 'f')

const tuple = [5, 7] as const

// @ts-expect-error: readonly [5, 7] is not assignable to never
assertArrayIndex(tuple, 'tuple')

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/925/answer/zh-CN
  > 查看解答：https://tsch.js.org/925/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
