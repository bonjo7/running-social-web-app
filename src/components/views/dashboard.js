import React, {useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentprofile } from '../../actions/profile';
import Loading from './Loading';

const Dashboard = ({getCurrentprofile, auth: {user}, profile:{profile, loading}}) => {
    useEffect(() => {
        getCurrentprofile();
    }, []);
    return(
        loading && profile === null ? (<Loading></Loading>) : 
        (<Fragment>
            <h1>Dashboard</h1>
            <h4>Welcome {user && user.name}</h4>
            {profile !== null ? <Fragment>You have profile</Fragment> : <Fragment>You do not have a profile</Fragment>}
        </Fragment>)
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentprofile})(Dashboard);
