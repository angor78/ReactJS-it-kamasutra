import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  //debugger
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD_MESSAGE" });
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = { type: "UP_NEW_MESSAGE_TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <h4>Add message</h4>
        <textarea
          ref={newMessageElement}
          value={props.dialogsPage.newMessageText}
          onChange={onMessageChange}
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};
export default Dialogs;
