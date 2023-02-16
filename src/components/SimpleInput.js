import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameInputRef = useRef();

  const nameInputChangeHandler = (evt) => {
    setEnteredName(evt.target.value);
    setNameIsTouched(true);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    setNameIsTouched(true);
    const enteredValue = nameInputRef.current.value;
    if (enteredValue.trim() === "") {
      setNameIsValid(false);
      return;
    }

    console.log("name=", enteredValue);

    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`form-control ${
          nameIsTouched && !nameIsValid ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameIsTouched && !nameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
