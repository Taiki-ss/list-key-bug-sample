import { type InputItem, Input } from "./input";

type InputListProps = {
  items: InputItem[];
  onAdd: () => void;
  onRemove: (id: string) => void;
};

export function InputList({ items, onAdd, onRemove }: InputListProps) {
  return (
    <div>
      {items.map((item, index) => (
        <Input
          key={index}
          id={item.id}
          value={item.value}
          onRemove={() => onRemove(item.id)}
        />
      ))}
      <button className="add" onClick={onAdd}>
        追加
      </button>
    </div>
  );
}
