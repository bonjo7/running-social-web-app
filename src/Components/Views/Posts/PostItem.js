import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import './Post.css';
import Moment from 'react-moment';

const PostItem = ({auth, post: {_id, text, name, user, likes, comments, date}}) => {
    return (
        <Card>
  <Card.Header><i>{name}</i></Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        {text}{' '}
      </p>
      <Card.Footer className="text-muted">
      <p><i className="far fa-thumbs-up">{' '} {likes.length} {' '}Likes </i> 
      
      <Link to ={`/post/${_id}`}><i className="far fa-comments">{' '} {comments.length} {' '}Comments  </i> </Link>
      
      {!auth.loading && user === auth.user._id && (<i class="far fa-trash-alt"></i> )}
      </p>
      Posted: <cite className="titleName" title="Source Title"><Moment format='DD-MM-YYYY / HH:mm:ss'>{date}</Moment></cite></Card.Footer>
      </blockquote>
        
      
  </Card.Body>
</Card>
    )


}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {}) (PostItem)
