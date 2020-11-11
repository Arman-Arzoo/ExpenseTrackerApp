import React, { useContext }  from 'react'
import {GlobalContext} from "../context/GlobalState";

export const TransactionList = () => {

    const context = useContext(GlobalContext);
    console.log(context);
    
    return (
        <>
     <h3>History</h3>
      <ul className="list">
          <li className="minus">
            Cash <span>-$400</span><button className="delete-btn">x</button>
          </li>
      </ul> 
            
        </  >
    )
}
