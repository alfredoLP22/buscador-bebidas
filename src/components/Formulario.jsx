import { Button, Form, Row, Col } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";

function Formulario() {
  const { categrorias } = useCategorias();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre bebida</Form.Label>
            <Form.Control
              type="text"
              id="nombre"
              placeholder="Ej: tequila"
              name="nombre"
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
            <Button variant="danger" className="text-text-uppercase w-100">Buscar bebidas</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Formulario;
