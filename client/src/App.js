import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home"

import Acceso from "./pages/Acceso"
import Logs from "./pages/Logs"


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/action/acceso/:id" element={<Acceso />}/>
        <Route exact path="/menu/arco" element={<Logs />}/>


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
