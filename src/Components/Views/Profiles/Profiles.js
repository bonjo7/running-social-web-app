import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../Loading";
import { getAllProfiles } from "../../../Actions/Profile";
import UserProfile from "./UserProfile"

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Fragment>
          <h2 className='h2'>Members</h2>

          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <UserProfile key={profile._id} profile={profile} />
              ))
            ) : (
              <h2 className='h2'>Oh snap looks like your on your own</h2>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);
