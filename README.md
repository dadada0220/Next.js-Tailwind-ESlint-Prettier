# Next.js-Tailwind-ESlint-Prettier テンプレート



## 環境構築

### インストール

```bash
npm install
```

### 開発時

```bash
npm run dev
```

動作確認済：`v18.15.0`



## コンポーネント設計

| 名称 | 解説 | 例 |
| ---- | ---- | ---- |
| components/elements | 最小単位のパーツ。 | ボタン、日付、チェックボックス、入力欄。 |
| components/templates | elementsを組み合わせたブロック。elementsより大きい。elementsが無くてもOK。 | ヘッダー、フォーム、1つのセクション。 |
| features/ | 特定の機能をまとめたディレクトリ。APIかカスタムフックを必ず持つ。 | アカウント、お知らせ。 |
| pages/ | ルーティング対象となるページ。 | トップページ、アカウント詳細ページ、お知らせ一覧ページ。 |

### 構造ルール

- elements の中に
  - elements ：×
  - templates ：×
  - features ：×
- templates の中に
  - elements ：◯
  - templates ：×
  - features ：×
- features の中に
  - elements ：◯
  - templates ：×
  - features ：×
- pages の中に
  - elements ：◯
  - templates ：◯
  - features ：◯



## 参考資料

全体構成の参考記事
https://zenn.dev/rh820/articles/1e62510776221e

コンポーネント設計の参考記事
https://zenn.dev/yodaka/articles/eca2d4bf552aeb
