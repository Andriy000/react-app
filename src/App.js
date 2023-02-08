
 import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react';
import ExpenseHeader from './expenseNav';
import Expenses from './Expenses';
import NewExpense from './newExpense/ExpenseNEw'

  const mockExpenseData =[

  ];

  const App =() =>{
    const [expenseData ,setExpense]=useState(mockExpenseData);
    const addHandler =expense =>{
      setExpense(prev =>{
        return [expense, ...prev]
      });
  
    };

    return(
  <section>
      <ExpenseHeader></ExpenseHeader>
      <NewExpense onAddHandler ={addHandler}/>
    <section className='card-container'>
      <Expenses items ={expenseData}/>
    </section>
  </section>
  );
}


export default App;
