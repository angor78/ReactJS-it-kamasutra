import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <h4>Add message</h4>
        <AddMessageForm addNewMessage={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
