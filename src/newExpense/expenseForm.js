import React, {useState} from "react";
import './form.css'

const FormCard =(props)=>{
  const [priceInput, setNewPrice] =useState('');
  const [titleInput, setNewTitle] =useState('');
  const [dateInput, setNewDate] =useState('');
  const [priceValidation ,setPriceValidity] =useState('');
  const priceValidationHandler =(e)=>{
    const val =e.target.value;
    if(val.match(/[0-9]/)){
      setPriceValidity('valid')
    }else{
      if(val.match(/[A-Z]/)){
      setPriceValidity('invalid')
    }
    }
    //Доробити валідацію на прайс!
  };
  const expenseInputHandler =(e)=>{
    setNewTitle(e.target.value)
  }
  const priceInputHandler =(e)=>{
    setNewPrice(e.target.value)
  }
  const dateInputHandler =(e)=>{
    setNewDate(e.target.value)

  }
  const formSubmit =(e)=>{
    e.preventDefault();
    const cardData ={
      title:titleInput,
      price:priceInput ,
      date: new Date(dateInput),
    };
    props.onSaveExpense(cardData)
    setNewTitle('');
    setNewPrice('');
    setNewDate('');
  };


  return(
  <section className="formSection" >
    <form className="form"onSubmit={formSubmit} >
      <div className="input-container" >
        <div className="input-section expense">
            <label>Name of Expense</label>
            <input 
              onInput={expenseInputHandler} 
              type="text"
              value={titleInput}/>
        </div>
        <div className="input-section price2">
              <label className="price-label">Price  {priceValidation}</label>  
              <input 
              onInput={priceInputHandler}
              onChange={priceValidationHandler}
              type="numbers"
              value={priceInput} />
            
        </div>
        <div className="input-section date">
            <label>Date</label>
            <input 
              onInput={dateInputHandler} 
              type="date"
              value={dateInput} />
        </div>
        <aside className="description">It is a Expense Tracker app ,it can helps you to control your expenses and make a statistic of your expenses ,if you want to add an expense card you should write a name of Expense ,price and date of shop.</aside>
        <button  type="button" className="form-btn">Add</button>

      </div>
     
    </form>
  </section>
  )
};
export default FormCard;