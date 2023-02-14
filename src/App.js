import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Properties from './components/Properties';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route index path="/" element={ <Home />}/>
          <Route path="/Properties" element={ <Properties/>}/>
          {/*<Route path="/Rent" element={ <Rent/>}/>
          <Route path="/Sell" element={ <Sell/>}/>
          <Route path="/Contacts" element={ <Contacts/>}/> */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
