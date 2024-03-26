<!--info-header-start--><h1>Assert Array Index <img src="https://img.shields.io/badge/-extremo-b11b8d" alt="extremo"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/925/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Às vezes queremos usar o bom e velho `for`-loop com um índice para percorrer o array, mas neste caso o TypeScript não verifica de forma alguma se estamos acessando os elementos do array em seu índice real (não excedendo o comprimento do array array), e que não estamos usando um número arbitrário como índice, ou índice de outro array (para loops aninhados, para percorrer matrizes ou gráficos):
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

Você pode ativar a opção [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) (em `tsconfig.json`), mas cada vez que acessar um elemento do array, você precisará verificar se esse elemento existe, o que é um tanto detalhado e inconveniente, especialmente porque no caso de tal travessia `for`, temos certeza de que o índice não excede o comprimento do array:
```ts
const numbers = [5, 7];

for (let i = 0; i < numbers.length; i += 1) {
    const current = numbers[i];

    if (current !== undefined) {
        console.log(current.toFixed());
    }
}
```

Escreva uma função `assert` `assertArrayIndex(array, key)` que possa ser aplicada a qualquer `array` (com uma string única arbitrária `key`, que é necessária para distinguir arrays no nível do tipo) para permitir o acesso aos elementos deste array apenas pelo índice obtido do array pelo tipo genérico especial `Index<typeof array>` (esta funcionalidade requer a ativação da opção [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) em `tsconfig.json`):
```ts
const numbers = [5, 7];

assertArrayIndex(numbers, 'numbers');

for (let i = 0 as Index<typeof numbers>; i < numbers.length; i += 1) {
    console.log(numbers[i].toFixed());
}
```

Ao acessar por tal índice, deve-se garantir que existe um elemento no array, e ao acessar um array por quaisquer outros índices, não existe tal garantia (o elemento pode não existir):
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

A função `assertArrayIndex` não pode ser chamada em tuplas (pois o acesso aos elementos já está bem digitado nelas):
```ts
const tuple = [5, 7] as const;

// @ts-expect-error
assertArrayIndex(tuple, 'tuple');
```

(Considerações adicionais de design para a API proposta: [#925](https://github.com/type-challenges/type-challenges/issues/925#issuecomment-780889329).)

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/925/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/925/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->