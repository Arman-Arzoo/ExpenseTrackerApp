import {AppReducer} from "./AppReducer";

const { createContext, useReducer } = require("react")

// initial Transtion
const initialState = {
        transaction:[
            {id:1, text:"flower",amount:-20 },
            {id:2, text:"cake",amount:45 },
            {id:3, text:"flower",amount:-10}

        ]
}

//  create Context

export const GlobalContext = createContext(initialState);

// provider Component

export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState);

    return (
        <GlobalContext.Provider value={{    
            transactions:state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )

}
