import React, { useState, useEffect } from "react";
import "./Home.css";
import { toast } from "react-toastify";
import axios from "axios";
import { AiFillHome, AiOutlineUser, AiOutlineMenu, AiOutlineClockCircle } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import Modal from "../Components/Modal";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "../Components/Backdrop"
import Cancel from "./Cancel";
import Popup from "reactjs-popup";

const Home = () => {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [CancelIsOpen, setCancelIsOpen] = useState(false);

  function cancelHandler() {
    if (CancelIsOpen) {
      setCancelIsOpen(false);
    } else {
      setCancelIsOpen(true);
    }
  }

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      "https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/menu"
    );
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ marginTop: "7vh" }}>
      {CancelIsOpen ? <Cancel onCancel={cancelHandler} /> : null}
      {CancelIsOpen && <Backdrop onCancel={cancelHandler}/>}
      <div className="sidebar">
        <img
          className="logo"
          alt="kueski logo"
          src={require("../assets/desktop_logo.png")}
        />
        <div className="user">
          <AiOutlineUser className="account1" />
          <span className="Login">Log in</span>
        </div>
        <div className="navlinks">
          <div className="dashboard">
            <Link to={`/`}>
              <AiFillHome className="casa1" />
              <span className="Dashboard">Dashboard</span>
            </Link>
            
          </div>
          <div className="logs">
            <Link to={`/menu/arco`}>
              <AiOutlineClockCircle className="logs1" />
              <span className="Logs">Logs</span>
            </Link>
            
          </div>
        </div>
      </div>
      <div>
        <h1 className="table-title">Usuarios</h1>
        <div />
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}> User Id</th>
              <th style={{ textAlign: "center" }}> Email </th>
              <th style={{ textAlign: "center" }}> Nombre </th>
              <th style={{ textAlign: "center" }}> Primer Apellido </th>
              <th style={{ textAlign: "center" }}> Segundo Apellido </th>
              <th style={{ textAlign: "center" }}> CURP </th>
              <th style={{ textAlign: "center" }}> RFC </th>
              <th style={{ textAlign: "center" }}> Acciones </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.USER_ID}>
                  <th scope="row">{item.USER_ID}</th>
                  <td>{item.EMAIL}</td>
                  <td>{item.USER_NAME}</td>
                  <td>{item.USER_LAST_NAME}</td>
                  <td>{item.USER_SEC_LAST_NAME}</td>
                  <td>{item.CURP}</td>
                  <td>{item.RFC}</td>
                  <td>
                    <div className="dropdown">
                      <AiOutlineMenu className="dropbtn"></AiOutlineMenu>
                      <div className="dropdown-content">
                        <Link style={{ textDecoration: "none" }} to={`/action/acceso/${item.USER_ID}`}>
                          <button className="btn"> Acceso </button>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={`/action/rect/${item.USER_ID}`}>
                          <button className="btn">Rectificación</button>
                        </Link>
                        <button type="button" className="btn" onClick={() => setOpen(o => !o)}>Cancelación</button>
                        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                          <Backdrop />
                          <Cancel />
                        </Popup>
                        <Link style={{ textDecoration: "none" }} to={`/action/op/${item.USER_ID}`}>
                          <button className="btn"> Oposición </button>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
