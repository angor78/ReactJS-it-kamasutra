import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateMessageText(text);
  };

  if(!props.isAuth)return <Redirect to={'/login'}/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <h4>Add message</h4>
        <textarea
          ref={newMessageElement}
          value={props.newMessageText}
          onChange={onMessageChange}
          placeholder="Enter your message"
        />
        <button onClick={onSendMessage}>Send message</button>
      </div>
    </div>
  );
};
export default Dialogs;
