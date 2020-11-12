import {AppReducer} from "./AppReducer";

const { createContext, useReducer } = require("react")

// initial Transtion
const initialState = {
        transactions:[] 
}

//  create Context

export const GlobalContext = createContext(initialState);

// provider Component

export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState);

    // Action
    function deleteTransaction(id){
        dispatch({
            type:"delete-transaction",
            payload:id


        },[])

    }

    function addTransaction(transaction){
        
        dispatch({
            type:"add-transaction",
            payload:transaction ,
            

        },[])

        
    }
   


    return (
        <GlobalContext.Provider value={{    
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}
