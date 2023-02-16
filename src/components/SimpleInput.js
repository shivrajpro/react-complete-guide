import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  let formIsValid = false;

  if(nameIsValid) formIsValid = true;

  const nameInputChangeHandler = (evt) => {
    setEnteredName(evt.target.value);
    setNameIsTouched(true);
  };

  const nameInputBlurHandler = () =>{
    setNameIsTouched(true);
  }

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    if (!nameIsValid) return;

    console.log("name=", enteredName);
    setEnteredName("");
    setNameIsTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`form-control ${
          nameInputIsInvalid ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
