<!--info-header-start--><h1>String Join <img src="https://img.shields.io/badge/-%E4%B8%8A%E7%B4%9A-de3d37" alt="上級"/> </h1><blockquote><p>by Matt Davis <a href="https://github.com/tl-matt-davis" target="_blank">@tl-matt-davis</a></p></blockquote><p><a href="https://tsch.js.org/847/play/ja" target="_blank"><img src="https://img.shields.io/badge/-%E6%8C%91%E6%88%A6%E3%81%99%E3%82%8B-3178c6?logo=typescript&logoColor=white" alt="挑戦する"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.pt-BR.md" target="_blank"><img src="https://img.shields.io/badge/-Portugu%C3%AAs%20(BR)-gray" alt="Português (BR)"/></a> </p><!--info-header-end-->

> この課題はGoogleが翻訳しました。翻訳品質改善のためのPRを募集しています。

次のように使用できるタイプセーフな文字列結合ユーティリティを作成します。

```ts
const hyphenJoiner = join('-')
const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
```

または、次のようにすることもできます。
```ts
join('#')('a', 'b', 'c') // = 'a#b#c'
```

結合するために空の区切り文字 (つまり '') を渡すときは、文字列をそのまま連結する必要があります。つまり、次のようになります。
```ts
join('')('a', 'b', 'c') // = 'abc'
```

項目が 1 つだけ渡された場合は、元の項目を (区切り文字を追加せずに) 取得する必要があります。
```ts
join('-')('a') // = 'a'
```

<!--info-footer-start--><br><a href="../../README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%88%BB%E3%82%8B-grey" alt="戻る"/></a> <a href="https://tsch.js.org/847/answer/ja" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E5%85%B1%E6%9C%89-teal" alt="解答を共有"/></a> <a href="https://tsch.js.org/847/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E8%A7%A3%E7%AD%94%E3%82%92%E7%A2%BA%E8%AA%8D-de5a77?logo=awesome-lists&logoColor=white" alt="解答を確認"/></a> <!--info-footer-end-->