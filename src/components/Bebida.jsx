import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

function Bebida({ bebida }) {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();
  const { strDrink, strDrinkThumb } = bebida;
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Immagen de ${strDrink}`}
        />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
            className="w-100 text-uppercase mt-2"
            variant="warning"
            onClick={() => {
              handleModalClick(), handleBebidaIdClick(bebida.idDrink);
            }}
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Bebida;
