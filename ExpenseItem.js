import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // defining clickHandler func
  const clickHandler = () => {
    console.log("deleted");
    const parentelem = document.getElementsByClassName("expenses");
    const childelem = document.getElementById("e1");
    parentelem.removeChild(childelem);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* <ExpenseDetails
        LocationOfExpenditure={props.LocationOfExpenditure}
      ></ExpenseDetails> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
