import React from "react";

function ExpenseForm() {

const haddelAddition= (event) =>{
    event.preventDefault();

}

    return (
       
            <div className="expense-form"> 
                <h3>Add New Transaction</h3>
                <hr/> 
                <div >
                <form onSubmit={haddelAddition}>
                    <label> Description </label>
                    <br/> 
                    <input type="text" required/>
                    <br/>   

                    <label> Amount </label>
                    <br/> 
                    <input type="text" required/>
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
