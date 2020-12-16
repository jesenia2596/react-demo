import React from "react";
import { Card } from "react-bootstrap";

const precio = (tienda) => {
  if( tienda.precio ) {
    return <div> {tienda.precio} </div>
  }
}

const TiendaItem = ({ tienda }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={tienda.imagen} style={{ height:'200px'}} />
      <Card.Body>
        <Card.Title>{tienda.nombre}</Card.Title>    
        { precio(tienda) }            
      </Card.Body>
    </Card>
  );
};

export default TiendaItem;
