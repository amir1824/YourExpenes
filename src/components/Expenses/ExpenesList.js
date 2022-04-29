import React from 'react'
import './ExpenesList.css'
import ExpenseItem from './ExpenseItem'
const ExpenesList = props => {

  //Cheak if have Expenses 
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'> Found no expenes.</h2>

  }
 

  return (
    <ul className='expenses-list'>
      {
        props.items?.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }

    </ul>
  )
}



export default ExpenesList