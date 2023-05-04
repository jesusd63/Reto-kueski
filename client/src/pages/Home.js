import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { AiFillHome, AiOutlineMenu, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Backdrop from "../Components/Backdrop"
import Cancel from "./Cancel";
import Oposition from "./Oposition";
import Popup from "reactjs-popup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Home(props) {

  const [search, setSearch] = useState("");
  const [oposicionOpen, setOposicionOpen] = useState({
    USER_ID: 0,
    OPEN: false,
  });
  
  const [cancelOpen, setCancelOpen] = useState({
    USER_ID: 0,
    OPEN: false,
  });

  const openCancelPopup = (userId) => {
    setCancelOpen({
      USER_ID: userId,
      OPEN: true,
    })
  };

  const openOposicionPopup = (userId) => {
    setOposicionOpen({
      USER_ID: userId,
      OPEN: true
    })
  };

  const closeCancelPopup = () => {
    setCancelOpen({
      OPEN: false,
    });
  };

  const closeOposicionPopup = () => {
    setOposicionOpen({
      OPEN:false,
    });
  };

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
        <div className="nav-top">
          <h1 className="table-title">Usuarios</h1>
          <Form>
            <InputGroup className="my-3">
              <Form.Control
                className="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar"
              />
            </InputGroup>
          </Form>
        </div>
      <div>
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
          {data
              .filter((item) => {
                // eslint-disable-next-line eqeqeq
                return search.toLowerCase() == ""
                  ? item
                  : item.USER_LAST_NAME.toLowerCase().includes(search) ||
                      item.USER_LAST_NAME.includes(search) ||
                      item.CURP.includes(search) ||
                      item.RFC.includes(search);
              })
            .map((item, index) => {
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

                        <button type="button" className="btn" onClick={() => openCancelPopup(item.USER_ID)}>Cancelación</button>
                        <Popup open={cancelOpen.OPEN} lockScroll={true} nested>
                          <Cancel onClose={closeCancelPopup} userId={cancelOpen.USER_ID}/>
                        </Popup>

                        <button type="button" className="btn" onClick={() => openOposicionPopup(item.USER_ID)}>Oposición</button>
                        <Popup open={oposicionOpen.OPEN} lockScroll={true} nested>
                          <Oposition onClose={closeOposicionPopup}  userId={oposicionOpen.USER_ID}/>
                        </Popup>

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