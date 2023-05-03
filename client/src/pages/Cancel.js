import "./Cancel.css";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { openOposicionPopup } from "./Home";

export default function Cancel(props) {
  const userId = props.userId;
  const routeParams = useParams();

  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const user = routeParams.user;
    const url = `https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/cancel/${userId}/${comment}`;
    fetch(url, {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Aquí puedes hacer lo que necesites después de que se complete la petición
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleRealizarOposicion = () => {
    props.onClose();
    handleSubmit();
  };
  return (
    <div className="cancel">
      <span className="head">Cancelación: {props.userId}</span>
      <div>
        <AiFillCloseCircle onClick={props.onClose} className="close" />
      </div>
      <span className="info">
        Por este medio y según los alineamientos de los derechos ARCO con los
        que cuenta, el usuario solicita la
        cancelación en el uso de sus datos personales.
      </span>
      <span className="razon">Razón del Usuario:</span>
      <div className="input">
        <textarea className="Rectangle29" onChange={handleCommentChange} />
      </div>
      <div className="Cambios">
        <button className="cancel-btn" onClick={handleRealizarOposicion}>
          Realizar Oposición
        </button>
      </div>
    </div>
  );
}
