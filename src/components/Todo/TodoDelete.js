export const TodoDelete = ({ nestedId, id, onDelete }) => {
  const onDeleteList = (e) => {
    e.preventDefault();
    onDelete(nestedId, id);
  };

  return (
    <button type="button" className="del-btn" onClick={onDeleteList}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0C7.16129 0 0 7.16129 0 16C0 24.8387 7.16129 32 16 32C24.8387 32 32 24.8387 32 16C32 7.16129 24.8387 0 16 0ZM23.8452 20.2C24.1484 20.5032 24.1484 20.9935 23.8452 21.2968L21.2903 23.8452C20.9871 24.1484 20.4968 24.1484 20.1935 23.8452L16 19.6129L11.8 23.8452C11.4968 24.1484 11.0065 24.1484 10.7032 23.8452L8.15484 21.2903C7.85161 20.9871 7.85161 20.4968 8.15484 20.1935L12.3871 16L8.15484 11.8C7.85161 11.4968 7.85161 11.0065 8.15484 10.7032L10.7097 8.14839C11.0129 7.84516 11.5032 7.84516 11.8065 8.14839L16 12.3871L20.2 8.15484C20.5032 7.85161 20.9935 7.85161 21.2968 8.15484L23.8516 10.7097C24.1548 11.0129 24.1548 11.5032 23.8516 11.8065L19.6129 16L23.8452 20.2Z"
          fill="black"
        />
      </svg>
    </button>
  );
};
