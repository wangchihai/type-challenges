<!--info-header-start--><h1>Tree path array <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> </h1><blockquote><p>by Neil Richter <a href="https://github.com/noook" target="_blank">@noook</a></p></blockquote><p><a href="https://tsch.js.org/15260/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Crie um tipo `Path` que representa e valida um possível caminho de uma árvore na forma de um array.

Desafios relacionados:
- [Caminho da chave do objeto](https://github.com/type-challenges/type-challenges/blob/main/questions/07258-hard-object-key-paths/README.md)

```ts
declare const example: {
    foo: {
        bar: {
            a: string;
        };
        baz: {
            b: number
            c: number
        }
    };
}

// Possible solutions: 
// []
// ['foo']
// ['foo', 'bar']
// ['foo', 'bar', 'a']
// ['foo', 'baz']
// ['foo', 'baz', 'b']
// ['foo', 'baz', 'c']
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/15260/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/15260/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->