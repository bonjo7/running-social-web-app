import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentprofile } from '../../actions/profile';

const Dashboard = ({getCurrentprofile, auth, profile}) => {
    useEffect(() => {
        getCurrentprofile();
    }, []);
    return(
        <div>
        Dashboard</div>
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
