import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";

function Formulario() {
  const { consultarBebida } = useBebidas();
  const [busqueda, setBusqueda] = useState({ nombre: "", categoria: "" });
  const { categrorias } = useCategorias();
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");
    consultarBebida(busqueda);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {alerta && (
        <Alert variant="danger" className="text-center">
          {alerta}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre bebida</Form.Label>
            <Form.Control
              type="text"
              id="nombre"
              placeholder="Ej: tequila"
              name="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria bebida</Form.Label>
            <Form.Select
              type="text"
              id="categoria"
              placeholder="Ej: tequila"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option value="">- Selecciona categoria -</option>
              {categrorias.map((categoria) => (
                <option
                  value={categoria.strCategory}
                  key={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-text-uppercase w-100"
            type="submit"
          >
            Buscar bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Formulario;
