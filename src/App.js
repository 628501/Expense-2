import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import DeleteAll from './components/DeleteAll'

import { GlobalProvider } from './Context/GlobalState'


const App = () => {
  return (
    <GlobalProvider>
        <Header />
        <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
        <DeleteAll/>
        </div> 
    </GlobalProvider>
  )
}

export default App
