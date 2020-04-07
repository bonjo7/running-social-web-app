import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addRace } from "../../../Actions/Profile";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import "./createProfile.css";

const AddRace = ({ addRace }) => {
  const [formData, setFormData] = useState({
    racename: "",
    racelocation: "",
    racedate: "",
    racetime: "",
  });

  const { racename, racelocation, racedate, racetime } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addRace(formData);
  };

  return (
    <Accordion>
      <Card className='card shadow lg p-3 mb-5 bg-white rounded'>
        <Accordion.Toggle as={Card.Header} eventKey='0' color='#17a2b8'>
          <i className='fas fa-angle-down' color='#17a2b8'></i>
          Click here to Add Race Details{" "}
          
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <Form.Group controlId='racename'>
              <Form.Label>Running Club</Form.Label>
              <Form.Control
                name='racename'
                placeholder='Event Name'
                as='input'
                value={racename}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='racelocation'>
              <Form.Label>Event Location</Form.Label>
              <Form.Control
                name='racelocation'
                placeholder='eg. Waterford'
                as='input'
                value={racelocation}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='racedate'>
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                name='racedate'
                placeholder='eg. Waterford'
                type='date'
                value={racedate}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='racetime'>
              <Form.Label>Enter your Time</Form.Label>
              <Form.Control
                name='racetime'
                placeholder='0:40:10 or 1:40:12'
                type='time'
                step="1"
                value={racetime}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Accordion.Toggle
              as={Button}
              eventKey='1'
              variant='primary'
              type='submit'
              onClick={(e) => onSubmit(e)}
            >
              Save Race Event
            </Accordion.Toggle>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

AddRace.propTypes = {
  addRace: PropTypes.func.isRequired,
};

export default connect(null, { addRace })(AddRace);
