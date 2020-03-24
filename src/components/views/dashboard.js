import React, {useEffect, Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentprofile } from '../../actions/profile';
import Loading from './Loading';
import '../../App.css';
import CreatProfile from './profile/CreatProfile'

const Dashboard = ({getCurrentprofile, auth: {user}, profile:{profile, loading}}) => {
    useEffect(() => {
        getCurrentprofile();
    }, []);
    return(
        loading && profile === null ? (<Loading></Loading>) : 
        (<Fragment>
            <h1 className='large text-color'>Dashboard</h1>
            <h4>Welcome {user && user.name}</h4>
            {profile !== null ? (<Fragment>You have profile</Fragment>) : 
            (<Fragment>
                <p>You do not have a profile, why not take some time to create one...</p>
                
                <CreatProfile></CreatProfile>
                </Fragment>)}
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
