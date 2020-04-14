import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../../Actions/Post";
import Loading from "../Loading";
import PostItem from "../Posts/PostItem";
import CreatePost from "../Posts/PostForm";

const Posts = ({ getPosts, post: { loading, posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      <h2>FEED</h2>
      <CreatePost/>
      <div className='posts'>
        {posts.map((p) => (
          <PostItem key={p._id} post={p} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getposts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
