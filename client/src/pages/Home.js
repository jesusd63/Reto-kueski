import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"; 
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState ([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/menu");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div style={{marginTop: "150px"}}>
            <table className="styled-table"> 
                <thead> 
                    <tr>
                        <th style={{textAlign: "center"}}> User Id</th>
                        <th style={{textAlign: "center"}}> Email </th>
                        <th style={{textAlign: "center"}}> Nombre </th>
                        <th style={{textAlign: "center"}}> Primer Apellido </th>
                        <th style={{textAlign: "center"}}> Segundo Apellido </th>
                        <th style={{textAlign: "center"}}> CURP </th>
                        <th style={{textAlign: "center"}}> RFC </th>
                        <th style={{textAlign: "center"}}> Acciones </th>
                    </tr>   
                </thead>

                <tbody>
                    {console.log(data)}
                    {data.map((item, index) => {
                        return (
                            <tr key={item.USER_ID}>
                                <th scope="row">{index+1}</th>
                                <td>{item.EMAIL}</td>
                                <td>{item.NAME}</td>
                                <td>{item.LAST_NAME}</td>
                                <td>{item.SECOND_LAST_NAME}</td>
                                <td>{item.CURP}</td>
                                <td>{item.RFC}</td>
                                <td>
                                    <Link to={`/action/acceso/${item.USER_ID}`}>
                                        <button className="btn btn-acceso"> Acceso </button> 
                                    </Link>
                                    <Link to={`/action/rect/${item.USER_ID}`}>
                                        <button className="btn btn-rect">Rectificación</button>
                                    </Link>
                                    <button className="btn btn-cancel"> Cancelación </button>
                                    <button className="btn btn-op"> Oposición </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home;