import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Footer from './Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
    </Routes>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
