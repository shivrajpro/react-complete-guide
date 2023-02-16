import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  
  const emailIsValid = enteredEmail.indexOf("@") !== -1;
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = false;

  if(nameIsValid && emailIsValid) formIsValid = true;

  const nameInputChangeHandler = (evt) => {
    setEnteredName(evt.target.value);
    setNameIsTouched(true);
  };

  const nameInputBlurHandler = () =>{
    setNameIsTouched(true);
  }

  const emailInputChangeHandler = (evt) => {
    setEnteredEmail(evt.target.value);
    setEmailIsTouched(true);
  };

  const emailInputBlurHandler = () =>{
    setEmailIsTouched(true);
  }

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    if (!formIsValid) return;

    console.log("name=", enteredName);
    console.log("email=", enteredEmail);

    setEnteredName("");
    setEnteredEmail("");
    setNameIsTouched(false);
    setEmailIsTouched(false);
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
      <div
        className={`form-control ${
          emailInputIsInvalid ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Invalid Email ID</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
