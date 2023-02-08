import React from "react";
import FormCard from "./expenseForm";
import './form.css'
const NewExpense =(props)=>{

  const saveExpenseDataListener =(enterExpenseData)=>{
    const cardData ={  
      ...enterExpenseData,
      id: Math.random().toString()
    };
    props.onAddHandler(cardData);
  };


  return(
  <div className='expense-form-wrapper'>

    <FormCard  onSaveExpense ={saveExpenseDataListener} />
</div>
);
};
export default NewExpense;