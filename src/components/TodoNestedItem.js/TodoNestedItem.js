import { useEffect, useRef } from "react";
import { TodoModalChange } from "../TodoModalChange/TodoModalChange";
import "./TodoNestedItem.scss";

export const TodoNestedItem = ({
  id,
  text,
  checked,
  onChecked,
  modalNestedChange,
  modalNestedDelete,
}) => {
  const nestedEnd = useRef();
  const modalNestedEdit = {
    name: "Nested",
    text: "Длина задачи должна быть от 1 до 50 символов",
    length: [1, 100],
  };

  useEffect(() => {
    nestedEnd.current?.scrollIntoView();
  }, []);

  return (
    <div className="todo-nested-box">
      <li className="todo-nested-item">
        <label className="todo-nested-item__label">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => onChecked(id)}
          />
          <span className="todo-nested-item__checkbox"></span>
          <span className="todo-nested-item__list">{text}</span>
        </label>
      </li>
      <TodoModalChange
        id={id}
        name={text}
        errorMessage={modalNestedEdit}
        onSubmitChange={modalNestedChange}
        onSubmitDelete={modalNestedDelete}
      />
      <div ref={nestedEnd} />
    </div>
  );
};
