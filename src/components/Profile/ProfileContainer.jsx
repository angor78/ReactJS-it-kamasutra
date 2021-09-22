import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19509;
    }

    profileAPI.getProfile(userId).then((data) => {
      this.props.setUsersProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
const UrlWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUsersProfile })(UrlWithRouter);
