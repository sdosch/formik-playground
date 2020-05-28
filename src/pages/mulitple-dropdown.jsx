import React, { useState } from "react";
import { Form, ButtonGroup, Dropdown, Alert, Row, Col } from "react-bootstrap";

const MultipleDropdown = ({ options, initialValue = [] }) => {
  const [value, setValue] = useState(["Red", "Orange"]);
  const [show, setShow] = useState(false);

  const handleToggle = (isOpen, event, { source }) => {
    if (isOpen || source !== "select") {
      setShow(isOpen);
    }
    if (event) event.persist();
  };

  const handleSelect = (eventKey) => {
    value.includes(options[eventKey])
      ? setValue(value.filter((e) => e !== options[eventKey]))
      : setValue([...value, options[eventKey]]);
  };

  const renderButtonTitle = () => {
    if (value.length < 1) return "Bitte auswählen...";
    if (value.length > 4) return "Mehr als 4 ausgewählt";
    return value.join(", ");
  };

  return (
    <Row>
      <Col>
        <Dropdown
          as={ButtonGroup}
          show={show}
          onToggle={handleToggle}
          onSelect={handleSelect}
          value={value}
        >
          <Dropdown.Toggle variant="outline-dark">
            {renderButtonTitle()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {options.map((option, index) => (
              <Dropdown.Item eventKey={index} key={index}>
                <Form.Check
                  custom
                  label={option}
                  type="checkbox"
                  readOnly
                  checked={value.includes(option)}
                />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col>
        <Alert variant="primary">
          <pre>
            <b>value: </b>
            {JSON.stringify(value, null, 2)}
          </pre>
        </Alert>
      </Col>
    </Row>
  );
};

export default MultipleDropdown;
