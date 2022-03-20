import { useState } from "react";
import "./TodoModalChange.scss";

export const TodoModalChange = ({
  id,
  name,
  errorMessage,
  onSubmitChange,
  onSubmitDelete,
}) => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(name);
  const [error, setError] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    if (error) {
      setError(false);
    }
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (e.nativeEvent.submitter.id) {
      case "change":
        if (
          value.length > errorMessage.length[0] &&
          value.length <= errorMessage.length[1]
        ) {
          onSubmitChange(id, value);
          setModal(false);
          setError(false);
        } else {
          setError(true);
        }
        break;
      case "delete":
        onSubmitDelete(id);
        setModal(false);
        break;
      default:
        console.log("Не выбрано удалить или изменить!");
        break;
    }
  };

  return (
    <div className="todo-modal">
      <button className="todo-modal__open" onClick={handleModal}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 10.722C26.8271 10.722 29.119 8.43015 29.119 5.603C29.119 2.77586 26.8271 0.484001 24 0.484001C21.1728 0.484001 18.881 2.77586 18.881 5.603C18.881 8.43015 21.1728 10.722 24 10.722Z"
            fill="#333333"
          />
          <path
            d="M24 47.516C26.8271 47.516 29.119 45.2241 29.119 42.397C29.119 39.5699 26.8271 37.278 24 37.278C21.1728 37.278 18.881 39.5699 18.881 42.397C18.881 45.2241 21.1728 47.516 24 47.516Z"
            fill="#333333"
          />
          <path
            d="M24 29.119C26.8271 29.119 29.119 26.8271 29.119 24C29.119 21.1729 26.8271 18.881 24 18.881C21.1728 18.881 18.881 21.1729 18.881 24C18.881 26.8271 21.1728 29.119 24 29.119Z"
            fill="#333333"
          />
        </svg>
      </button>
      {modal && (
        <div className="todo-modal__box">
          <div className="todo-modal__change">
            <div className="todo-modal__header">
              <h2 className="todo-modal__title">
                Modal {errorMessage.name} edit
              </h2>
              <button className="todo-modal__close" onClick={handleModal}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.051 5.42999L42.309 1.68699C42.1232 1.50119 41.9027 1.3538 41.66 1.25324C41.4173 1.15268 41.1572 1.10092 40.8945 1.10092C40.6318 1.10092 40.3716 1.15268 40.1289 1.25324C39.8862 1.3538 39.6657 1.50119 39.48 1.68699L24.165 17L8.84997 1.68699C8.47492 1.31205 7.9663 1.10142 7.43597 1.10142C6.90564 1.10142 6.39703 1.31205 6.02197 1.68699L2.27997 5.42999C1.90503 5.80505 1.6944 6.31367 1.6944 6.84399C1.6944 7.37432 1.90503 7.88294 2.27997 8.25799L17.6 23.573L2.27997 38.888C1.90503 39.2631 1.6944 39.7717 1.6944 40.302C1.6944 40.8323 1.90503 41.3409 2.27997 41.716L6.02197 45.459C6.39703 45.8339 6.90564 46.0446 7.43597 46.0446C7.9663 46.0446 8.47492 45.8339 8.84997 45.459L24.165 30.144L39.48 45.459C39.6657 45.6448 39.8862 45.7922 40.1289 45.8927C40.3716 45.9933 40.6318 46.0451 40.8945 46.0451C41.1572 46.0451 41.4173 45.9933 41.66 45.8927C41.9027 45.7922 42.1232 45.6448 42.309 45.459L46.051 41.716C46.4259 41.3409 46.6365 40.8323 46.6365 40.302C46.6365 39.7717 46.4259 39.2631 46.051 38.888L30.736 23.573L46.051 8.25799C46.4259 7.88294 46.6365 7.37432 46.6365 6.84399C46.6365 6.31367 46.4259 5.80505 46.051 5.42999Z"
                    fill="#333333"
                  />
                </svg>
              </button>
            </div>
            <form
              action="#"
              className="todo-modal__form"
              onSubmit={handleSubmit}
            >
              <textarea
                name="text"
                value={value}
                onChange={handleChange}
                className={error ? "textarea-error" : "textarea"}
              ></textarea>
              {error && (
                <p className="todo-modal__error">{errorMessage.text}</p>
              )}
              <div className="todo-modal__btns">
                <button type="submit" id="change" className="btn-change">
                  Change
                </button>
                <button type="submit" id="delete" className="btn-delete">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
