import { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";


const initialTransaction = [
    {amount: 55000 , desc :"salary"},
    {amount: -100 , desc :"egg"}
]


export const TransContext = createContext(initialTransaction);



export const TransactionProvider = ({children})=>{
    let [state , dispatch]= useReducer(TransactionReducer,initialTransaction);

    const  add =(transObj)=>{
           
        dispatch({
            type: "add-transaction",   
            payload:{
                amount:transObj.amount,
                desc:transObj.desc
            },
        });
    }
    return(
        <TransContext.Provider value={{ transactions:state,add}}>

          {children} 

        </TransContext.Provider>
    )

}
