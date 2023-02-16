import { useRef } from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();

  const nameInputChangeHandler = (evt)=>{
    setEnteredName(evt.target.value);
  }

  const formSubmitHandler = (evt)=>{
    evt.preventDefault();

    console.log('name=',enteredName);

    setEnteredName('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler}
        value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
