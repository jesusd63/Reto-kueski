import { useParams } from "react-router-dom";
import "./Acceso.css"
import axios from "axios";
import React, {useState, useEffect} from 'react';

function Acceso() {

    const routeParams = useParams();

    const [data, setData] = useState ([]);

    const loadData = async () => {
        const response = await axios.get("https://kueskiapi-jorgestebanmr-gmailcom.vercel.app/menu");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    data.map((item, index) => {
        if(item.USER_ID === routeParams.id){
            console.log(item.USER_NAME);
        } 
    });

    console.log(data);

    return(
        <div className='acceso_1_acceso'>
			<div className='buttonreport'>
				<div className='Rectangle30'/>
				<span className='Generarreporte'>Generar reporte</span>
			</div>
			<div className='other'>
				<span className='Otros'>Otros</span>
				<div className='Rectangle27'/>
			</div>
			<div className='head'>
				<span className='AccesoRafaelBelloniRocha'>Acceso: {data.USER_NAME} {data.USER_LAST_NAME} {data.USER_SEC_LAST_NAME}</span>
				<span className='Fecha18Mar2023'>Fecha: 18/Mar/2023</span>

			</div>
			<div className='DATA'>
			<div className='data'>
					<div className='info'>
						<span className='Rafael'>{data.USER_NAME}</span>
						<span className='Belloni'>{data.USER_LAST_NAME}</span>
						<span className='Rocha'>{data.USER_SEC_LAST_NAME}</span>
						<span className='_15011984'>{data.BIRTH}</span>
						<span className='Mexicana'>{data.NATIONALITY}</span>
						<span className='Sonora'>{data.STATE}</span>
						<span className='Personafsica'>{data.ECONOMIC_ACTIVITY}</span>
						<span className='RONC712938715897A'>{data.CURP}</span>
						<span className='JDKS21983719586'>{data.RFC}</span>
						<span className='Masculino'>{data.GENDER}</span>
						<span className='_6444612431'>{data.PHONE}</span>
						<span className='rafaelbellonigmailcom'>{data.EMAIL}</span>
					</div>
					<div className='titles'>
						<span className='Nombre'>Nombre</span>
						<span className='ApellidoPaterno'>Apellido Paterno</span>
						<span className='ApellidoMaterno'>Apellido Materno</span>
						<span className='Fechadenacimiento'>Fecha de nacimiento </span>
						<span className='Nacionalidad'>Nacionalidad</span>
						<span className='Estadodenacimiento'>Estado de nacimiento</span>
						<span className='ActividadEconmica'>Actividad Económica</span>
						<span className='CURP'>CURP</span>
						<span className='RFC'>RFC</span>
						<span className='Gnero'>Género</span>
						<span className='Nmero'>Número</span>
						<span className='Email'>Email</span>
					</div>
				</div>
				<div className='data2'>
					<div className='info_1'>
						<span className='Mxico'>México</span>
						<span className='Jalisco'>Jalisco</span>
						<span className='Rocha_1'>Guadalajara</span>
						<span className='ValledelReal'>Valle del Real</span>
						<span className='_85134'>85134</span>
						<span className='SantaMargarita'>Santa Margarita</span>
						<span className='_175'>175</span>
					</div>
					<div className='titles_1'>
						<span className='Pas'>País</span>
						<span className='Estado'>Estado</span>
						<span className='Ciudad'>Ciudad</span>
						<span className='Colonia'>Colonia </span>
						<span className='Zip'>Zip</span>
						<span className='Calle'>Calle</span>
						<span className='Nmeroexterior'>Número exterior</span>
						<span className='Nmerointerior'>Número interior</span>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Acceso;