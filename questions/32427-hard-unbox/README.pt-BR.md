<!--info-header-start--><h1>Unbox <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/> <img src="https://img.shields.io/badge/-%23promise-999" alt="#promise"/> <img src="https://img.shields.io/badge/-%23function-999" alt="#function"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><blockquote><p>by Julian Coy <a href="https://github.com/eXamadeus" target="_blank">@eXamadeus</a></p></blockquote><p><a href="https://tsch.js.org/32427/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Como podemos construir um tipo que “descompacte” matrizes, funções, promessas e tuplas?

Exemplo:

```typescript
Unbox<string> // string
Unbox<()=>number> // number
Unbox<boolean[]> // boolean
Unbox<Promise<boolean>> // boolean
```

Bônus: podemos torná-lo recursivo?

```typescript
Unbox<() => () => () => () => number> // number
```

Bônus duplo: podemos controlar a recursão?

```typescript
Unbox<() => () => () => () => number, 3> // () => number
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/32427/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/32427/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->