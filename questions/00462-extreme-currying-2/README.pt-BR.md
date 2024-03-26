<!--info-header-start--><h1>Currying 2 <img src="https://img.shields.io/badge/-extremo-b11b8d" alt="extremo"/> </h1><blockquote><p>by Kim <a href="https://github.com/hubvue" target="_blank">@hubvue</a></p></blockquote><p><a href="https://tsch.js.org/462/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

[Currying](https://en.wikipedia.org/wiki/Currying) é a técnica de converter uma função que recebe vários argumentos em uma sequência de funções, cada uma com um único argumento.

Mas em nossa vida diária, argumentos dinâmicos também são comumente usados, por exemplo, a API `Function.bind(this, [...params])`.

```ts
const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)

const result = bindFunc(3) // result: 6
```

Assim, com base em `Currying 1`, precisaríamos ter a versão do argumento dinâmico:

```ts
const add = (a: number, b: number, c: number) => a + b + c
const three = add(1, 1, 1) 

const curriedAdd = DynamicParamsCurrying(add)
const six = curriedAdd(1, 2, 3)
const seven = curriedAdd(1, 2)(4)
const nine = curriedAdd(2)(3)(4)
```

Neste desafio, `DynamicParamsCurrying` pode assumir uma função com zero a vários argumentos, você precisa digitá-la corretamente. A função retornada pode aceitar pelo menos um argumento. Quando todos os argumentos forem satisfeitos, o tipo de retorno da função original deverá ser retornado corretamente.

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/462/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/462/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <hr><h3>Desafios Relacionados</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00017-hard-currying-1/README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-17%E3%83%BBCurrying%201-de3d37" alt="17・Currying 1"/></a> <!--info-footer-end-->