<!--info-header-start--><h1>ValidDate <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> </h1><blockquote><p>by ch3cknull <a href="https://github.com/ch3cknull" target="_blank">@ch3cknull</a></p></blockquote><p><a href="https://tsch.js.org/9155/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Implemente um tipo `ValidDate`, que recebe um tipo de entrada T e retorna se T é uma data válida.

**Ano bissexto não é considerado**

Boa sorte!

```ts
ValidDate<'0102'> // true
ValidDate<'0131'> // true
ValidDate<'1231'> // true
ValidDate<'0229'> // false
ValidDate<'0100'> // false
ValidDate<'0132'> // false
ValidDate<'1301'> // false
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/9155/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/9155/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->