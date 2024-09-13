"use client";
import { v7 as uuid } from "uuid";

import { useState } from "react";
import { type InputItem } from "@/component/input";
import { InputList } from "@/component/input-list";

export default function Home() {
  const [items, setItems] = useState([] as InputItem[]);

  function addItem() {
    const newItem = { id: uuid(), value: "" };
    setItems((prev) => [...prev, newItem]);
  }

  function removeItem(id: InputItem["id"]) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <main>
      <InputList items={items} onAdd={addItem} onRemove={removeItem} />
    </main>
  );
}
