<!--info-header-start--><h1>Union to Tuple <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><blockquote><p>by Sg <a href="https://github.com/suica" target="_blank">@suica</a></p></blockquote><p><a href="https://tsch.js.org/730/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

实现一个类型 `UnionToTuple`，将联合转换为元组。

众所周知，联合是一种无序结构，但元组是有序结构，这意味着当创建或转换联合时，我们不应该预先假设一个联合的项之间会保留任何顺序。

因此，在这个挑战中，**输出元组中元素的任何排列都是可接受的**。

您的类型应解析为以下两种类型之一，但***不是***它们的并集！
```ts
UnionToTuple<1>           // [1], and correct
UnionToTuple<'any' | 'a'> // ['any','a'], and correct
```
或者
```ts
UnionToTuple<'any' | 'a'> // ['a','any'], and correct
```
它不应该是所有可接受的元组的并集......
```ts
UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect
```


并且联盟可能会崩溃，这意味着某些类型可以吸收其他类型（或被其他类型吸收），并且没有办法阻止这种吸收。请参阅以下示例：
```ts
Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // will always be a true
Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // will always be a true
Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // will always be a true
Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // will always be a true
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/730/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/730/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-10%E3%83%BB%E5%85%83%E7%BB%84%E8%BD%AC%E5%90%88%E9%9B%86-d9901a" alt="10・元组转合集"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BB%E5%85%83%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%AF%B9%E8%B1%A1-7aad0c" alt="11・元组转换为对象"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-55%E3%83%BB%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E8%BD%AC%E5%8C%96%E4%B8%BA%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B-de3d37" alt="55・联合类型转化为交叉类型"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00472-hard-tuple-to-enum-object/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-472%E3%83%BBTuple%20to%20Enum%20Object-de3d37" alt="472・Tuple to Enum Object"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-3188%E3%83%BBTuple%20to%20Nested%20Object-d9901a" alt="3188・Tuple to Nested Object"/></a> <!--info-footer-end-->