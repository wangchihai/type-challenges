<!--info-header-start--><h1>Assert Array Index <img src="https://img.shields.io/badge/-%E5%9C%B0%E7%8B%B1-b11b8d" alt="地狱"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/925/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

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

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/925/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/925/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->