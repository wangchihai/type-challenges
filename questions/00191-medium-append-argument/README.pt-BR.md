<!--info-header-start--><h1>Append Argument <img src="https://img.shields.io/badge/-m%C3%A9dio-d9901a" alt="médio"/> <img src="https://img.shields.io/badge/-%23arguments-999" alt="#arguments"/></h1><blockquote><p>by Maciej Sikora <a href="https://github.com/maciejsikora" target="_blank">@maciejsikora</a></p></blockquote><p><a href="https://tsch.js.org/191/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.ko.md" target="_blank"><img src="https://img.shields.io/badge/-%ED%95%9C%EA%B5%AD%EC%96%B4-gray" alt="한국어"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Para determinado tipo de função `Fn` e qualquer tipo `A` (qualquer um neste contexto significa que não restringimos o tipo e não tenho em mente nenhum tipo 😉) crie um tipo genérico que receberá `Fn` como o primeiro argumento, `A` como o segundo, e produzirá o tipo de função `G` que será igual a `Fn`, mas com o argumento anexado `A` como último.

Por exemplo,

```typescript
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number
```

> Esta pergunta foi transferida do [artigo original](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c) por [@maciejsikora](https://github.com/maciejsikora)

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/191/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/191/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->