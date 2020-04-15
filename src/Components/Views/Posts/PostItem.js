import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Card, Button } from "react-bootstrap";
import './Post.css';
import Moment from 'react-moment';
import { addLike, removePost } from '../../../Actions/Post';

const PostItem = ({addLike, removePost, auth, post: {_id, text, username, user, positives, comments, date}}) => {
    return (
        <Card>
  <Card.Header className ="hName"><i>{username}</i></Card.Header>
  <Card.Body>
    
      <p>
        {' '}
        {text}{' '}
      </p>
      
      <p>
      <Button variant="light"><i onClick={e => addLike(_id)} className="far fa-thumbs-up">{' '} {positives.length} {' '}Likes </i> </Button>
      
      <Button variant="light"><Link to ={`/post/${_id}`}><i className="far fa-comments">{' '} {comments.length} {' '}Comments  </i> </Link></Button>
      
      {!auth.loading && user === auth.user._id && (<i onClick={e => removePost(_id)} className="far fa-trash-alt"></i> )}
      </p>
      <blockquote className="blockquote mb-0">
      <footer className="blockquote-footer">
      Posted: <cite className="titleName" title="Source Title"><Moment format='DD-MM-YYYY / HH:mm:ss'>{date}</Moment></cite>
      </footer>
      </blockquote>
        
      
  </Card.Body>
</Card>
    )


}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {addLike, removePost}) (PostItem)
