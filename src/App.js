import './App.css';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import HomePage from './components/HomePage.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Routes>
        <Route path = '/' element = {<Loginpage/>}/>   
        <Route path = '/register' element = {<Registerpage/>}/>   
        <Route path = '/homepage' element = {<HomePage/>}/>
      </Routes>
      </div>
     </BrowserRouter>
    </div>

  );
}

export default App;
