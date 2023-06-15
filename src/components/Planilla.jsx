import React, { useState, useEffect} from "react";
import { Row, Col, Table} from "react-bootstrap";
import axios from "axios";
export default function Planilla() {
    const [planillas, setPlanillas] = useState([]);
    const getPlanillas = async () => {
        const response = await axios.get("http://localhost:8080/planilla");
        setPlanillas(response.data);
    }
    useEffect(() => {
        getPlanillas();
    }, []);
    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <br />
                    <Row>
                        <h1 className="text-center">Planilla de Pagos</h1>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead className="text-center">
                                    <tr>
                                        <th>Quincena</th>
                                        <th>Proveedor</th>
                                        <th>Nombre Proveedor</th>
                                        <th>Total Leche (Kg)</th>
                                        <th>Nro. de envío (días)</th>
                                        <th>Promedio diario</th>
                                        <th>% Variacion Leche</th>
                                        <th>% Grasa</th>
                                        <th>% Variación Grasa</th>
                                        <th>% Sólidos Totales </th>
                                        <th>% Variación Sólidos Totales</th>
                                        <th>Pago Leche</th>
                                        <th>Pago Grasa</th>
                                        <th>Pago Sólidos Totales</th>
                                        <th>Bonificación Frecuencia</th>
                                        <th>Dcto. Variación Leche</th>
                                        <th>Dcto. Variación Grasa</th>
                                        <th>Dcto. Variación Sólidos Totales</th>
                                        <th>Pago Total</th>
                                        <th>Monto Retención</th>
                                        <th>Monto Final</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {planillas.map((planilla) => (
                                        <tr key={planilla.idPlanilla}>
                                            <td>{planilla.quincena}</td>
                                            <td>{planilla.codigoProveedor}</td>
                                            <td>{planilla.nombreProveedor}</td>
                                            <td>{planilla.klsTotalLeche}</td>
                                            <td>{planilla.diasEnvioLeche}</td>
                                            <td>{planilla.promedioKilosLecheDiario}</td>
                                            <td>{planilla.porcentajeFrecuenciaDiariaEnvioLeche}</td>
                                            <td>{planilla.porcentajeGrasa}</td>
                                            <td>{planilla.porcentajeVariacionGrasa}</td>
                                            <td>{planilla.porcentajeSolidoTotal}</td>
                                            <td>{planilla.porcentajeVariacionSolidoTotal}</td>
                                            <td>{planilla.pagoPorLeche}</td>
                                            <td>{planilla.pagoPorGrasa}</td>
                                            <td>{planilla.pagoPorSolidosTotales}</td>
                                            <td>{planilla.bonificacionPorFrecuencia}</td>
                                            <td>{planilla.dctoVariacionLeche}</td>
                                            <td>{planilla.dctoVariacionGrasa}</td>
                                            <td>{planilla.dctoVariacionST}</td>
                                            <td>{planilla.pagoTotal}</td>
                                            <td>{planilla.montoRetencion}</td>
                                            <td>{planilla.montoFinal}</td>
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