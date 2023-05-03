import classes from "../style/form.module.css";
import React, { useEffect, useState } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
  console.log('Done')
  },[flag])
  function handelData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All field are mendetory");
      console.log("You clicked submit.");
    } else {
      setFlag(true)
    }
  }
  return (
    <>
    <pre>{(flag)?<h1 className={classes.flag}>Hellow {inputData.name}, you have Successfully registred</h1>:""}</pre>
    <form className={classes.header} onSubmit={handleSubmit}>
      <div>
        <h1 className={classes.header}>Registration form</h1>
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Your name"
          value={inputData.name}
          onChange={handelData}></input>
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="Enter Your password"
          value={inputData.password}
          onChange={handelData}></input>
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Enter Your email"
          value={inputData.email}
          onChange={handelData}></input>
      </div>
      <button type="submit" className={classes.button}>
        Submit
      </button>
    </form>
    </>
  );
}
export default Form;
