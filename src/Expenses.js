import React  from 'react';
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react';
import ExpenseList from './ExpenseList';



const Expenses = (props) => {
  const [filterdYear , setFiltered] = useState('2020');

  const FilterChanger =selectedYear =>{
    setFiltered(selectedYear);
  };
  const filteredExpenses =props.items.filter(expense=>{
    return(expense.date.getFullYear().toString()=== filterdYear)
  });



  return (
    <div>
      <ExpenseFilter 
      selected={filterdYear} 
      onchangeFilter={FilterChanger} 
      /> 
      <ExpenseList items ={filteredExpenses}/>
    </div>
  );
}

export default Expenses;