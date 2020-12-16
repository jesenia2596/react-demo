import React, { useState } from "react";
import { Form } from "react-bootstrap";

const useSelect = (initialState, options, label) => {
  const [state, setState] = useState(initialState);
  const select = () => (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        value={state}
        onChange={(e) => setState(e.target.value)}>
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </Form.Control>
    </>
  );
  return [state, select];
};

export default useSelect;
