import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home"
import Access from "./pages/Access";
import Modal from "./Components/Modal";
import Logs from "./pages/Logs";
import Rectification from "./pages/Rectification"

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/action/acceso/:id" element={<Access/>} />
        <Route path="/action/rect/:id" element={<Rectification/>} />
        <Route path="/action/op/:id" element={<Modal/>} />
        <Route path="/menu/arco" element={<Logs/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
