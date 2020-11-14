import {AppReducer} from "./AppReducer";
import axios from "axios";

const { createContext, useReducer } = require("react")

// initial Transtion
const initialState = {
        transactions:[],
        error:null,
        loading:true
}

//  create Context

export const GlobalContext = createContext(initialState);

// provider Component

export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState);

    // Action

    async function getTransactions(){
        try {
            const res = await axios.get("/api/v1/transactions");

            dispatch({
                type:'get-transactions',
                payload:res.data.data

            });
            
        } catch (err) {

            dispatch({
                type:'error-transactions',
                payload:err.response.data.error
                

            });
            
        }
    }

    async function deleteTransaction(id){
      try {

        await axios.delete(`/api/v1/transactions/${id}`);
        dispatch({
            type:"delete-transaction",
            payload:id


        });
          
      } catch (err) {
        dispatch({
            type:'error-transactions',
            payload:err.response.data.error   

        });
          
      }

    }

    async function addTransaction(transaction){
        const config ={
            header:{
            "Content-Type": "application/json"
            }
        }
        
      try {

        const response = await axios.post("api/v1/transactions",transaction,config);
        console.log("response",response);
         
        dispatch({
            type:"add-transaction",
            payload:response.data.data,
            

        });
          
      } catch (err) {
        dispatch({
            type:'error-transactions',
            payload:err.response.data.error   

        });
          
      }

        
    }
   


    return (
        <GlobalContext.Provider value={{    
            transactions:state.transactions,
            getTransactions,
            deleteTransaction,
            addTransaction,
            error:state.error,
            loading:state.loading
           
        }}>
            {children}
        </GlobalContext.Provider>
    )

}
