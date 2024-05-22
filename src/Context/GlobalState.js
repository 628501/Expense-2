import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'



 const initialState = {
    transactions : []
        
 }
 

 export const globalContext = createContext(initialState)

 export const GlobalProvider = ({ children }) => {
       const [state, dispatch] = useReducer(AppReducer, initialState)

       //Actions
       function deleteTransaction(id){
         dispatch({
            type: "Delete_Transaction",
            payload: id
         })
       }

       function addTransaction(transaction){
        dispatch({
           type: "Add_Transaction",
           payload: transaction
        })
      }
       
       function deleteAll(id){
         dispatch({
            type: "Delete_All",
            payload : id
         })
       }


       return(<globalContext.Provider  value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction,
        deleteAll
       }}>
                {children}
       </globalContext.Provider>)
 }