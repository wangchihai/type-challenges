<!--info-header-start--><h1>Count Element Number To Object <img src="https://img.shields.io/badge/-m%C3%A9dio-d9901a" alt="médio"/> </h1><blockquote><p>by 凤之兮原 <a href="https://github.com/kongmingLatern" target="_blank">@kongmingLatern</a></p></blockquote><p><a href="https://tsch.js.org/9989/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Com o tipo ``CountElementNumberToObject``, obtenha o número de ocorrências de cada item de um array e retorne-os em um objeto. Por exemplo:

~~~ts
tipo Simple1 = CountElementNumberToObject<[]> // retorna {}
tipo Simple2 = CountElementNumberToObject<[1,2,3,4,5]>
// retornar {
//1:1,
//2:1,
//3:1,
//4:1,
// 5: 1
// }

tipo Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]>
// retornar {
//1:2,
// 2: 2,
//3:2,
//4:1,
// 5: 1
// }
~~~

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/9989/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/9989/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->