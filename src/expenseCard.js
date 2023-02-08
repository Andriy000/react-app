import React from 'react';
import './expenses-app.css'
import ExpenseDate from './expenseCardDate';



function ExpenseCard(props){
  


  return (
        <div className='box'>
        <div className='card-box'>
        <ExpenseDate date ={props.date} />
        <div className='expense-name'>{props.title}</div>
        <div className='price'>{props.price}$</div>
    </div>
    </div>
  );
}
  export default ExpenseCard;