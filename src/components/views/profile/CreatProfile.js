import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Accordion, Card, Form, Col, Row} from 'react-bootstrap';
import '../Main.css';
import './createProfile.css'

const CreatProfile = props => {
    const [formData, setFormData] = useState({
       user: '',
       runningclub: '',
       clubwebsite: '',
       location: '',
       distance: '',
       fitnessinterest: '',
       bio: '',
       blog: '',
       twitterusername: '',
       instausername: ''
    });

    const {
       user,
       runningclub,
       clubwebsite,
       location,
       distance,
       fitnessinterest,
       bio,
       blog,
       twitterusername,
       instausername
    } = formData;

    return (
        
            <Accordion>
                <Card className="card shadow lg p-3 mb-5 bg-white rounded">
    
                <Accordion.Toggle as={Card.Header} class="toggleHeader" eventKey="0" color="#17a2b8">
                    Create Profile <i class="fas fa-angle-down" color='#17a2b8' ></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>

              <Form.Group controlId="runningclub">
                <Form.Label>Running Club</Form.Label>
                <Form.Control name="runningclub" placeholder="Running Club Name" as="input"  />
              </Form.Group>

              <Form.Group controlId="clubwebsite">
                <Form.Label>Club Website</Form.Label>
                <Form.Control name="clubwebsite" placeholder="www.yourclubwebsite.com" as="input"  />
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control name="location" placeholder="eg. Waterford" as="input"  />
              </Form.Group>

                    <Form.Group controlId="distance">
                <Form.Label>Select Your Preferred Running Distance</Form.Label>
                <Form.Control name="distance" as="select"   >
                  <option>Choose...</option>
                  <option value="5k">5k</option>
                    <option value="10k">10k</option>
                    <option value="16k">16k</option>
                    <option value="Half Marathon">Half Marathon</option>
                    <option value="Full Marathon">Full Marathon</option>
                    <option value="Ultra Marathon">Ultra Marathon</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="fitnessinterest">
                <Form.Label>Enter your fitness interests</Form.Label>
                <Form.Control name="fitnessinterests" placeholder="running walking tri....." as="textarea" rows="3"  />
              </Form.Group>

              <Form.Group controlId="bio">
                <Form.Label>Tell people a little about yourself</Form.Label>
                <Form.Control name="bio" placeholder="Enter your boi" as="textarea" rows="5"  />
              </Form.Group>

              <Form.Group controlId="blog">
                <Form.Label>Have a blog? Share your url</Form.Label>
                <Form.Control name="blog" placeholder="www.myblog.com" as="input"  />
              </Form.Group>

              <Form.Row>
                <Form.Label column="lg" lg={2}>
                Get even more social!
                </Form.Label>
              </Form.Row>

              <Form.Group as={Row} controlId="twitterusername">
                <Form.Label column sm="1"><i class="fab fa-twitter fa-2x" color='#17a2b8' ></i></Form.Label>
                <Col sm="11">
                <Form.Control name="twitterusername" placeholder="Twitter URL" as="input"  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="instausername">
                <Form.Label column sm="1"><i class="fab fa-instagram fa-2x" color='#17a2b8' ></i></Form.Label>
                <Col sm="11">
                <Form.Control name="instarusername" placeholder="Instagram URLe" as="input"  />
                </Col>
              </Form.Group>

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                </Accordion>
     
    )
}

// CreateProfile.PropTypes = {

// }

export default CreatProfile;