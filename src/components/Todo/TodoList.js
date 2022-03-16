import "./Todo.scss";
import { TodoItem } from "./TodoItem";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectLists } from "../../store/TodoLists/selectors";
import { addList, deleteList } from "../../store/TodoLists/actions";

export const TodoList = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectLists);

  const getMaxId = (list) => {
    return list?.length > 0 ? list.reduce((a, b) => (a > b ? a : b)) + 1 : 1;
  };

  const handleAddList = (value) => {
    const getId = getMaxId(lists?.map((el) => +el.id.slice(5)));

    const newList = {
      id: `list-${getId}`,
      text: value,
    };

    dispatch(addList(newList));
  };

  const handleDeleteCategory = (id) => {
    dispatch(deleteList(id));
  };

  return (
    <div className="todo">
      {!lists?.length ? (
        <span className="todo-noCategories">No Categories!</span>
      ) : (
        <ol className="todo-list">
          {lists.map((list) => (
            <TodoItem
              id={list.id}
              text={list.text}
              handleDeleteCategory={handleDeleteCategory}
              key={list.id}
            />
          ))}
        </ol>
      )}
      <Form onSubmit={handleAddList} placeholder={"Write a category..."} />
    </div>
  );
};
