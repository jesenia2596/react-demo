import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TiendaItem from "./TiendaItem";

const Tiendas = ({ tiendas }) => {
  return (
    <>
    <Container>
      <Row> 
        {tiendas.map((tienda, index) => (
          <Col key={index} className="my-2">
            <TiendaItem tienda={tienda} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Tiendas;
