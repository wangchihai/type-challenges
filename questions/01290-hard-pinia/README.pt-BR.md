<!--info-header-start--><h1>Pinia <img src="https://img.shields.io/badge/-dif%C3%ADcil-de3d37" alt="difícil"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/></h1><blockquote><p>by Pig Fang <a href="https://github.com/g-plane" target="_blank">@g-plane</a></p></blockquote><p><a href="https://tsch.js.org/1290/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Crie uma função de nível de tipo cujos tipos sejam semelhantes à biblioteca [Pinia](https://github.com/posva/pinia). Na verdade, você não precisa implementar funções, apenas adicionando tipos.

### Visão geral

Esta função recebe apenas um parâmetro cujo tipo é um objeto. O objeto contém 4 propriedades:

- `id` - apenas uma string (obrigatório)
- `state` - uma função que retornará um objeto como estado da loja (obrigatório)
- `getters` - um objeto com métodos semelhantes aos valores computados do Vue ou aos getters do Vuex, e os detalhes estão abaixo (opcional)
- `actions` - um objeto com métodos que podem causar efeitos colaterais e alterar o estado, e os detalhes estão abaixo (opcional)

### Getters

Quando você define uma loja como esta:

```typescript
const store = defineStore({
  // ...other required fields
  getters: {
    getSomething() {
      return 'xxx'
    }
  }
})
```

E você deve usá-lo assim:

```typescript
store.getSomething
```

em vez de:

```typescript
store.getSomething()  // error
```

Além disso, os getters podem acessar o estado e/ou outros getters via `this`, mas o estado é somente leitura.

### Ações

Quando você define uma loja como esta:

```typescript
const store = defineStore({
  // ...other required fields
  actions: {
    doSideEffect() {
      this.xxx = 'xxx'
      return 'ok'
    }
  }
})
```

Usá-lo é apenas chamá-lo:

```typescript
const returnValue = store.doSideEffect()
```

As ações podem retornar qualquer valor ou não retornar nada, e podem receber qualquer número de parâmetros com tipos diferentes.
Os tipos de parâmetros e o tipo de retorno não podem ser perdidos, o que significa que a verificação de tipo deve estar disponível no lado da chamada.

O estado pode ser acessado e modificado via `this`. Getters podem ser acessados ​​via `this` mas são somente leitura.

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/1290/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/1290/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->