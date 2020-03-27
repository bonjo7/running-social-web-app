import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getCurrentprofile } from "../../actions/profile";
import Loading from "./Loading";
import "../../App.css";
import CreateProfile from "./profile/CreateProfile";
import EditProfile from "./profile/EditProfile";

const Dashboard = ({
  getCurrentprofile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentprofile();
  }, []);
  return loading && profile === null ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <h1 className='large text-color'>User Account</h1>
      <p class='settingelcome'>Welcome {user && user.name}</p>
      {profile !== null ? (
        <Fragment>
          <EditProfile></EditProfile>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            You do not have a profile, why not take some time to create one...
          </p>

          <CreateProfile></CreateProfile>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentprofile })(Dashboard);
