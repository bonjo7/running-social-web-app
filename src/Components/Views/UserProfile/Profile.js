// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import Loading from '../Loading'
 
// const Profile = props => {
//     return (
//         <div>
//             hello
//         </div>
//     )
// }
 
// Profile.propTypes = {
 
// }
 
// export default Profile

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../Loading";
import { getUserprofile } from "../../../Actions/Profile";
import FullProfile from "./FullProfile";
 
const Profile = ({
  getUserprofile,
  profile: { profile, loading },
  match,
}) => {
  const nullProfile = !profile;
  useEffect(() => {
    getUserprofile(match.params.id);
  }, [getUserprofile, match.params.id, nullProfile ]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Loading></Loading>
      ) : (
        <Fragment>
          <FullProfile profile={profile}></FullProfile>
          
        </Fragment>
      )}
    </Fragment>
  )
  
  ;
};
 
Profile.propTypes = {
  getUserprofile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
 
const mapStateToProps = (state) => ({
  profile: state.profile,
});
 
export default connect(mapStateToProps, { getUserprofile })(Profile);
