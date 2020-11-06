const TransactionReducer =((state,action)=>{
    switch(action.type){
        case "addTransaction":
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