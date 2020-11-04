import './App.css';
import Header from "./components/Header"
import ExpenseInfo from "./components/ExpenseInfo";
import ExpenseHistory from "./components/ExpenseHistory";


function App() {
  return (
    <div className="main-container">
        <Header/>
        <ExpenseInfo/>
        <ExpenseHistory/>
        
        
    </div>
  );
}

export default App;
