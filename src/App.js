
import './App.css';
import Home from './wrapper/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router> 
    <div className="App">
        <Home></Home>
    </div>
    </Router> 


  );
}

export default App;

