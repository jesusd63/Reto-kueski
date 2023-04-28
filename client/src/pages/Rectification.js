import { useParams } from "react-router-dom";
import "./Access2.css"
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
      const response = await axios.get(`https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/rect/${id}/${formData.USER_NAME}/${formData.USER_LAST_NAME}/${formData.USER_SEC_LAST_NAME}/${formData.BIRTH.slice(0,10)}/${formData.NATIONALITY}/${formData.STATE}/${formData.GENDER}/${formData.PHONE}/${formData.EMAIL}/${formData.RFC}/${formData.CURP}/${formData.ECONOMIC_ACTIVITY}`);
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
      <label htmlFor="USER_NAME">Fecha de Nacimiento:</label>
      <input
        type="text"
        id="BIRTH"
        name="BIRTH"
        value={formData.BIRTH ? formData.BIRTH.slice(0,10) : null}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">Nacionalidad:</label>
      <input
        type="text"
        id="NATIONALITY"
        name="NATIONALITY"
        value={formData.NATIONALITY}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">Estado:</label>
      <input
        type="text"
        id="STATE"
        name="STATE"
        value={formData.STATE}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">Actividad Economica:</label>
      <input
        type="text"
        id="ECONOMIC_ACTIVITY"
        name="ECONOMIC_ACTIVITY"
        value={formData.ECONOMIC_ACTIVITY}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">CURP:</label>
      <input
        type="text"
        id="CURP"
        name="CURP"
        value={formData.CURP}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">RFC:</label>
      <input
        type="text"
        id="RFC"
        name="RFC"
        value={formData.RFC}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">Genero:</label>
      <input
        type="text"
        id="GENDER"
        name="GENDER"
        value={formData.GENDER}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">Telefono:</label>
      <input
        type="text"
        id="PHONE"
        name="PHONE"
        value={formData.PHONE}
        onChange={handleChange}
      />
      <label htmlFor="USER_NAME">EMAIL:</label>
      <input
        type="text"
        id="EMAIL"
        name="EMAIL"
        value={formData.EMAIL}
        onChange={handleChange}
      />
      <button type="submit" onSubmit={handleSubmit}>Guardar</button>
    </form>
  );
}

export default UserForm;
