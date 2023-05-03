import { useParams } from "react-router-dom";
import "./Rectification.css"
import axios from "axios";
import React, {useState, useEffect} from 'react';

function UserForm() {

    const routeParams = useParams();

    const id = routeParams.id;

  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    USER_NAME: "",
    USER_LAST_NAME: "",
    USER_SEC_LAST_NAME: "",
    BIRTH: "",
    NATIONALITY: "",
    STATE: "",
    ECONOMIC_ACTIVITY: "",
    CURP: "",
    RFC: "",
    GENDER: "",
    PHONE: "",
    EMAIL: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        "user": id,
        "nom": formData.USER_NAME,
        "lname": formData.USER_LAST_NAME,
        "slname":formData.USER_SEC_LAST_NAME,
        "birth": formData.BIRTH,
        "nac": formData.NATIONALITY,
        "est": formData.STATE,
        "gen":formData.GENDER,
        "num":formData.PHONE,
        "email":formData.EMAIL,
        "rfc":formData.RFC,
        "curp":formData.CURP,
        "ae":formData.ECONOMIC_ACTIVITY
    }
      const response = await axios.patch(`https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/rect`, body);
      setUserData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
};

  useEffect(() => {
    fetch(`https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/acceso/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Aquí establecemos los datos obtenidos en el estado userData
        setUserData(data[0]);
        setFormData({
            USER_NAME: data[0].USER_NAME ,
            USER_LAST_NAME: data[0].USER_LAST_NAME,
            USER_SEC_LAST_NAME: data[0].USER_SEC_LAST_NAME,
            BIRTH: data[0].BIRTH,
            NATIONALITY: data[0].NATIONALITY,
            STATE: data[0].STATE,
            ECONOMIC_ACTIVITY: data[0].ECONOMIC_ACTIVITY,
            CURP: data[0].CURP,
            RFC: data[0].RFC,
            GENDER: data[0].GENDER,
            PHONE: data[0].PHONE,
            EMAIL: data[0].EMAIL,
          });
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-rect">
      <label htmlFor="USER_NAME">Nombre:</label>
      <input
        type="text"
        id="USER_NAME"
        name="USER_NAME"
        value={formData.USER_NAME}
        onChange={handleChange}
      />
      <label htmlFor="USER_LAST_NAME">Apellido Paterno:</label>
      <input
        type="text"
        id="USER_LAST_NAME"
        name="USER_LAST_NAME"
        value={formData.USER_LAST_NAME}
        onChange={handleChange}
      />
      <label htmlFor="USER_SEC_LAST_NAME">Apellido Materno:</label>
      <input
        type="text"
        id="USER_SEC_LAST_NAME"
        name="USER_SEC_LAST_NAME"
        value={formData.USER_SEC_LAST_NAME}
        onChange={handleChange}
      />
      <label htmlFor="BIRTH">Fecha de Nacimiento:</label>
      <input
        type="date"
        id="BIRTH"
        name="BIRTH"
        value={formData.BIRTH ? formData.BIRTH.slice(0,10) : null}
        onChange={handleChange}
      />
      <label htmlFor="NACIONALITY">Nacionalidad:</label>
      <input
        type="text"
        id="NATIONALITY"
        name="NATIONALITY"
        value={formData.NATIONALITY}
        onChange={handleChange}
      />
      <label htmlFor="STATE">Estado:</label>
      <input
        type="text"
        id="STATE"
        name="STATE"
        value={formData.STATE}
        onChange={handleChange}
      />
      <label htmlFor="ECONOMIC_ACTIVITY">Actividad Economica:</label>
      <ifz
        type="text"
        id="ECONOMIC_ACTIVITY"
        name="ECONOMIC_ACTIVITY"
        value={formData.ECONOMIC_ACTIVITY}
        onChange={handleChange}
      />
      <label htmlFor="CURP">CURP:</label>
      <input
        type="text"
        id="CURP"
        name="CURP"
        value={formData.CURP}
        onChange={handleChange}
      />
      <label htmlFor="RFC">RFC:</label>
      <input
        type="text"
        id="RFC"
        name="RFC"
        value={formData.RFC}
        onChange={handleChange}
      />
      <label htmlFor="GENDER">Genero:</label>
      <input
        type="number"
        id="GENDER"
        name="GENDER"
        value={formData.GENDER}
        onChange={handleChange}
        min={0}
        max={2}
      />
      <label htmlFor="PHONE">Telefono:</label>
      <input
        type="number"
        id="PHONE"
        name="PHONE"
        value={formData.PHONE}
        onChange={handleChange}
      />
      <label htmlFor="EMAIL">EMAIL:</label>
      <input
        type="text"
        id="EMAIL"
        name="EMAIL"
        value={formData.EMAIL}
        onChange={handleChange}
      />

      <button className="btn-save" type="submit" onSubmit={handleSubmit}>Guardar cambios</button>

      </div>
    </form>
  );
}

export default UserForm;
