# list key bug sample
クライアントサイドで動的にinputタグのリストを制御するときのlist内のkeyを配列のindexにした場合の挙動のサンプルコードです

## 再現したバグの内容
このように複数の入力項目のうちいずれかを削除します
<img width="833" alt="スクリーンショット 2024-09-13 22 42 42" src="https://github.com/user-attachments/assets/74056e0d-a8bc-412b-9ce6-296abfe54b15">

すると、一番したの項目が削除されるような挙動になるというバグを再現しています
<img width="832" alt="スクリーンショット 2024-09-13 22 44 13" src="https://github.com/user-attachments/assets/01ca79f7-9bcd-48e5-a9d6-fd0368126c4e">

## 原因
`/component/input-list.tsx`のこの部分で、Inputコンポーネントのkeyを配列のindexにしてしまっているところです
```typescript
{items.map((item, index) => (
  <Input
    key={index}
    id={item.id}
    value={item.value}
    onRemove={() => onRemove(item.id)}
  />
))}
```

- onRemoveを発火することでitemsは更新されます
- そのためvalueにも新しいitem.valueが渡されますが（inputのdefaultValueに渡される）keyをindexにしているとkeyが変更されないためそのまま現在のvalueが維持されてしまいます
- 解消するためには変更がないindexをkeyにセットするのはやめて必ず一意になるitem.idなどをkeyにセットすべきです
- そうすることでitems更新前のDOMとは別のものとしてInputも意図通り更新されます


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
