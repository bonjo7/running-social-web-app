import React, {Link} from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col } from "react-bootstrap";
import './FullProfile.css';

const FullProfile = ({ profile: {
    location,
    fitnessinterest,
    bio,
    runningclub,
    clubwebsite,
    distance,
    user:{name},
    blog
}}) => {
    return (

        <Card>
  <Card.Header className="cardH" as="h3">{name} </Card.Header>
  <Card.Body>
  <Row><Col>
    <Card.Subtitle className="subtitle">Bio</Card.Subtitle>
    <Card.Text className="text">
      {bio}
    </Card.Text>
    
        </Col></Row>
       <Card className="card mb-4 border-1">
       <Card.Header as="h5">Info </Card.Header>
           <Card.Body>
    <Row>
    <Col>
    <Card.Subtitle className="subtitle"><i className="fas fa-map-marker-alt"></i>Location</Card.Subtitle>
    <Card.Text className="text">
      {location}
    </Card.Text>
    </Col>
    <Col>
    <Card.Subtitle className="subtitle"><i className="fas fa-running"></i>Preferred Distance</Card.Subtitle>
    
    <Card.Text className="text">
      {distance}
    </Card.Text>
    </Col>
    </Row>
        <Row>
    <Col>
    <p></p>
    <Card.Subtitle className="subtitle"><i class="fas fa-running"></i>Running Club</Card.Subtitle>
    <Card.Text className="text">
        {runningclub}
    </Card.Text></Col>
    <Col>
    <p></p>
    <Card.Subtitle className="subtitle"><i class="fas fa-bookmark"></i>Club URL</Card.Subtitle>
    <Card.Text className="text">
      {clubwebsite}
    </Card.Text>
    </Col>
    </Row>
    <Row>
    <Col>
    <p></p>
    <Card.Subtitle className="subtitle"><i class="fas fa-info"></i>Fitness Interest</Card.Subtitle>
    <Card.Text className="text">
       {fitnessinterest.map((interest, index) => (
           <div key={index}><i class="fas fa-angle-right"></i>{interest}</div>
       ))}
    </Card.Text>
    </Col>
    <Col>
    <p></p>
    <Card.Subtitle className="subtitle"><i class="fas fa-blog"></i>Blog</Card.Subtitle>
    <Card.Text className="text">
       {blog}
    </Card.Text>
    </Col>
    </Row>
    </Card.Body></Card> 

    <Card className="card mb-4 border-1">
       <Card.Header as="h5">Races </Card.Header>
           <Card.Body>
    <Row>
    <Col>
    
    </Col>
    </Row>
    </Card.Body></Card> 
  </Card.Body>
</Card>    

        
//         <Jumbotron className="jumbotron">
//   <h1 className="mainTitle">{name}</h1>
//   <Card>
//   <Card.Body>
//       <Row><Col>
//     <Card.Subtitle className="subtitle">Bio</Card.Subtitle>
//     <Card.Text className="text">
//       {bio}
//     </Card.Text>
//         </Col></Row>
//     <Row>
//     <Col>
//     <Card.Subtitle className="subtitle"><i className="fas fa-map-marker-alt"></i>Location</Card.Subtitle>
//     <Card.Text className="text">
//       {location}
//     </Card.Text>
//     </Col>
//     <Col>
//     <Card.Subtitle className="subtitle"><i className="fas fa-running"></i>Preferred Distance</Card.Subtitle>
    
//     <Card.Text className="text">
//       {distance}
//     </Card.Text>
//     </Col>
//     </Row>
//         <Row>
//     <Col>
//     <p></p>
//     <Card.Subtitle className="subtitle"><i class="fas fa-running"></i>Running Club</Card.Subtitle>
//     <Card.Text className="text">
//       {runningclub}
//     </Card.Text></Col>
//     <Col>
//     <p></p>
//     <Card.Subtitle className="subtitle"><i class="fas fa-bookmark"></i>Club URL</Card.Subtitle>
//     <Card.Text className="text">
//       {clubwebsite}
//     </Card.Text>
//     </Col>
//     </Row>
//     <Row>
//     <Col>
//     <p></p>
//     <Card.Subtitle className="subtitle"><i class="fas fa-info"></i>Fitness Interest</Card.Subtitle>
//     <Card.Text className="text">
//        {fitnessinterest.map((interest, index) => (
//            <div key={index}><i class="fas fa-angle-right"></i>{interest}</div>
//        ))}
//     </Card.Text>
//     </Col>
//     <Col>
//     <p></p>
//     <Card.Subtitle className="subtitle"><i class="fas fa-blog"></i>Blog</Card.Subtitle>
//     <Card.Text className="text">
//        {blog}
//     </Card.Text>
//     </Col>
//     </Row>
    
//   </Card.Body>
// </Card>
// </Jumbotron>
    )
}

FullProfile.propTypes = {
    profile: PropTypes.object.isRequired
}

export default FullProfile
