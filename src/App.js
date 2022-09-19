// import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import SignIn from './signin';
import SignUp from'./signup';
// import { Link, Route, Router, Routes } from 'react-router-dom';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Link to='/Home'>HOME</Link>  |
        <Link to='/About'>ABOUT</Link> |
        <Link to='/SignIn'>SIGNIN</Link> |
        <Link to='/SignUp'>SIGNUP</Link>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
