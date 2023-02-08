import React from "react";
import ExpenseCard from "./expenseCard";
import './ExpensesList.css'
const ExpenseList = (props)=>{
  if(props.items.length ===0){
   return <h2 className="expense-list-text" >No expenses yet</h2>
  }
  return(
  <div className="expenses-list">
   {props.items.map((expense =>(
    <ExpenseCard 
      key={expense.id}
      title ={expense.title}
      price ={expense.price} 
      date ={expense.date}
      />)))} 
  </div>)

}
export default ExpenseList;