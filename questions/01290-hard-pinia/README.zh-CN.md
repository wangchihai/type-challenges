<!--info-header-start--><h1>Pinia <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/></h1><blockquote><p>by Pig Fang <a href="https://github.com/g-plane" target="_blank">@g-plane</a></p></blockquote><p><a href="https://tsch.js.org/1290/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

创建一个类型级函数，其类型类似于 [Pinia](https://github.com/posva/pinia) 库。您实际上不需要实现函数，只需添加类型即可。

＃＃＃ 概述

该函数仅接收一个类型为对象的参数。该对象包含 4 个属性：

- `id` - 只是一个字符串（必需）
- `state` - 将返回一个对象作为商店状态的函数（必需）
- `getters` - 一个对象，其方法类似于 Vue 的计算值或 Vuex 的 getter，详细信息如下（可选）
- `actions` - 具有可以产生副作用和改变状态的方法的对象，详细信息如下（可选）

###吸气剂

当您像这样定义商店时：

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

你应该像这样使用它：

```typescript
store.getSomething
```

代替：

```typescript
store.getSomething()  // error
```

此外，getter 可以通过 `this` 访问状态和/或其他 getter，但状态是只读的。

### 行动

当您像这样定义商店时：

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

使用它只是调用它：

```typescript
const returnValue = store.doSideEffect()
```

操作可以返回任何值或不返回任何值，并且可以接收任意数量的不同类型的参数。
参数类型和返回类型不能丢失，这意味着类型检查必须在调用方可用。

状态可以通过 `this` 访问和改变。 Getter 可以通过 `this` 访问，但它们是只读的。

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/1290/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/1290/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->