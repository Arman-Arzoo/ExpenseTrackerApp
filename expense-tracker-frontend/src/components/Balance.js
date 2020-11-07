import React, { useContext } from "react";
import { TransContext } from "../TransactionContext";



function Balance(prop) {
  let { transactions } = useContext(TransContext);

  const getIncome=()=> {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount;
      }
    }
    return income;
  }

  const getExpense=()=> {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += transactions[i].amount;
      }
    }
    return expense;
  }

    return (
      <div className="expense-balance">
          
         <h3 > Balance:${getIncome()+getExpense()} </h3>
    <h3>{}</h3>
         
      </div>
    );
  }
  
  export default Balance;
  