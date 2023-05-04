import React, { useState } from "react";
import "./Oposition.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Oposition(props) {
  const userId = props.userId;
  const userName = props.userName;
  const userLastName = props.userLastName;
  const userSecLastName = props.userSecLastName;

  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const url = `https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/op/${userId}/${comment}`;
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
    toast.success("Se realizó la oposición con éxito");
  };

  return (
    <div className="opo">
      <span className="head">Oposición</span>
      <div>
        <AiFillCloseCircle onClick={props.onClose} className="close" />
      </div>
      <span className="info">
        Por este medio y según los alineamientos de los derechos ARCO con los
        que cuenta, el usuario {userName} {userLastName} {userSecLastName} solicita la oposición de sus datos personales.
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