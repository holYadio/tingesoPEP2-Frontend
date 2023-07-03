import React, { useState } from "react";
import { Row, Form} from "react-bootstrap";
import axios from "axios";
export default function FileUploadAcopio() {
    const [file, setSelectedFile] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        axios.post("http://localhost:8080/acopio", formData)
            .then((response) => {
                window.alert("Datos de acopio agregados con éxito");
                window.location.href = "/list-acopio";
            })
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <br />
                    <Row>
                        <h1 className="text-center">Subir Datos del Acopio</h1>
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
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Subir</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
