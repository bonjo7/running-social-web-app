import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentprofile, deleteAccount } from "../../Actions/Profile";
import Loading from "./Loading";
import "../../App.css";
import CreateProfile from "./Profile/CreateProfile";
import EditProfile from "./Profile/EditProfile";
import Addrace from "./Profile/AddRace";
import RaceTable from "./Profile/Races";
import { Button } from "react-bootstrap";



const Dashboard = ({
  getCurrentprofile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentprofile(getCurrentprofile);
  }, []);

  return loading && profile === null ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <h1 className='large text-color'>User Account</h1>
      <p className='settingelcome'>Welcome {user && user.name}</p>
      <Fragment>
        <Button onClick={() => deleteAccount()} variant='danger'>
          Delete Account
        </Button>
      </Fragment>
      <p></p>
      {profile !== null ? (
        <Fragment>
          <EditProfile></EditProfile>
          <Addrace></Addrace>
          <RaceTable race={profile.races}/>
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
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  getCurrentProfile: PropTypes.func.isRequired,
  auth: state.auth,
  profile: state.profile,
  deleteAccount: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getCurrentprofile, deleteAccount })(
  Dashboard
);
