<!--info-header-start--><h1>OptionalUndefined <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> </h1><blockquote><p>by Jesus The Hun <a href="https://github.com/JesusTheHun" target="_blank">@JesusTheHun</a></p></blockquote><p><a href="https://tsch.js.org/28143/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente o tipo de utilitário `OptionalUndefined<T, Props>` que transforma todas as propriedades de `T` que podem ser `undefined` em propriedades opcionais. Além disso, um segundo `Props` genérico opcional pode ser passado para restringir as propriedades que podem ser alteradas.

```ts
OptionalUndefined<{ value: string | undefined, description: string }>
// { value?: string | undefined; description: string }

OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
// { value: string | undefined; description?: string | undefined, author?: string | undefined }
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/28143/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/28143/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->