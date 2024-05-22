import React,{useContext} from 'react'
import { globalContext } from '../Context/GlobalState'

const IncomeExpenses = () => {
  const {transactions} = useContext(globalContext)
  const mapper = transactions.map(transaction => transaction.amount)
  const positive = mapper.filter((transaction => transaction>0))
  const total1 = positive.reduce((acc, item) => ( acc+=item ),0).toFixed(2) 

  const negative = mapper.filter((transaction => transaction<0))
  const total2 = negative.reduce((acc,item) => (acc+=item), 0) * -1 
  .toFixed(2) 

  return (
    <div className='inc-exp-container'>
    <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">+₹{total1}</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">-₹{total2}</p>
    </div>
    </div>
  
  )
}

export default IncomeExpenses