import React,{useContext} from 'react'
import { globalContext } from '../Context/GlobalState'

const DeleteAll = () => {
    const {deleteAll,transactions} = useContext(globalContext)

    const amt = transactions.map(transaction => transaction.id)

    
  return (
    <div>
        <button onClick={() => deleteAll(amt)}  className="btn">Delete All</button>
    </div>
  )
}

export default DeleteAll