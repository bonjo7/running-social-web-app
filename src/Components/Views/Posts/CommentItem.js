import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Post.css";

const CommentItem = ({
  comment: { text, username, user },
  auth,
}) => {
  return (
    <Card>
      <Card.Body>
        <p> {text} </p>

        <p></p>
        <blockquote className='blockquote mb-0'>
          <footer className='blockquote-footer'>
            Comment By:{" "}
            <cite className='titleName' title='Source Title'>
              <Link to={`/profile/${user}`}>
                <i>{username}</i>
              </Link>
            </cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(CommentItem);
