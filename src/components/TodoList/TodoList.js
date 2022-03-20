import "./TodoList.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectLists } from "../../store/TodoLists/selectors";
import { addList, changeList, deleteList } from "../../store/TodoLists/actions";
import { TodoItem } from "../TodoItem/TodoItem";
import { Form } from "../Form/Form";

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

  const handleChangeValue = (id, value) => {
    dispatch(changeList(id, value));
  };

  const handleDeleteList = (id) => {
    dispatch(deleteList(id));
  };

  return (
    <div className="todo-list">
      {!lists?.length ? (
        <span className="todo-noCategories">No Categories!</span>
      ) : (
        <ol className="todo-list__categories">
          {lists.map((list) => (
            <TodoItem
              id={list.id}
              text={list.text}
              modalChange={handleChangeValue}
              modalDelete={handleDeleteList}
              key={list.id}
            />
          ))}
        </ol>
      )}
      <div className="todo-list__form">
        <Form onSubmit={handleAddList} placeholder={"Write a category..."} />
      </div>
    </div>
  );
};
