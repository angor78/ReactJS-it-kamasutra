import { connect } from "react-redux";
import { compose } from "redux";
import { postAuthLogin } from "../../redux/auth-reduser";
import { Login } from "./Login";



let mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    rememberMe: state.auth.rememberMe,
    captcha: state.auth.captcha,
  };
};

export default compose(
  connect(mapStateToProps, {
postAuthLogin
  }),
)(Login);
