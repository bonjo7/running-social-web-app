import React from 'react';
import { Accordion, Card} from 'react-bootstrap';
import '../Main.css';

const CreatProfile = props => {
    return (
        
            <Accordion>
                <Card className="card shadow lg p-3 mb-5 bg-white rounded">
    
                    <Accordion.Toggle as={Card.Header} class="toggleHeader" eventKey="0" color="#17a2b8">
                        Create Profile <i class="fas fa-angle-down" color='#17a2b8' ></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                </Accordion>
     
    )
}

export default CreatProfile;