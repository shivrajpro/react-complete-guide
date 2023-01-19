import React, { useReducer, useState, useEffect } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const emailReducerFn = (state, action) => {
  if (action.type === "EMAIL_INPUT")
    return { value: action.val, isValid: action.val.includes("@") };
  if (action.type === "EMAIL_INPUT_BLUR")
    return { value: state.value, isValid: state.value.includes("@") };
  return { value: "", isValid: false };
};

const passwordReducerFn = (state, action) => {
  if (action.type === "PASSWORD_INPUT")
    return { value: action.val, isValid: action.val.trim().length > 6 };
  if (action.type === "PASSWORD_INPUT_BLUR")
    return { value: state.value, isValid: state.value.trim().length > 6 };
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailFn] = useReducer(emailReducerFn, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPasswordFn] = useReducer(passwordReducerFn, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 800);

    return () => {
      console.log("CLEANUP");
      clearTimeout(timeoutId);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailFn({ type: "EMAIL_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordFn({ type: "PASSWORD_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailFn({ type: "EMAIL_INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordFn({ type: "PASSWORD_INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
