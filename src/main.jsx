import ReactDOM from 'react-dom/client'
import Home from './components/home/Home';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from './components/destination/Destination';
import Mars from './components/destination/Mars';
import Titan from './components/destination/Titan';
import Europa from './components/destination/Europa';
import Moon from './components/destination/Moon';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/> } />  
    <Route path="/destination" element={<Moon />}/>
    <Route path="/Mars" element={<Mars />}/>
    <Route path="/Titan" element={<Titan />}/>
    <Route path="/Europa" element={<Europa />}/>
    </Routes>
  </BrowserRouter>
)
