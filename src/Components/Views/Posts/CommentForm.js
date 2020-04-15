import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addComment} from '../../../Actions/Post'
import { Accordion, Card, Form, Button } from "react-bootstrap";


const CommentForm = ({addComment, postId}) => {
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
      addComment(postId, formData);
      console.log(formData);
      setForm("");
    };
  
    return (
        <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className='toggleHeader'
          eventKey='0'
          color='#17a2b8'
        >
          <i className='fas fa-angle-down' color='#17a2b8'></i>
          Add Comment{" "}
          
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            
            <Form.Group controlId='text'>
              <Form.Label>Add a comment</Form.Label>
              <Form.Control
                name='text'
                placeholder='Add a comment to the above post.....'
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
              Add Comment
            </Accordion.Toggle>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,

}

export default connect(null, {addComment}) (CommentForm)
