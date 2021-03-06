import React, { useEffect, useState } from "react";
// import AddStatusForm from "./AddStatusForm";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    debugger
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status ? props.status : 'Enter status'}
          </span>
        </div>
      )}

      {editMode && (
        <input
          autoFocus={true}
          value={status}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
        />
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
