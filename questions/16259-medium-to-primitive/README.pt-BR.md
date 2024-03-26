<!--info-header-start--><h1>ToPrimitive <img src="https://img.shields.io/badge/-m%C3%A9dio-d9901a" alt="médio"/> </h1><blockquote><p>by 前端子鱼 <a href="https://github.com/mwc" target="_blank">@mwc</a></p></blockquote><p><a href="https://tsch.js.org/16259/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Converta uma propriedade do tipo literal (tipo de rótulo) em um tipo primitivo.

Por exemplo

```typescript
type X = {
  name: 'Tom',
  age: 30,
  married: false,
  addr: {
    home: '123456',
    phone: '13111111111'
  }
}

type Expected = {
  name: string,
  age: number,
  married: boolean,
  addr: {
    home: string,
    phone: string
  }
}
type Todo = ToPrimitive<X> // should be same as `Expected`
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/16259/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/16259/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->