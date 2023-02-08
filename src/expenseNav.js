import './expenses-app.css'
function ExpenseHeader(){
  return  <nav className="nav-section">
            <h2 className="ex-head">Expense Tracker</h2>
            <ul className='nav-menu'>
              <li>About App</li>
              <li>Tracker</li>
              <li>Contact</li>
            </ul>
          </nav>
}


export default ExpenseHeader;