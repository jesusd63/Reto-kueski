import { useParams } from "react-router-dom";
import "./Rectification.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
      const response = await axios.get(`https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/rect/${id}/${formData.USER_NAME}/${formData.USER_LAST_NAME}/${formData.USER_SEC_LAST_NAME}/${formData.BIRTH.slice(0,10)}/${formData.NATIONALITY}/${formData.STATE}/${formData.GENDER}/${formData.PHONE}/${formData.EMAIL}`);
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
      })
      .catch((error) => console.error(error));
  }, );

  useEffect(() => {
    // Aquí establecemos los valores iniciales del formulario con los datos del usuario
    setFormData({
      USER_NAME: userData.USER_NAME || "",
      USER_LAST_NAME: userData.USER_LAST_NAME || "",
      USER_SEC_LAST_NAME: userData.USER_SEC_LAST_NAME || "",
      BIRTH: userData.BIRTH || "",
      NATIONALITY: userData.NATIONALITY || "",
      STATE: userData.STATE || "",
      ECONOMIC_ACTIVITY: userData.ECONOMIC_ACTIVITY || "",
      CURP: userData.CURP || "",
      RFC: userData.RFC || "",
      GENDER: userData.GENDER || "",
      PHONE: userData.PHONE || "",
      EMAIL: userData.EMAIL || "",
    });
  }, [userData]);

  //asdads

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-rect">
        <label htmlFor="USER_NAME">Nombre:</label>
        <input
          type="text"
          id="USER_NAME"
          name="USER_NAME"
          defaultValue={formData.USER_NAME}
          onChange={handleChange}
          required
        />
        <label htmlFor="USER_LAST_NAME">Apellido Paterno:</label>
        <input
          type="text"
          id="USER_LAST_NAME"
          name="USER_LAST_NAME"
          defaultValue={formData.USER_LAST_NAME}
          onChange={handleChange}
          required
        />
        <label htmlFor="USER_SEC_LAST_NAME">Apellido Materno:</label>
        <input
          type="text"
          id="USER_SEC_LAST_NAME"
          name="USER_SEC_LAST_NAME"
          defaultValue={formData.USER_SEC_LAST_NAME}
          onChange={handleChange}
          required
        />
        <label htmlFor="BIRTH">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="BIRTH"
          name="BIRTH"
          defaultValue={formData.BIRTH ? formData.BIRTH.slice(0, 10) : null}
          onChange={handleChange}
          required
        />
        <label htmlFor="NATIONALITY">Nacionalidad:</label>
        <input
          type="text"
          id="NATIONALITY"
          name="NATIONALITY"
          defaultValue={formData.NATIONALITY}
          onChange={handleChange}
          required
        />
        <label htmlFor="STATE">Estado:</label>
        <input
          type="text"
          id="STATE"
          name="STATE"
          defaultValue={formData.STATE}
          onChange={handleChange}
          required
        />
        <label htmlFor="ECONOMIC_ACTIVITY">Actividad Economica:</label>
        <input
          type="text"
          id="ECONOMIC_ACTIVITY"
          name="ECONOMIC_ACTIVITY"
          defaultValue={formData.ECONOMIC_ACTIVITY}
          onChange={handleChange}
          required
        />
        <label htmlFor="CURP">CURP:</label>
        <input
          type="text"
          id="CURP"
          name="CURP"
          defaultValue={formData.CURP}
          onChange={handleChange}
          required
        />
        <label htmlFor="RFC">RFC:</label>
        <input
          type="text"
          id="RFC"
          name="RFC"
          defaultValue={formData.RFC}
          onChange={handleChange}
          required
        />
        <label htmlFor="GENDER">Genero:</label>
        <input
          type="number"
          id="GENDER"
          name="GENDER"
          defaultValue={formData.GENDER}
          onChange={handleChange}
          min={0}
          max={2}
          required
        />
        <label htmlFor="PHONE">Telefono:</label>
        <input
          type="number"
          id="PHONE"
          name="PHONE"
          defaultValue={formData.PHONE}
          onChange={handleChange}
          required
        />
        <label htmlFor="EMAIL">EMAIL:</label>
        <input
          type="email"
          id="EMAIL"
          name="EMAIL"
          defaultValue={formData.EMAIL}
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn-save" type="submit" onSubmit={handleSubmit}>
        Guardar cambios
      </button>
    </form>
  );
}

export default UserForm;
