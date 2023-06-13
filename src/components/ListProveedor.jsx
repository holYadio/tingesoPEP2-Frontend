import React, { useEffect, useState } from "react";
import { Row, Col, Table} from "react-bootstrap";
import axios from "axios";

export default function ListProveedor() {
    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {
        const response = await axios.get("http://localhost:8080/proveedor");
        console.log(response);
        setProveedores(response.data);
    }

    useEffect(() => {
        getProveedores();
    }, []);

    return (
        <>
        <div className="d-flex justify-content-center ">
            <div>
                <br />
                <Row>
                    <h1>Lista de Proveedores</h1>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Retención</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proveedores.map((proveedor) => (
                                    <tr key={proveedor.id}>
                                        <td>{proveedor.codigo}</td>
                                        <td>{proveedor.nombre}</td>
                                        <td>{proveedor.categoria}</td>
                                        <td>{proveedor.retencion}</td>
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