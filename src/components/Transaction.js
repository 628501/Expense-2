import React,{ useContext } from 'react'
import { globalContext } from '../Context/GlobalState'

const Transaction = ({transaction}) => {
    const sign = transaction.amount > 0 ? '+' : '-'
    const {deleteTransaction} = useContext(globalContext)
  return (
    <div>
        <li className={ transaction.amount > 0 ? "plus" : "minus" }>
              {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transaction