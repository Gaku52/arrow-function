# <アロー関数とMarkdown記法を用いたREADMEの作成>

'function() {...}' と '() => {...}'の違い

※IEや古いブラウザには対応していないので、
IEなどで使う場合にはBabelなどで変換を必要

## 説明

1.関数の定義方法  
2.メリット（さまざまなものが省略可能）  
3.thisの固定

## 使用方法

通常の関数

```code
function tax(number) {
  return number * 1.08;
}
```

アロー関数は、functionを書かなくてよい代わりに引数の後ろに 「=>」を記述する。

```code
const tax = (number) => {
  return number * 1.08;
}
```

で記述が可能。

## 構築・インストール方法

1.index.html,style.css,script.jsの作成

## 参考サイト様

1.[アロー（arrow）関数について解説！ES6（ES2015）で追加された新しい書き方を学びましょう！](https://www.youtube.com/watch?v=pp_0uM-dy68&t=121s)  
2.[VsCodeでマークダウンファイル(.md)を快適に使用するTips](https://maasaablog.com/tools/visual-studio-code/1762/)  
3.[キーバインドに指定スニペットを挿入を指定](https://fereria.github.io/reincarnation_tech/10_Programming/50_VSCode/vscode_snippet_sc/)  

## 作者

Gaku52

## 作成日時

2022-10-08 00:19:09
2022-10-08 21:16:07