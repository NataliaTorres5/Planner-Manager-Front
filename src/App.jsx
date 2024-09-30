
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/HomePage" ;
import ProyectsPage from "./pages/ProyectsPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/LogInPage";
import WebsiteLayout from "./layouts/WebsiteLayout";

function App() {


  return (
    <>
      <BrowserRouter>
   
        <Routes>
        <Route path="/" element={<WebsiteLayout/> } > 
          <Route path="/" element={<Home />} />
          <Route path="/proyects" element={<ProyectsPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<SignInPage/>} />
          </Route>
        </Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App
