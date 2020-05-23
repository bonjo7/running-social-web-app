import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Accordion, Card, Form, Col, Row, Button } from "react-bootstrap";
import "../Main.css";
import "./createProfile.css";
import { createProfile } from "../../../Actions/Profile";

const CreateProfile = ({ createProfile }) => {
  const [formData, setForm] = useState({
    user: "",
    sex: "",
    runningclub: "",
    clubwebsite: "",
    location: "",
    distance: "",
    fitnessinterest: "",
    bio: "",
    blog: "",
    twitterusername: "",
    instausername: "",
  });

  const {
    sex,
    runningclub,
    clubwebsite,
    location,
    distance,
    fitnessinterest,
    bio,
    blog,
    twitterusername,
    instausername,
  } = formData;

  const onChange = (e) =>
    setForm({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);
  };
  return (
    <Accordion>
      <Card className='card shadow'>
        <Accordion.Toggle
          as={Card.Header}
          className='toggleHeader'
          eventKey='0'
          color='#17a2b8'
        >
          <i className='fas fa-angle-down' color='#fff'></i>
          Click here to Create Profile{" "}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
          <Form.Group controlId='sex'>
              <Form.Label>Sex</Form.Label>
              <Form.Control
                name='sex'
                as='select'
                value={sex}
                onChange={(e) => onChange(e)}
                required
              >
                <option>Please Choose...</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='runningclub'>
              <Form.Label>Running Club</Form.Label>
              <Form.Control
                name='runningclub'
                placeholder='Running Club Name'
                as='input'
                value={runningclub}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='clubwebsite'>
              <Form.Label>Club Website</Form.Label>
              <Form.Control
                name='clubwebsite'
                placeholder='www.yourclubwebsite.com'
                as='input'
                value={clubwebsite}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='location'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                name='location'
                placeholder='eg. Waterford'
                as='input'
                value={location}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='distance'>
              <Form.Label>Select Your Preferred Running Distance</Form.Label>
              <Form.Control
                name='distance'
                as='select'
                value={distance}
                onChange={(e) => onChange(e)}
                required
              >
                <option>Choose...</option>
                <option value='5k'>5k</option>
                <option value='10k'>10k</option>
                <option value='16k'>16k</option>
                <option value='Half Marathon'>Half Marathon</option>
                <option value='Full Marathon'>Full Marathon</option>
                <option value='Ultra Marathon'>Ultra Marathon</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='fitnessinterest'>
              <Form.Label>
                Enter your fitness interests (Spereate interests with a comma ,)
              </Form.Label>
              <Form.Control
                name='fitnessinterest'
                placeholder='running walking tri.....'
                as='textarea'
                rows='3'
                value={fitnessinterest}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>

            <Form.Group controlId='bio'>
              <Form.Label>Tell people a little about yourself</Form.Label>
              <Form.Control
                name='bio'
                placeholder='Enter your boi'
                as='textarea'
                rows='5'
                value={bio}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='blog'>
              <Form.Label>Have a blog? Share your url</Form.Label>
              <Form.Control
                name='blog'
                placeholder='www.myblog.com'
                as='input'
                value={blog}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <hr></hr>
            <Form.Row>
              <Form.Label column='lg' lg={2}>
                Get even more social!
              </Form.Label>
            </Form.Row>

            <Form.Group as={Row} controlId='twitterusername'>
              <Form.Label column sm='1'>
                <i className='fab fa-twitter fa-2x' color='#17a2b8'></i>
              </Form.Label>
              <Col sm='11'>
                <Form.Control
                  name='twitterusername'
                  placeholder='Twitter URL'
                  as='input'
                  value={twitterusername}
                  onChange={(e) => onChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='instausername'>
              <Form.Label column sm='1'>
                <i className='fab fa-instagram fa-2x' color='#17a2b8'></i>
              </Form.Label>
              <Col sm='11'>
                <Form.Control
                  name='instausername'
                  placeholder='Instagram URL'
                  as='input'
                  value={instausername}
                  onChange={(e) => onChange(e)}
                />
              </Col>
            </Form.Group>

            <Accordion.Toggle
              as={Button}
              eventKey='1'
              variant='primary'
              type='submit'
              onClick={(e) => onSubmit(e)}
            >
              Save Profile
            </Accordion.Toggle>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(CreateProfile);
