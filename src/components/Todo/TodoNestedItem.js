import { TodoDelete } from "./TodoDelete";

export const TodoNestedItem = ({
  id,
  text,
  checked,
  onChecked,
  onDeleteNestedList,
}) => {
  return (
    <li className="list-nested-item">
      <label className="label-nested">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => onChecked(id)}
        />
        <span className="nested-checkbox"></span>
        <span className="nested-list">{text}</span>
      </label>
      <TodoDelete id={id} onDelete={onDeleteNestedList} />
    </li>
  );
};
