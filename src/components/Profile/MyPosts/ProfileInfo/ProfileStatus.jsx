import React from "react";
import AddStatusForm from "./AddStatusForm";

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = (values) => {
    this.setState({
      editMode: false,
      status: values.status,
    });
    this.props.updateStatus(values.status);
  };

  render() {
    debugger
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span
              onDoubleClick={() => {
                this.activateEditMode();
              }}
            >
              {this.props.status || this.state.status || "Enter status"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <AddStatusForm deactivateEditMode={this.deactivateEditMode} />
          </div>
        )}
      </div>
    );
  }
}
