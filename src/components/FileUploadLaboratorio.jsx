import React, { useState } from "react";
import { Row, Form} from "react-bootstrap";
import axios from "axios";
export default function FileUploadLaboratorio() {
    const [file, setSelectedFile] = useState(null);
    const [quincena,setSelectedQuincena] = useState("");

    const handleUpload = (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("quincena", quincena);
        axios.post("http://localhost:8080/laboratorio", formData)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                window.alert("Datos de laboratorio agregados con éxito");
                window.location.href = "/list-laboratorio";
            })
    }
    return (
        <>
            <div className="d-flex justify-content-center ">
                <div>
                    <br />
                    <Row>
                        <h1 className="text-center">Subir Datos del Laboratorio</h1>
                    </Row>
                    <br />
                    <Form onSubmit={handleUpload}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Seleccione el archivo</Form.Label>
                            <Form.Control 
                                type="file"
                                required 
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                                />
                        </Form.Group>
                        <Form.Group controlId="formQuincena.ControlInput1" className="mb-3">
                            <Form.Label>Quincena</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Ingrese la quincena AAAA/MM/Q"
                                onChange={(e) => setSelectedQuincena(e.target.value)}                            
                                />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Subir</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
