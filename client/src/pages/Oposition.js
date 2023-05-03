import React from "react";
import "./Oposition.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Oposition(props) {
  return (
    <div className="opo">
      <span className="head">Oposición: </span>
      <div>
        <AiFillCloseCircle onClick={props.onClose} className="close" />
      </div>
      <span className="info">
        Por este medio y según los alineamientos de los derechos ARCO con los
        que cuenta, el usuario solicita la
        oposición de sus datos personales.
      </span>
      <span className="razon">Razón del Usuario:</span>
      <div className="input">
        <textarea className="Rectangle29" />
      </div>
      <div className="Cambios">
        <button className="cancel-btn">Realizar Oposición</button>
      </div>
    </div>
  );
}