import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import Header from "./components/Header";
import Tiendas from './components/Tiendas';

const App = () => {   
  const [type, setType] = useState("");
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    const searchArticles = async () => {    
      console.log( type ) 
      const response = await fetch(`https://saee1994-store-api.herokuapp.com/api/${type ? type: 'tienda'}`, {
        method: 'get',
        headers: new Headers({
          'token': 12345
        })
      });
      const data = await response.json();
      setTiendas(data.body);
    };
    searchArticles();
  }, [type]);



  return (
    <>
      <Header />
      <Container>
        <Row className="mt-3 ml-1">
          <Col xs={6} md={4}>
            <Button variant="primary" type="submit" onClick={ () => setType('tienda')}>
              Tiendas
            </Button>
            <Button variant="primary" type="submit" className="ml-2" onClick={ () => setType('producto')}>
              Productos
            </Button>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
        <Row>
          <Col>
            <Tiendas tiendas={tiendas} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
