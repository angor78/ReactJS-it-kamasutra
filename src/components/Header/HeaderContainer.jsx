import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reduser";
//import myAvatar from "../../assets/images/myAvatar.jpg"

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })

      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
          return axios
            .get(
              `https://social-network.samuraijs.com/api/1.0/profile/` + id,
              
              {
                withCredentials: true,
                headers: {
                  "API-KEY": "8bf7ade0-2e16-4acd-95db-d9b2955d3ec2",
                },
              }
            )
            .then((response) => {
              if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.fullName);
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
