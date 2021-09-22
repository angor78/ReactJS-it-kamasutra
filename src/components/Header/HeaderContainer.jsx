import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reduser";
import { profileAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    profileAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
        return profileAPI.getMyProfile(id).then((data) => {
          if (data.resultCode === 0) {
            this.props.setAuthUserData(data.profile);
          }
        });
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  fullName: state.auth.fullName,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
