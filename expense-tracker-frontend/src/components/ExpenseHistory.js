import React, { useContext } from "react";
import {TransContext } from "../TransactionContext";



function ExpenseHistory() {

    let {transactions} = useContext(TransContext);

    return (
        <div className="history">
             <h3>HISTORY </h3>
                <hr />
             
            <ul className="expense-history">
               {
               transactions.map((obj,ind)=>{
                return (
                <li key="ind">
                <span>{obj.desc} </span>
                <span>${obj.amount}</span>
                </li>
                )


               })
                 }
                   
            </ul>
               

               
            


        </div>
    );
}

export default ExpenseHistory;
