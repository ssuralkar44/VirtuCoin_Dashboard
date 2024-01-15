import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CryptoHome from './Pages/CryptoHome';
import CryptoDetail from './Pages/CryptoDetail';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path= "/" element={<CryptoHome/>}/>
      <Route path="/coin/:id" element={<CryptoDetail/>}/>
      <Route path= "/LogIn" element={<LogIn/>}/>
      <Route path= "/SignUp" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
