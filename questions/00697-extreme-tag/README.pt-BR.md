<!--info-header-start--><h1>Tag <img src="https://img.shields.io/badge/-extremo-b11b8d" alt="extremo"/> </h1><blockquote><p>by null <a href="https://github.com/uid11" target="_blank">@uid11</a></p></blockquote><p><a href="https://tsch.js.org/697/play/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Fazer%20o%20Desafio-3178c6?logo=typescript&logoColor=white" alt="Fazer o Desafio"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> Traduzido pelo Google, abra um PR para ajudar a melhorar a tradução.

Apesar do sistema de digitação estrutural no TypeScript, às vezes é conveniente marcar alguns tipos com tags, e para que essas tags não interfiram na capacidade de atribuir valores desses tipos entre si.

Por exemplo, usando tags, você pode verificar se algum valor passa pelas chamadas das funções necessárias, e na ordem correta:
```ts
const doA = <T extends string>(x: T) => {
  const result = x

  return result as Tag<typeof result, 'A'>
}

const doB = <T extends string>(x: T) => {
  const result = x

  return result as Tag<typeof result, 'B'>
};

const a = doA('foo')
const b = doB(a)

type Check0 = IsTrue<HasTags<typeof b, ['A', 'B']>>
```

Escreva uma função `Tag<B, T extends string>` que receba um tipo `B` diferente de `null` e `undefined` e retorne um tipo rotulado com o tipo literal de string `T`.

Os tipos rotulados devem ser mutuamente atribuíveis aos tipos originais correspondentes:
```ts
declare let x: string
declare let y: Tag<string, 'A'>

x = y = x
```

Ao etiquetar um tipo já marcado com uma tag, uma nova tag deve ser adicionada ao final da lista de todas as tags do tipo:
```ts
type T0 = Tag<{ foo: string }, 'A'>
type T1 = Tag<T0, 'B'>

type Check1 = IsTrue<HasExactTags<T1, ['A', 'B']>>
```

Adicione algumas funções para verificar tags de tipo.

`GetTags<B>` recupera uma lista de todas as tags do tipo `B`:
```ts
type T2 = Tag<number, 'C'>

type Check2 = IsTrue<Equal<GetTags<T2>, ['C']>>
```

`HasTag<B, T extends string>` verifica se o tipo `B` está marcado com a tag `T` (e retorna `true` ou `false`):
```ts
type T3 = Tag<0 | 1, 'D'>

type Check3 = IsTrue<HasTag<T3, 'D'>>
```

`HasTags<B, T extends readonly string[]>` verifica se o tipo `B` está marcado em sucessão com tags da tupla `T`:
```ts
type T4 = Tag<Tag<Tag<{}, 'A'>, 'B'>, 'C'>

type Check4 = IsTrue<HasTags<T4, ['B', 'C']>>
```

`HasExactTags<B, T extends readonly string[]>` verifica se a lista de todas as tags do tipo `B` é exatamente igual à tupla `T`:
```ts
type T5 = Tag<Tag<unknown, 'A'>, 'B'>

type Check5 = IsTrue<HasExactTags<T5, ['A', 'B']>>
```

Por fim, adicione o tipo `UnTag<B>`, que remove todas as tags do tipo `B`:
```ts
type T6 = Tag<{ bar: number }, 'A'>
type T7 = UnTag<T6>

type Check6 = IsFalse<HasTag<T7, 'A'>>
```

<!--info-footer-start--><br><a href="../../README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Voltar-grey" alt="Voltar"/></a> <a href="https://tsch.js.org/697/answer/pt-BR" target="_blank"><img src="https://img.shields.io/badge/-Compartilhar%20suas%20Solu%C3%A7%C3%B5es-teal" alt="Compartilhar suas Soluções"/></a> <a href="https://tsch.js.org/697/solutions" target="_blank"><img src="https://img.shields.io/badge/-Conferir%20Solu%C3%A7%C3%B5es-de5a77?logo=awesome-lists&logoColor=white" alt="Conferir Soluções"/></a> <!--info-footer-end-->