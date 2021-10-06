import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../../redux/auth-reduser";
import { Login } from "./Login";



let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    messageFromAPI: state.auth.messageFromAPI,
  };
};

export default compose(
  connect(mapStateToProps, {
    login
  }),
)(Login);
