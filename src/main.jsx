import ReactDOM from 'react-dom/client'
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import "../src/scss/technology.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Technology/> } />  
      
    </Routes>
  </BrowserRouter>
)
