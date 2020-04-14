import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addPost} from '../../../Actions/Post'
import { Accordion, Card, Form, Button } from "react-bootstrap";


const PostForm = ({addPost}) => {
    const [formData, setForm] = useState({
        text: ""
      });

      const {
        text
      } = formData;

      const onChange = e =>
      setForm({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = e => {
      e.preventDefault();
      addPost(formData);
      console.log(formData);
      setForm("");
    };
  
    return (
        <Accordion>
      <Card className='card shadow lg p-3 mb-5 bg-white rounded'>
        <Accordion.Toggle
          as={Card.Header}
          className='toggleHeader'
          eventKey='0'
          color='#17a2b8'
        >
          <i className='fas fa-angle-down' color='#17a2b8'></i>
          Create Post{" "}
          
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            
            <Form.Group controlId='text'>
              <Form.Label>Create a Post</Form.Label>
              <Form.Control
                name='text'
                placeholder='Enter you post message that you want other members to read, like and comment on.....'
                as='textarea'
                rows='5'
                value={text}
                onChange={e => onChange(e)}
              />
            </Form.Group>

            <Accordion.Toggle
              as={Button}
              eventKey='1'
              variant='primary'
              type='submit'
              onClick={e => onSubmit(e)}
            >
              Submit Post
            </Accordion.Toggle>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,

}

export default connect(null, {addPost}) (PostForm)
