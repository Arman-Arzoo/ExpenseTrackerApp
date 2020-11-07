import React, { useContext, useState } from "react";
import {TransContext} from "../TransactionContext";


function ExpenseForm() {
    let {add} = useContext(TransContext);

    let [newDesc, setDesc]= useState("");
    let [newAmount, setAmount]= useState(0);





const haddelAddition= (event) =>{
    event.preventDefault();
    
    add({
        amount:Number(newAmount),
        desc:newDesc
    })

    
}

    return (
       
            <div className="expense-form"> 
                <h3>Add New Transaction</h3>
                <hr/> 
                <div >
                <form onSubmit={haddelAddition}>
                    <label> Description </label>
                    <br/> 
                    <input type="text" required onChange={(ev)=>{setDesc(ev.target.value)}}/>
                    <br/>   

                    <label> Amount </label>
                    <br/> 
                    <input type="text" required onChange={(ev)=>{setAmount(ev.target.value)}}/>
                    <br/> 
                    <input type="submit" value="Add Transaction"></input>
                    
                </form>
                </div>  
               <br/>
               <br/>
               <br/>
               <br/>
            </div>


    )
}

export default ExpenseForm;
