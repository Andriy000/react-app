import React from "react";
import './ExpenseFilter.css'
 const ExpenseFilter= (props)=>{
  const filterHandler =(e)=>{
      props.onchangeFilter(e.target.value)
  }
  
return(
  <section className="expensefilter-section">
    <div className="expense-filter-control">
      <label>Filter by Year</label>
      <select  value={props.selected} onChange={filterHandler}>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2019'>2019</option>
        <option value='2023'>2023</option>
      </select>
    </div>
  </section>
);
};
export default ExpenseFilter;