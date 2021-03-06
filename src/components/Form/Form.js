import "./Form.scss";
import { useState } from "react";

export const Form = ({ onSubmit, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <button type="submit">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.77694 0.87631L9.60975 0.707818L9.43317 0.866444L4.72974 5.09161L2.38581 2.91008L2.2089 2.74542L2.03873 2.91704L1.24083 3.72169L1.06134 3.90271L1.24621 4.07824L4.555 7.21982L4.7235 7.37981L4.89503 7.22308L10.5666 2.04083L10.7585 1.86549L10.5754 1.68097L9.77694 0.87631Z"
            fill="#F4F4F4"
            stroke="#F4F4F4"
            strokeWidth="0.498909"
          />
        </svg>
      </button>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </form>
  );
};
