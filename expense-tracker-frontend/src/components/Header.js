import Balance from "./Balance";


function  Header() {
  return (
    <div className="header">
      <div className="expense-header">
        <h2>Expense Tracker </h2>
        <Balance/>
        </div>
     
    </div>
  );
}

export default Header;