"use client";
import { v7 as uuid } from "uuid";

import { InputList } from "@/component/input-list";
import { useState } from "react";
import { InputItem } from "@/component/input";

export default function Home() {
  const [items, setItems] = useState([] as InputItem[]);

  function handleAdd() {
    const newItem = { id: uuid(), value: "" };
    setItems((prev) => [...prev, newItem]);
  }

  function handleRemove(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <main>
      <InputList items={items} onAdd={handleAdd} onRemove={handleRemove} />
    </main>
  );
}
