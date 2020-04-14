import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loading from '../Loading'
import {getPost} from '../../../Actions/Post'
import PostItem from '../Posts/PostItem'
import CommentForm from '../Posts/CommentForm'
import CommentItem from '../Posts/CommentItem'

const SinglePost = ({getPost, post: {post, loading}, match}) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost, match.params.id]);
    return (
        loading|| post === null ? <Loading></Loading> :
        <Fragment>
        <PostItem post ={post}/>
        <CommentForm postId={post._id}/>
        <Fragment>
        {post.comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id}/>
        ))}
        </Fragment>
        </Fragment>
    )
}

SinglePost.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps,{getPost}) (SinglePost)
