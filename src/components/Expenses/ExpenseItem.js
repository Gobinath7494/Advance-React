import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // defining clickHandler func
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
    // const parentelem = document.getElementsByClassName("expenses");
    // const childelem = document.getElementById("e1");
    // parentelem.removeChild(childelem);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* <ExpenseDetails
        LocationOfExpenditure={props.LocationOfExpenditure}
      ></ExpenseDetails> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
