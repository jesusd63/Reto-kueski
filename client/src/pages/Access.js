import { useParams, Link } from "react-router-dom";
import "./Access2.css"
import axios from "axios";
import React, {useState, useEffect} from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

function Access() {

	const today = new Date();
  	const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  	const formattedDate = today.toLocaleDateString('es-ES', options);
	const masculino = "Masculino";
	const femenino = "Femenino";	

    const routeParams = useParams();

	const id = routeParams.id;

    const [data, setData] = useState ([]);

    const loadData = async () => {
        const response = await axios.get("https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/acceso/"+id);
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

	console.log(data);
		
    return(
        <div className='acceso'>
			<div className='buttonreport'>
				<span className='reporte'>Generar reporte</span>
			</div>
			<div className='other'>
				<span className='Otros'>Otros</span>
				<div className='rectangle'/>
			</div>
				{data.map((item, index) => {
                        return (
							<div key={item.USER_ID}>
								<div className="head">
									<span className='Name'>Acceso: {item.USER_NAME} {item.USER_LAST_NAME} {item.USER_SEC_LAST_NAME}</span>
									<span className='Date'>Fecha: {formattedDate} </span>								
									<Link to={`/`}>
										<AiFillCloseCircle className='close'/>
                        			</Link>
								</div>
								<div className="DATA">
									<div className="data">
										<div className='info'>
											<span className='bd'>{item.USER_NAME}</span>
											<span className='bd'>{item.USER_LAST_NAME}</span>
											<span className='bd'>{item.USER_SEC_LAST_NAME}</span>
											<span className='bd'>{item.BIRTH ? item.BIRTH.slice(0,10) : null}</span>
											<span className='bd'>{item.NATIONALITY}</span>
											<span className='bd'>{item.STATE}</span>
											<span className='bd'>{item.ECONOMIC_ACTIVITY}</span>
											<span className='bd'>{item.CURP}</span>
											<span className='bd'>{item.RFC}</span>
											<span className='bd'>{item.GENDER ? femenino : masculino}</span>
											<span className='bd'>{item.PHONE}</span>
											<span className='bd'>{item.EMAIL}</span>
										</div>
										<div className="data2">
											<div className='info_1'>
												<span className='bd'>{item.COUNTRY}</span>
												<span className='bd'>{item.AD_STATE}</span>
												<span className='bd'>{item.CITY}</span>
												<span className='bd'> {item.NBHOOD} </span>
												<span className='bd'> {item.ZIP_CODE} </span>
												<span className='bd'> {item.STREET} </span>
												<span className='bd'> {item.EXT_NUM} </span>
											</div>
										</div>
									</div>
								</div>
							</div>
							
                        );
                    })}

			<div className='DATA'>
				<div className='data'>
					<div className='titles'>
						<span>Nombre</span>
						<span>Apellido Paterno</span>
						<span>Apellido Materno</span>
						<span>Fecha de nacimiento </span>
						<span>Nacionalidad</span>
						<span>Estado de nacimiento</span>
						<span>Actividad Económica</span>
						<span>CURP</span>
						<span>RFC</span>
						<span>Género</span>
						<span>Número</span>
						<span>Email</span>
					</div>
				</div>
				<div className='data2'>
					<div className='titles'>
						<span>País</span>
						<span>Estado</span>
						<span>Ciudad</span>
						<span>Colonia </span>
						<span>Zip</span>
						<span>Calle</span>
						<span>Número exterior</span>
						<span>Número interior</span>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Access;