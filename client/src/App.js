import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home"
import Access from "./pages/Access";

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/action/acceso/:id" element={<Access/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
