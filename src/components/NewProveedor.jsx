import React, { useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";

export default function NewProveedor() {
    const [proveedor, setProveedor] = useState({
        codigo: "",
        nombre: "",
        categoria: "",
        retencion: "",
    });

    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        setProveedor({
            ...proveedor,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar si algún campo está vacío
        if (Object.values(proveedor).some((value) => value === '')) {
            setShowError(true);
            return;
        }

        setProveedor({
            ...proveedor,
            [e.target.name]: e.target.value,
        });

        axios.post("http://localhost:8080/proveedor", proveedor)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                window.alert("Proveedor agregado con éxito");
                window.location.href = "/";
            })
    }

    return (
        <>
            <div className="d-flex justify-content-center ">
                <div>
                    <br />
                    <h1 className="text-center">Agregar Nuevo proveedor</h1>
                    <form className="col-md-12" onSubmit={handleSubmit}>
                        <br />
                        <Row>
                            <label>Código: </label>
                            <input
                                type="text"
                                name="codigo"
                                className={`form-control ${showError && proveedor.categoria === "" ? 'border border-danger' : ''}`}
                                placeholder="Ingrese el código"
                                onChange={handleChange}
                            />
                        </Row>
                        <br />
                        <Row>
                            <label>Nombre: </label>
                            <input
                                type="text"
                                name="nombre"
                                className={`form-control ${showError && proveedor.categoria === "" ? 'border border-danger' : ''}`}
                                placeholder="Ingrese el nombre"
                                onChange={handleChange}
                            />
                        </Row>
                        <br />
                        <Row>
                            <label>Categoría: </label>
                            <input
                                type="text"
                                name="categoria"
                                className={`form-control ${showError && proveedor.categoria === "" ? 'border border-danger' : ''}`}
                                placeholder="Ingrese la categoría"
                                onChange={handleChange}
                            />
                        </Row>
                        <br />
                        <Row>
                            <label>Afecto a retención:</label>
                            <select
                                name="retencion"
                                className={`form-control ${showError && proveedor.categoria === "" ? 'border border-danger' : ''}`}
                                value={proveedor.retencion}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="No">No</option>
                                <option value="Si">Sí</option>
                            </select>
                        </Row>
                        <br />
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Crear</button>
                        </div>
                    </form>
                    <br />
                    {showError && (
                        <div className="d-flex justify-content-center">
                            <div className="alert alert-danger" role="alert">
                            Por favor, complete todos los campos en rojo.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}