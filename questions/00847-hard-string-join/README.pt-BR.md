<!--info-header-start--><h1>String Join <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> </h1><blockquote><p>by Matt Davis <a href="https://github.com/tl-matt-davis" target="_blank">@tl-matt-davis</a></p></blockquote><p><a href="https://tsch.js.org/847/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Crie um utilitário de junção de string com segurança de tipo que pode ser usado da seguinte forma:

```ts
const hyphenJoiner = join('-')
const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
```

Ou alternativamente:
```ts
join('#')('a', 'b', 'c') // = 'a#b#c'
```

Quando passamos um delimitador vazio (ou seja '') para juntar, devemos concatenar as strings como estão, ou seja:
```ts
join('')('a', 'b', 'c') // = 'abc'
```

Quando apenas um item for passado, devemos retornar o item original (sem nenhum delimitador adicionado):
```ts
join('-')('a') // = 'a'
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/847/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/847/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->