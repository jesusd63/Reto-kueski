import React from "react";
import "./Cancel.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Cancel(props) {
  return (
    <div className="cancel">
      <span className="head">Cancelación - Rafael Nicolas Belloni Rocha</span>
		<AiFillCloseCircle onClick={props.onCancel} className="close" />
      <span className="info">
        Por este medio y según los alineamientos de los derechos ARCO con los
        que cuenta, el usuario Rafael Nicolas Belloni Rocha solicita la
        cancelación en el uso de sus datos personales.
      </span>
      <span className="razon">Razón del Usuario:</span>
      <div className="input">
        <div className="Rectangle29" />
      </div>
      <div className="Cambios">
        <div className="Rectangle28" />
        <span className="cancel-btn">Cancelar información</span>
      </div>
    </div>
  );
}
