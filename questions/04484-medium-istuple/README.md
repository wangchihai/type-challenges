<!--info-header-start--><h1>IsTuple <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></h1><blockquote><p>by jiangshan <a href="https://github.com/jiangshanmeta" target="_blank">@jiangshanmeta</a></p></blockquote><p><a href="https://tsch.js.org/4484/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.

For example:

```typescript
type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/4484/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/4484/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md" target="_blank"><img src="https://img.shields.io/badge/-1042%E3%83%BBIsNever-d9901a" alt="1042・IsNever"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md" target="_blank"><img src="https://img.shields.io/badge/-1097%E3%83%BBIsUnion-d9901a" alt="1097・IsUnion"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00223-hard-isany/README.md" target="_blank"><img src="https://img.shields.io/badge/-223%E3%83%BBIsAny-de3d37" alt="223・IsAny"/></a> <!--info-footer-end-->
