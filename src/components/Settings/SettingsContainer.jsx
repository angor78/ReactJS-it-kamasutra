import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";
import setMyProfile from "../../redux/settingProfile-reducer";

class SettingsContainer extends React.Component {
  uploadFile = ({ target: { files } }) => {
    console.log(files[0]);
    let data = new FormData();
    data.append("file", files[0]);
    axios
      .put(`https://social-network.samuraijs.com/api/1.0/profile/photo`, data, {
        withCredentials: true,
        headers: {
          "API-KEY": "8bf7ade0-2e16-4acd-95db-d9b2955d3ec2",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return <Settings {...this.props} uploadFile={this.uploadFile} />;
  }
}
const mapStateToProps = (state) => ({
  profile: state.settingPage.profile,
});

export default connect(mapStateToProps, { setMyProfile })(SettingsContainer);
