export const TodoNestedItem = ({ nestedId, categoryItems, getCheckedInNested }) => {

  const handleChangeChecked = (e) => {
    getCheckedInNested(nestedId, e.target.id, e.target.checked);
  };

  return (
    <ul className="nested">
      {categoryItems.map((el) => (
        <li className="list-nested-item" key={el.id}>
          <label className="label-nested">
            <input id={el.id} type="checkbox" defaultChecked={el.checked} onChange={handleChangeChecked} />
            <span className="nested-checkbox"></span>
            <span className="nested-list">{el.text}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
