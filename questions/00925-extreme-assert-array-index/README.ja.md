<!--info-header-start--><h1>Assert Array Index <img src="https://img.shields.io/badge/-%E6%9C%80%E4%B8%8A%E7%B4%9A-b11b8d" alt="最上級"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/925/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

場合によっては、配列を走査するためにインデックスを指定した古き良き `for` ループを使用したいことがありますが、この場合、TypeScript は実際のインデックス (配列の長さを超えない) で配列の要素にアクセスしているかどうかをまったくチェックしません。配列）、インデックスとして任意の数値を使用していないこと、または別の配列のインデックス（ネストされたループの場合、行列またはグラフの走査の場合）を使用していないことを確認します。
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

[noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) オプション (`tsconfig.json` 内) を有効にすることはできますが、配列要素にアクセスするたびに、この要素が存在することを確認する必要があります。特にこのような `for` トラバーサルの場合、インデックスが配列の長さを超えないことが確実であるため、やや冗長で不便です。
```ts
const numbers = [5, 7];

for (let i = 0; i < numbers.length; i += 1) {
    const current = numbers[i];

    if (current !== undefined) {
        console.log(current.toFixed());
    }
}
```

任意の `array` (型レベルで配列を区別するために必要な任意の一意の文字列 `key` を使用) に適用できる `assert` 関数 `assertArrayIndex(array, key)` を作成して、配列から取得したインデックスによってのみこの配列の要素にアクセスできるようにします。特別なジェネリック型 `Index<typeof array>` (この機能には、`tsconfig.json` の [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) オプションを有効にする必要があります):
```ts
const numbers = [5, 7];

assertArrayIndex(numbers, 'numbers');

for (let i = 0 as Index<typeof numbers>; i < numbers.length; i += 1) {
    console.log(numbers[i].toFixed());
}
```

このようなインデックスでアクセスする場合、配列内の要素が存在することが保証されなければなりませんが、他のインデックスで配列にアクセスする場合、そのような保証はありません (要素が存在しない可能性があります)。
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

`assertArrayIndex` 関数はタプルに対して呼び出すことはできません (要素へのアクセスがすでに適切に型付けされているため)。
```ts
const tuple = [5, 7] as const;

// @ts-expect-error
assertArrayIndex(tuple, 'tuple');
```

(提案された API に関する追加の設計上の考慮事項: [#925](https://github.com/type-challenges/type-challenges/issues/925#issuecomment-780889329)。)

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/925/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/925/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->