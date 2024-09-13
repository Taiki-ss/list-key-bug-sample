export type InputItem = {
  id: string;
  value: string;
};

export type InputProps = InputItem & {
  onRemove: (id: string) => void;
};

export function Input({ id, value, onRemove }: InputProps) {
  return (
    <div>
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="value"
        placeholder="ここにテキストを入力"
        defaultValue={value}
      />
      <button className="remove" onClick={() => onRemove(id)}>削除</button>
    </div>
  );
}
