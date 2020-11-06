import { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";


const initialTransaction = [
    {amount: 550 , desc :"cake"}
]


export const TransContext = createContext(initialTransaction)

let [state , dispatch]= useReducer(TransactionReducer.initialTransaction);

export const TransactionProvider = ({Childern})=>{
    function addTransaction(transObj){
        dispatch({
            type: "addTransaction",
            payload:{
                amount:transObj.amount,
                desc:transObj.desc
            },
        })
    }
    return(
        <TransContext.Provider value={{
            transaction:state,
            addTransaction
        }}>

          {Childern} 
        </TransContext.Provider>
    )

}
