import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loading from '../Loading'
import {getUserprofile} from '../../../Actions/Profile'

const Profile = props => {
    return (
        <div>
            profile wooho
        </div>
    )
}

Profile.propTypes = {
    getUserprofile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getUserprofile}) (Profile)
