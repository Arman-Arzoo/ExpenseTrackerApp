import React, { useContext } from 'react';
import {useState} from "react";
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
         

  const [text , setText] = useState('');
  const [amount, setAmount] = useState(0);

  function transHandler(e){
    e.preventDefault();
    const trans = {
      id:Math.floor(Math.random() * 100000000),
      text,
      amount:+amount

    }
    
    addTransaction(trans)
  }
    return (
        <>
            <h3>Add new transaction</h3>
      <form  onSubmit={transHandler}>
        <div className  ="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}  plaeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}  placeholder="Enter amount..." />
        </div>
        <button  className="btn">Add transaction</button>
      </form>
            
        </>
    )
}
