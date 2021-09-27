import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";
import setMyProfile from "../../redux/settingProfile-reducer";
import { settingAPI } from "../../api/api";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class SettingsContainer extends React.Component {
  uploadFile = ({ target: { files } }) => {
    console.log(files[0]);
    let data = new FormData();
    data.append("file", files[0]);
    settingAPI.uploadImage(data).then((response) => {
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

export default WithAuthRedirect(
  connect(mapStateToProps, { setMyProfile })(SettingsContainer)
);
