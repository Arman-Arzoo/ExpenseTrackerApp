const TransactionReducer =((state,action)=>{
    switch(action.type){
        case "add-transaction":
            {
                return [...state, action.payload];
            }
        default:
            {
                return state;
            }
    }
});

export default TransactionReducer;