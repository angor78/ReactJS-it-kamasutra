import React from "react";
import LoginForm from "./LoginForm";

export class Login extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm getValues={this.props.postAuthLogin} />
      </div>
    );
  }
}
