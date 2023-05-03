import classes from "../style/form.module.css";
function Form() {
  return (
    <from className={classes.header}>
      <div >
        <h1 className={classes.header}>Registration form</h1>
      </div>
      <div>
        <input type="text" placeholder="Enter Your name"></input>
      </div>
      <div>
        <input type="text" placeholder="Enter Your password"></input>
      </div>
      <div>
        <input type="text" placeholder="Enter Your email"></input>
      </div>
      <button type="submit" className={classes.button}>Submit</button>
    </from>
  );
}
export default Form;
