import './App.css';
import Header from "./components/Header"
import ExpenseInfo from "./components/ExpenseInfo";
import ExpenseHistory from "./components/ExpenseHistory";
import ExpenseForm from "./components/ExpenseForm";
import Footer from './components/Footer';
import {TransactionProvider} from "./TransactionContext";



function App() {
  return (
    
    <div className="main-container">
      <TransactionProvider>
        <Header/>
        <ExpenseInfo/>
        <ExpenseHistory/>
        <ExpenseForm/>
        <Footer/>
        </TransactionProvider>
        
        
    </div>
  );
}

export default App;
