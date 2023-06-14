import React, { useState, useEffect} from "react";
import { Row, Col, Table} from "react-bootstrap";
import axios from "axios";

export default function ListLaboratorio() {
    const [laboratorios, setLaboratorios] = useState([]);

    const getLaboratorios = async () => {
        const response = await axios.get("http://localhost:8080/laboratorio");
        setLaboratorios(response.data);
    }

    useEffect(() => {
        getLaboratorios();
    }, []);

    return (
        <>
        <div className="d-flex justify-content-center ">
            <div>
                <br />
                <Row>
                    <h1 className="text-center">Datos de Laboratorio</h1>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Proveedor</th>
                                    <th>Quincena</th>
                                    <th>Grasa</th>
                                    <th>Solidos Totales</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {laboratorios.map((laboratorio) => (
                                    <tr key={laboratorio.id}>
                                        <td>{laboratorio.id}</td>
                                        <td>{laboratorio.proveedor}</td>
                                        <td>{laboratorio.quincena}</td>
                                        <td>{laboratorio.porcentajeGrasa}</td>
                                        <td>{laboratorio.porcentajeSolidoTotal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    );
}