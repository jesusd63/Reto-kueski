import { useParams } from "react-router-dom";
import "./Access.css"
import axios from "axios";
import React, {useState, useEffect} from 'react';

function Access() {

    const routeParams = useParams();

	const id = routeParams.id;

    const [data, setData] = useState ([]);

    const loadData = async () => {
        const response = await axios.get("https://kueskiapi-jorgestebanmr-gmailcom.vercel.app/action/acceso/"+id);
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

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
				{data.map((item, index) => {
                        return (
							<div key={item.USER_ID}>
								<div className="head">
									<span className='AccesoRafaelBelloniRocha'>Acceso: {item.USER_NAME} {item.USER_LAST_NAME} {item.USER_SEC_LAST_NAME}</span>
									<span className='Fecha18Mar2023'>Fecha: 18/Mar/2023</span>
								</div>
								<div className="DATA">
									<div className="data">
										<div className='info'>
											<span className='Rafael'>{item.USER_NAME}</span>
											<span className='Belloni'>{item.USER_LAST_NAME}</span>
											<span className='Rocha'>{item.USER_SEC_LAST_NAME}</span>
											<span className='_15011984'> {item.BIRTH.slice(0,10)} </span>
											<span className='Mexicana'>{item.NATIONALITY}</span>
											<span className='Sonora'>{item.STATE}</span>
											<span className='Personafsica'>{item.ECONOMIC_ACTIVITY}</span>
											<span className='RONC712938715897A'>{item.CURP}</span>
											<span className='JDKS21983719586'>{item.RFC}</span>
											<span className='Masculino'>{item.GENDER}</span>
											<span className='_6444612431'>{item.PHONE}</span>
											<span className='rafaelbellonigmailcom'>{item.EMAIL}</span>
										</div>
										<div className="data2">
											<div className='info_1'>
												<span className='Mxico'>{item.COUNTRY}</span>
												<span className='Jalisco'>{item.AD_STATE}</span>
												<span className='Rocha_1'>{item.CITY}</span>
												<span className='ValledelReal'> {item.NBHOOD} </span>
												<span className='_85134'> {item.ZIP_CODE} </span>
												<span className='SantaMargarita'> {item.STREET} </span>
												<span className='_175'> {item.EXT_NUM} </span>
											</div>
										</div>
									</div>
								</div>
							</div>
							
                        );
                    })}

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

export default Access;