import { useParams, Link } from "react-router-dom";
import styles from "./Rectification.module.css"
import axios from "axios";
import React, {useState, useEffect} from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserForm() {

  const today = new Date();
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('es-ES', options);

  const routeParams = useParams();

  const id = routeParams.id;

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
    ADDRESS_ID: "",
    COUNTRY: "",
    AD_STATE: "",
    CITY: "",
    NBHOOD: "",
    ZIP_CODE: "",
    STREET: "",
    EXT_NUM: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user_information = {
        "user": Number(id),
        "nom": formData.USER_NAME,
        "lname": formData.USER_LAST_NAME,
        "slname":formData.USER_SEC_LAST_NAME,
        "birth": formData.BIRTH.slice(0,10),
        "nac": formData.NATIONALITY,
        "est": formData.STATE,
        "gen": Number(formData.GENDER),
        "num":Number(formData.PHONE),
        "email":formData.EMAIL,
        "rfc":Number(formData.RFC),
        "curp":formData.CURP,
        "ae":formData.ECONOMIC_ACTIVITY
    }
      const address_information = {
        "user": Number(id),
        "ad_id": Number(formData.ADDRESS_ID),
        "pais": formData.COUNTRY,
        "est": formData.AD_STATE,
        "ciudad":formData.CITY,
        "colonia": formData.NBHOOD,
        "zip": Number(formData.ZIP_CODE),
        "calle": formData.STREET,
        "ext": Number(formData.EXT_NUM),
    }
      console.log(address_information);
      await axios.patch(`https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/rect`, user_information);
      await axios.patch(`https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/rectAddress`, address_information);
      toast.success('Cambios guardados');
    } catch (error) {
      console.log(error);
      toast.error('Hubo un error');
    }
  };

  useEffect(() => {
    fetch(`https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/acceso/${id}`)
      .then((response) => response.json())
      .then((data) => {
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
            ADDRESS_ID: data[0].ADDRESS_ID,
            COUNTRY: data[0].COUNTRY,
            AD_STATE: data[0].AD_STATE,
            CITY: data[0].CITY,
            NBHOOD: data[0].NBHOOD,
            ZIP_CODE: data[0].ZIP_CODE,
            STREET: data[0].STREET,
            EXT_NUM: data[0].EXT_NUM,
          });
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={styles.rectificacion}>
      <div className={styles.head}>
					<img className={styles.logo} alt="kueski logo" src={require("../assets/kuski_logo_black.png")}/>
					<span className={styles.Name}>Rectificación: {formData.USER_NAME} {formData.USER_LAST_NAME} {formData.USER_SEC_LAST_NAME}</span>
					<span className={styles.Date}>Fecha: {formattedDate} </span>								
					<Link to={`/`}>
						<AiFillCloseCircle className={styles.close}/>
          </Link>
			</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.data_rect}>
          <div className={styles.data_rect_user}>
            <div className={styles.data_rect_title}>
              Datos Usuario
            </div>
            <div className={styles.datapiece}>
              <label htmlFor="USER_NAME">Nombre</label>
              <input
                type="text"
                id="USER_NAME"
                name="USER_NAME"
                value={formData.USER_NAME}
                onChange={handleChange}
              />
            </div>
                <div className={styles.datapiece}>
                  <label htmlFor="USER_LAST_NAME">Apellido Paterno</label>
                  <input
                    type="text"
                    id="USER_LAST_NAME"
                    name="USER_LAST_NAME"
                    value={formData.USER_LAST_NAME}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.datapiece}>
                  <label htmlFor="USER_SEC_LAST_NAME">Apellido Materno</label>
                  <input
                    type="text"
                    id="USER_SEC_LAST_NAME"
                    name="USER_SEC_LAST_NAME"
                    value={formData.USER_SEC_LAST_NAME}
                    onChange={handleChange}
                  />
                </div>
              <div className={styles.datapiece}>
                <label htmlFor="BIRTH">Fecha de Nacimiento</label>
                <input
                  type="date"
                  id="BIRTH"
                  name="BIRTH"
                  value={formData.BIRTH ? formData.BIRTH.slice(0,10) : null}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="NACIONALITY">Nacionalidad</label>
                <input
                  type="text"
                  id="NATIONALITY"
                  name="NATIONALITY"
                  value={formData.NATIONALITY}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="STATE">Estado</label>
                <input
                  type="text"
                  id="STATE"
                  name="STATE"
                  value={formData.STATE}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="ECONOMIC_ACTIVITY">Actividad Economica</label>
                <input
                  type="text"
                  id="ECONOMIC_ACTIVITY"
                  name="ECONOMIC_ACTIVITY"
                  value={formData.ECONOMIC_ACTIVITY}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="CURP">CURP</label>
                <input
                  type="text"
                  id="CURP"
                  name="CURP"
                  value={formData.CURP}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="RFC">RFC</label>
                <input
                  type="text"
                  id="RFC"
                  name="RFC"
                  value={formData.RFC}
                  onChange={handleChange}
              />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="GENDER">Genero</label>
                <input
                  type="number"
                  id="GENDER"
                  name="GENDER"
                  value={formData.GENDER}
                  onChange={handleChange}
                  min={0}
                  max={2}
                />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="PHONE">Telefono</label>
                <input
                  type="number"
                  id="PHONE"
                  name="PHONE"
                  value={formData.PHONE}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.datapiece}>
                <label htmlFor="EMAIL">EMAIL</label>
                <input
                  type="text"
                  id="EMAIL"
                  name="EMAIL"
                  value={formData.EMAIL}
                  onChange={handleChange}
                />
              </div>
          </div>
          <div className={styles.data_rect_dir}>
          <div className={styles.data_rect_title}>
              Datos Dirección
            </div>
            <div className={styles.datapiece}>
                  <label htmlFor="COUNTRY">País</label>
                  <input
                    type="text"
                    id="COUNTRY"
                    name="COUNTRY"
                    value={formData.COUNTRY}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.datapiece}>
                  <label htmlFor="AD_STATE">Estado</label>
                  <input
                    type="text"
                    id="AD_STATE"
                    name="AD_STATE"
                    value={formData.AD_STATE}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.datapiece}>
                  <label htmlFor="CITY">Ciudad</label>
                  <input
                    type="text"
                    id="CITY"
                    name="CITY"
                    value={formData.CITY}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.datapiece}>
                  <label htmlFor="NBHOOD">Colonia</label>
                  <input
                    type="text"
                    id="NBHOOD"
                    name="NBHOOD"
                    value={formData.NBHOOD}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.datapiece}>
                  <label htmlFor="ZIP_CODE">Zip</label>
                  <input
                    type="number"
                    id="ZIP_CODE"
                    name="ZIP_CODE"
                    value={formData.ZIP_CODE}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.datapiece}>
                  <label htmlFor="STREET">Calle</label>
                  <input
                    type="text"
                    id="STREET"
                    name="STREET"
                    value={formData.STREET}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.datapiece}>
                  <label htmlFor="EXT_NUM">Número exterior</label>
                  <input
                    type="number"
                    id="EXT_NUM"
                    name="EXT_NUM"
                    value={formData.EXT_NUM}
                    onChange={handleChange}
                  />
                </div>
          </div>
        </div>
        <div className={styles.btn_save_div}>
          <button className={styles.btn_save} type="submit" onSubmit={handleSubmit}>Guardar cambios</button>
        </div>
      </form>
      <div className={styles.end}></div>
    </div>
  );
}

export default UserForm;
