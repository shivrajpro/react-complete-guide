import { useState } from "react";

const useInput = (validateValue)=>{
    const [enteredValue, setEnteredValue] = useState("");
    const [valueIsTouched, setValueIsTouched] = useState(false);
  
    const valueIsValid = validateValue(enteredValue);
    const hasError = valueIsTouched && !valueIsValid;
  
    const inputChangeHandler = (evt) => {
      setEnteredValue(evt.target.value);
      setValueIsTouched(true);
    };
  
    const inputBlurHandler = () =>{
      setValueIsTouched(true);
    }
  
    const reset = ()=>{
        setEnteredValue('');
        setValueIsTouched(false);
    }

    return {
        value:enteredValue, 
        hasError, 
        inputChangeHandler, 
        inputBlurHandler, 
        reset
    }
}

export default useInput;