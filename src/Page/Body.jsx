import React, { useEffect, useState } from "react";


import axios from "axios";
import { TableThead } from "../Util/TableThead";
import Modal1 from "../Components/Util/Modal";

export default function RestApiHooksComponent() {

    const [dato, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://cors-anywhere.herokuapp.com/http://159.89.143.117:3001/raccoon/feelings')
            .then(result => setData(result.data.feelings));
    }, []);
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>{TableThead[0].valor1}</th>
                        <th scope="col">{TableThead[0].valor2}</th>
                        <th scope="col">{TableThead[0].valor3}</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {dato.map(sentimiento => <tr key={sentimiento.id}>
                        <th scope="row" style={{padding:5}}>{sentimiento.id}</th>
                        <td style={{padding:5}}>{sentimiento.desc}</td>
                        <td>
                            <div className=" col-md-12 row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4" style={{padding:5}}>
                            <Modal1 {...sentimiento}>Elegir</Modal1>
                            </div>
                            <div className="col-md-4" style={{padding:5}}>
                            
                            <Modal1 {...sentimiento}>Detalle</Modal1>
                            </div>
                            </div>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}