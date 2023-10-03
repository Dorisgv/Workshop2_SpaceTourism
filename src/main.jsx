import ReactDOM from 'react-dom/client'
import Home from './components/home/Home';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/> } />  
      
    </Routes>
  </BrowserRouter>
)