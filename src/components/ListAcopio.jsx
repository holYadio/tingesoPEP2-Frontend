import React, { useState, useEffect} from "react";
import { Row, Col, Table} from "react-bootstrap";
import axios from "axios";

export default function ListAcopio() {
    const [acopios, setAcopios] = useState([]);

    const getAcopios = async () => {
        const response = await axios.get("http://localhost:8080/acopio");
        setAcopios(response.data);
    }

    useEffect(() => {
        getAcopios();
    }, []);
    return (
        <>
        <div className="d-flex justify-content-center">
            <div>
                <br />
                <Row>
                    <h1 className="text-center">Datos de Acopio</h1>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead className="text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Proveedor</th>
                                    <th>Fecha</th>
                                    <th>Turno</th>
                                    <th>Leche (Kg)</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {acopios.map((acopio) => (
                                    <tr key={acopio.id}>
                                        <td>{acopio.idAcopio}</td>
                                        <td>{acopio.proveedor}</td>
                                        <td>{acopio.fecha}</td>
                                        <td>{acopio.turno}</td>
                                        <td>{acopio.klsLeche}</td>
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