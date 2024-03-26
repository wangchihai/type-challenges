<!--info-header-start--><h1>Permutations of Tuple <img src="https://img.shields.io/badge/-m%C3%A9dio-d9901a" alt="médio"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23conditional%20type-999" alt="#conditional type"/> <img src="https://img.shields.io/badge/-%23recursion-999" alt="#recursion"/></h1><blockquote><p>by null <a href="https://github.com/gaac510" target="_blank">@gaac510</a></p></blockquote><p><a href="https://tsch.js.org/21220/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Dado um tipo de tupla genérico `T extends unknown[]`, escreva um tipo que produza todas as permutações de `T` como uma união.

Por exemplo:

```ts
PermutationsOfTuple<[1, number, unknown]>
/**
 * Should return:
 * | [1, number, unknown]
 * | [1, unknown, number]
 * | [number, 1, unknown]
 * | [unknown, 1, number]
 * | [number, unknown, 1]
 * | [unknown, number ,1]
 */ 
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/21220/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/21220/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <hr><h3>Desafios Relacionados</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-296%E3%83%BBPermutation-d9901a" alt="296・Permutation"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-4260%E3%83%BBAllCombinations-d9901a" alt="4260・AllCombinations"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-8767%E3%83%BBCombination-d9901a" alt="8767・Combination"/></a> <!--info-footer-end-->