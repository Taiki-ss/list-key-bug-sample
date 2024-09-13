# list key bug sample
クライアントサイドで動的にinputタグのリストを制御するときのlist内のkeyを配列のindexにした場合の挙動のサンプルコードです

このように複数の入力項目のうちいずれかを削除します
<img width="833" alt="スクリーンショット 2024-09-13 22 42 42" src="https://github.com/user-attachments/assets/74056e0d-a8bc-412b-9ce6-296abfe54b15">

すると、一番したの項目が削除されるような挙動になるというバグを再現しています
<img width="832" alt="スクリーンショット 2024-09-13 22 44 13" src="https://github.com/user-attachments/assets/01ca79f7-9bcd-48e5-a9d6-fd0368126c4e">


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
