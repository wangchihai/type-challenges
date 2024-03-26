<!--info-header-start--><h1>Vue Basic Props <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/213/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

**Este desafio continua a partir de [6 - Simple Vue](//tsch.js.org/6). Você deve concluí-lo primeiro e modificar seu código com base nele para iniciar este desafio**.

Além do Simple Vue, agora temos um novo campo `props` nas opções. Esta é uma versão simplificada da opção `props` do Vue. Aqui estão algumas das regras.

`props` é um objeto contendo cada campo como a chave dos adereços reais injetados em `this`. Os adereços injetados estarão acessíveis em todo o contexto, incluindo `data`, `computed` e `methods`.

Uma prop será definida por um construtor ou por um objeto com um campo `type` contendo construtor(es).

Por exemplo

```js
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}
```

deve ser inferido para `type Props = { foo: boolean }`.

Ao passar vários construtores, o tipo deve ser inferido para uma união.

```ts
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }
```

Quando um objeto vazio é passado, a chave deve ser inferida para `any`.

Para casos mais específicos, verifique a seção Casos de Teste.

> `required`, `default` e adereços de array no Vue não são considerados neste desafio.

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/213/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/213/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <hr><h3>Desafios Relacionados</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-6%E3%83%BBSimple%20Vue-de3d37" alt="6・Simple Vue"/></a> <!--info-footer-end-->