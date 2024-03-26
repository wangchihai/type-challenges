<!--info-header-start--><h1>ClassPublicKeys <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>by jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/2828/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente o `ClassPublicKeys<T>` genérico que retorna todas as chaves públicas de uma classe.

Por exemplo:

```ts
class A {
  public str: string
  protected num: number
  private bool: boolean
  getNum() {
    return Math.random()
  }
}

type publicKeys = ClassPublicKeys<A> // 'str' | 'getNum'
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/2828/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/2828/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->