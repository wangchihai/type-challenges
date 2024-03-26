<!--info-header-start--><h1>DistributeUnions <img src="https://img.shields.io/badge/-extremo-b11b8d" alt="extremo"/> </h1><blockquote><p>by Gabriel Vergnaud <a href="https://github.com/gvergnaud" target="_blank">@gvergnaud</a></p></blockquote><p><a href="https://tsch.js.org/869/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente um tipo `Distribute Unions`, que transforma um tipo de estrutura de dados contendo tipos de união em uma união de
todos os tipos possíveis de estruturas de dados permitidas que não contêm nenhuma união. A estrutura de dados pode ser qualquer
combinação de objetos e tuplas em qualquer nível de aninhamento.

Por exemplo:

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

Para contextualizar, esse tipo pode ser muito útil se você quiser excluir um caso em estruturas de dados profundas:

```ts
type ExcludeDeep<A, B> = Exclude<DistributeUnions<A>, B>

type T0 = ExcludeDeep<[{ value: 'a' | 'b' },  { x: { y: 2 | 3  } }] | 17, [{ value: 'a' },  any]>
//  =>  | [{ value: 'b' },  { x: { y: 2  } }]
//      | [{ value: 'b' },  { x: { y: 3  } }]
//      | 17
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/869/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/869/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->