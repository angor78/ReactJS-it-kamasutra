import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthMe } from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthMe();
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

export default connect(mapStateToProps, { getAuthMe })(HeaderContainer);
