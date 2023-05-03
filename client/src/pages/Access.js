import { useParams, Link } from "react-router-dom";
import "./Access2.css"
import axios from "axios";
import React, {useState, useEffect} from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import jsPDF from "jspdf";

function Access() {

	const today = new Date();
  	const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  	const formattedDate = today.toLocaleDateString('es-ES', options);

    const routeParams = useParams();

	const id = routeParams.id;

    const [data, setData] = useState ([]);

    const loadData = async () => {
        const response = await axios.get("https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/action/acceso/"+id);
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, );

	function calc(GENDER){ 
		if(GENDER == 0){
			return "Masculino";
		}
		else if(GENDER == 1){
			return "Femenino";
		} else {
			return "Otro";
		}
	};
	
	function generatePdf() {
        const doc = new jsPDF();
  
		doc.setFont('Helvetica', 'normal');
		doc.setFontSize(12);

        doc.addImage('https://d1.awsstatic.com/case-studies/Latam%20Cases%20Assets/Kueski.309ce0a57d3f89bf47b176fb6f1a985e373d1e90.png', 'PNG', 19, -2, 30, 20);

        doc.text(`Acceso: ${data[0].USER_NAME} ${data[0].USER_LAST_NAME} ${data[0].USER_SEC_LAST_NAME}`, 20, 30);
        doc.text(`Fecha: ${formattedDate}`, 20, 40);
        doc.text(`Nombre: ${data[0].USER_NAME}`, 20, 50);
        doc.text(`Apellido Paterno: ${data[0].USER_LAST_NAME}`, 20, 60);
        doc.text(`Apellido Materno: ${data[0].USER_SEC_LAST_NAME}`, 20, 70);
        doc.text(`Fecha de nacimiento: ${data[0].BIRTH ? data[0].BIRTH.slice(0,10) : null}`, 20, 80);
        doc.text(`Nacionalidad: ${data[0].NATIONALITY}`, 20, 90);
        doc.text(`Estado de nacimiento: ${data[0].STATE}`, 20, 100);
        doc.text(`Actividad Económica: ${data[0].ECONOMIC_ACTIVITY}`, 20, 110);
        doc.text(`CURP: ${data[0].CURP}`, 20, 120);
        doc.text(`RFC: ${data[0].RFC}`, 20, 130);
        doc.text(`Género: ${calc(data[0].GENDER) }`, 20, 140);
        doc.text(`Número: ${data[0].PHONE}`, 20, 150);
        doc.text(`Email: ${data[0].EMAIL}`, 20, 160);
        doc.text(`País: ${data[0].COUNTRY}`, 20, 170);
        doc.text(`Estado: ${data[0].AD_STATE}`, 20, 180);
        doc.text(`Ciudad: ${data[0].CITY}`, 20, 190);
        doc.text(`Colonia: ${data[0].NBHOOD}`, 20, 200);
		doc.text(`CP: ${data[0].ZIP_CODE}`, 20, 210);
		doc.text(`Calle: ${data[0].STREET}`, 20, 220);
		doc.text(`Numero Exterior: ${data[0].EXT_NUM}`, 20, 230);
		doc.save(`${data[0].USER_LAST_NAME}_${data[0].USER_NAME}_reporte.pdf`);
	}

    return(
        <div className='acceso'>
			<div className='buttonreport' onClick={generatePdf}>
				<span className='reporte'>Generar reporte</span>
			</div>
			<div className='other'>
				<span className='Otros'>Otros</span>
				<textarea className='rectangle'/>
			</div>
				{data.map((item, index) => {
                        return (
							<div key={item.USER_ID}>
								<div className="head">
									<img className="logo" alt="kueski logo" src={require("../assets/kuski_logo_black.png")}/>
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
											<span className='bd'>{calc(item.GENDER) }</span>
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