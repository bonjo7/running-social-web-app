import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Card, Row, Col } from "react-bootstrap";
import TextTruncate from 'react-text-truncate';
import imageMale from '../../../Images/userIcon.png';
import imageFemale from '../../../Images/femaleIcon.png';
import './Profile.css';



const UserProfile = ({
  profile: {
    user: { _id, name },
    sex, location, bio, runningclub, distance, fitnessinterest
  },
  
  
}) => {

  function test(){
    if(sex == 'male'){
      console.log('a dude');
      return <img src={imageMale} className="photo" alt="User Image" />
      //return <img src={imageMale} className="photo" alt="User Image" />

    }else if (sex == 'female'){
      console.log('a chick');
      return <img src={imageFemale} className="photo" alt="User Image" />
      //return <img src={imageFemale} className="photo" alt="User Image" />
    }
  }
  
  return (

    
    
<Card>
  <Card.Header as="h5">{name} </Card.Header>
  <Card.Body>
  <Row>
    <Col>
    {test()}
    </Col>
    <Col><Card.Title>Location: {location}</Card.Title>
    <Card.Text>
    <TextTruncate line={5} element='span' truncateText='…' text={bio} textTruncateChild={<Link to={`/profile/${_id}` }>See More...</Link>} />
    </Card.Text></Col>
    <Col><p>Preferred Distance: {distance} </p><p>Club: {runningclub} </p><ul>Fitness Interest: {fitnessinterest.map((interest, index) => (<li key={index}> <i className="fas fa-running"></i> {interest}</li>))}</ul></Col>
  </Row>
    
    <Link to={`/profile/${_id}`}>
          <Button>View Profile</Button>
        </Link>
  </Card.Body>
</Card>    
      
  );
};

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default UserProfile;
