import './App.css';
import Header from "./components/Header"
import ExpenseInfo from "./components/ExpenseInfo";
import ExpenseHistory from "./components/ExpenseHistory";
import ExpenseForm from "./components/ExpenseForm";
import Footer from './components/Footer';


function App() {
  return (
    <div className="main-container">
        <Header/>
        <ExpenseInfo/>
        <ExpenseHistory/>
        <ExpenseForm/>
        <Footer/>
        
        
    </div>
  );
}

export default App;
