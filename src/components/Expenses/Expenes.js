import React, { useState } from 'react';
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpenseFilter'
import ExpenesList from './ExpenesList'
import ExpensesChart from './ExpenseChart'



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items?.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

    
  

 //Rendering to screen
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpenesList items ={filteredExpenses}/>
      </Card>
    </div>

  )

}
export default Expenses
