export const AppReducer = (state,action )=>{

    switch(action.type){
        case "delete-transaction":{
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
        }
        case "add-transaction":{
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
                
            }}
            
        default:    
            return state;
    }
}