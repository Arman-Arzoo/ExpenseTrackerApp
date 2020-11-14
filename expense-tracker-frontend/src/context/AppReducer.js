export const AppReducer = (state,action )=>{

    switch(action.type){
        case "get-transactions":{
            return{
                ...state,
                loading:false,
                transactions:action.payload
            }
        }

        case "delete-transaction":{
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction._id !== action.payload)
            }
        }
        case "add-transaction":{
            return{
                ...state,
                transactions:[ ...state.transactions, action.payload]
                
            }}
        
        case "error-transactions":{
            return{
                ...state,
                error:action.payload
            }
        }

       
            
        default:    
            return state;
    }
}