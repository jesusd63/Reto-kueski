import React, {useState, useEffect} from 'react';
import "./Home.css";
import axios from "axios";
import { AiFillHome, AiOutlineUser} from "react-icons/ai";
import {Link} from "react-router-dom";


const Logs = () => {


    const [data, setData] = useState ([]);

    const loadData = async () => {
        const response = await axios.get("https://kueskiapi-jorgestebanmr-gmailcom-jorgestebanmr-gmailcom-s-team.vercel.app/menu/arco");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{marginTop: "7vh"}}>
            <div className='sidebar'>
				    <img className='logo' alt = "kueski logo" src = {require("../assets/desktop_logo.png")}/>
				<div className='user'>
                    <AiOutlineUser className='account1'/>
					<span className='Login'>Log in</span>
				</div>
				<div className='navlinks'>
					<div className='dashboard'>
                        <Link to={`/`}>
                            < AiFillHome className='casa1'/>
                            <span className='Dashboard'>Dashboard</span>
                        </Link>
					</div>
				</div>
			</div>
            <div>
                <h1 class="table-title">ARCO Logs</h1>
            <div/>
            <table className="styled-table"> 
                <thead> 
                    <tr>
                        <th style={{textAlign: "center"}}> Action Id</th>
                        <th style={{textAlign: "center"}}> User Id </th>
                        <th style={{textAlign: "center"}}> Tipo de Acción </th>
                        <th style={{textAlign: "center"}}> Fecha </th>
                        <th style={{textAlign: "center"}}> Comentarios </th>
                    </tr>   
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.USER_ID}>
                                <th scope="row">{item.ACTION_ID}</th>
                                <td>{item.USER_ID}</td>
                                <td>{item.ACTION_TYPE}</td>
                                <td>{item.ARCO_DATE}</td>
                                <td>{item.COMMENT}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Logs;