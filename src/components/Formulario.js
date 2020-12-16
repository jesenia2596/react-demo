import React from "react";
import { Button, Form } from "react-bootstrap";
import useSelect from "../hooks/useSelect";

const Formulario = ({ setCategory }) => {
  const optiones = [
    { value: "tienda", label: "Tienda" },
    { value: "producto", label: "Productos" }
  ];
  const [category, SelectCategory] = useSelect(
    "producto",
    optiones,
    "Seleccionar"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <SelectCategory />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default Formulario;
