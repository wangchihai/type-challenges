<!--info-header-start--><h1>Pinia <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/></h1><blockquote><p>by Pig Fang <a href="https://github.com/g-plane" target="_blank">@g-plane</a></p></blockquote><p><a href="https://tsch.js.org/1290/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

[Pinia](https://github.com/posva/pinia) ライブラリと同様の型を持つ型レベルの関数を作成します。実際に関数を実装する必要はなく、型を追加するだけです。

＃＃＃ 概要

この関数は、タイプがオブジェクトであるパラメーターを 1 つだけ受け取ります。オブジェクトには 4 つのプロパティが含まれています。

- `id` - 単なる文字列 (必須)
- `state` - ストアの状態としてオブジェクトを返す関数 (必須)
- `getters` - Vue の計算値または Vuex のゲッターに似たメソッドを持つオブジェクト。詳細は以下のとおりです (オプション)
- `actions` - 副作用を実行し、状態を変更できるメソッドを備えたオブジェクト。詳細は以下のとおりです (オプション)

### ゲッター

ストアを次のように定義すると:

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

そして、次のように使用する必要があります。

```typescript
store.getSomething
```

の代わりに：

```typescript
store.getSomething()  // error
```

さらに、ゲッターは `this` を介して状態や他のゲッターにアクセスできますが、状態は読み取り専用です。

＃＃＃ 行動

ストアを次のように定義すると:

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

使用するには、単に呼び出すだけです。

```typescript
const returnValue = store.doSideEffect()
```

アクションは、任意の値を返すことも、何も返さないこともでき、さまざまなタイプの任意の数のパラメーターを受け取ることができます。
パラメーターの型と戻り値の型を失うことはできません。つまり、呼び出し側で型チェックを利用できる必要があります。

`this` を介して状態にアクセスし、変更することができます。ゲッターには `this` 経由でアクセスできますが、読み取り専用です。

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/1290/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/1290/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->