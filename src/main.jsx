import ReactDOM from 'react-dom/client'
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import "../src/scss/technology.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from './components/destination/Destination';
import Mars from './components/destination/Mars';
import Titan from './components/destination/Titan';
import Europa from './components/destination/Europa';
import Moon from './components/destination/Moon';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/home/Layout';
import CrewP from './components/crew/CrewP';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={ <Layout/> } >
        <Route path="/" element={ <Home/> } /> 
        <Route path="/Destination" element={<Destination />}/> 
        {/* <Route path="/Moon" element={<Moon />}/> */}
        <Route path="/Mars" element={<Mars />}/>
        <Route path="/Titan" element={<Titan />}/>
        <Route path="/Europa" element={<Europa />}/>
        <Route path="/CrewP" element={<CrewP />}/> 
      </Route>
    </Routes>
  </BrowserRouter>
)
