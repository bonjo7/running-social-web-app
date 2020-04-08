import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Card, Row, Col } from "react-bootstrap";

const UserProfile = ({
  profile: {
    user: { _id, name },
    location, bio, runningclub, distance, fitnessinterest
  },
}) => {
  return (
    
<Card>
  <Card.Header as="h5">{name}</Card.Header>
  <Card.Body>
  <Row>
    <Col><Card.Title>Location: {location}</Card.Title>
    <Card.Text>
      Bio: {bio}
    </Card.Text></Col>
    <Col><p>Preferred Distance: {distance} </p><p>Club: {runningclub} </p><ul>Fitness Interest: {fitnessinterest.map((interest, index) => (<li key={index}> <i className="fas fa-running"></i> {interest}</li>))}</ul></Col>
  </Row>
    
    <Link to={`/profile/${_id}`}>
          <Button>View Profile</Button>{" "}
        </Link>
  </Card.Body>
</Card>



        
        
      
  );
};

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default UserProfile;
