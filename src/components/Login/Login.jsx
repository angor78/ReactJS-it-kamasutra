import React from "react";
import { Redirect } from "react-router";
import LoginForm from "./LoginForm";

export class Login extends React.Component {
  render() {
    if (this.props.isAuth) {
      return <Redirect to={"/profile"} />;
    }
    return (
      <div>
        <h1>Login</h1>
        <LoginForm login={this.props.login} messageFromAPI={this.props.messageFromAPI}/>
      </div>
    );
  }
}
