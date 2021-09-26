import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19509;
    }
    this.props.getUsersProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,

  };
};
const UrlWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUsersProfile })(UrlWithRouter);
