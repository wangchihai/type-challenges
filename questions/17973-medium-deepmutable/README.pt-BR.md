<!--info-header-start--><h1>DeepMutable <img src="https://img.shields.io/badge/-m%C3%A9dio-d9901a" alt="médio"/> <img src="https://img.shields.io/badge/-%23readonly-999" alt="#readonly"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><blockquote><p>by cutefcc <a href="https://github.com/cutefcc" target="_blank">@cutefcc</a></p></blockquote><p><a href="https://tsch.js.org/17973/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente um DeepMutable<T> genérico que torne todos os parâmetros de um objeto - e seus subobjetos recursivamente - mutáveis.

Por exemplo

```ts
type X = {
  readonly a: () => 1
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: "s"
        }
        readonly k: "hello"
      }
    }
  }
}

type Expected = {
  a: () => 1
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: "s"
        }
        k: "hello"
      }
    }
  }
}

type Todo = DeepMutable<X> // should be same as `Expected`
```

Você pode presumir que estamos lidando apenas com objetos neste desafio. Matrizes, funções, classes e assim por diante não precisam ser levados em consideração. No entanto, você ainda pode se desafiar cobrindo o maior número possível de casos diferentes.

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/17973/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/17973/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->