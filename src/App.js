import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenes';
import NewExpense from './components/NewExpense/NewExpense';

//The array of The expences
const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Example-Macbook',
    amount: 7000,
    date: new Date(Date.now())

  }

]


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }


  /*/saving items using localStorage
  useEffect(()=>{
    if(localStorage.getItem('expenes')){
      setExpenses(JSON.parse(localStorage.getItem('expenes')))
    }
  })

    useEffect(()=>{
      localStorage.setItem('expenes',JSON.stringify(expenses))
    },[expenses])
*/
  //Rendering to screen
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>


  )



}

export default App;
