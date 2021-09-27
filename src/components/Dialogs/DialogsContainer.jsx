import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import {
  sendMessage,
  updateMessageText,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const addStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};


export default compose(
  WithAuthRedirect,
  connect(addStateToProps, {sendMessage,updateMessageText})
)(Dialogs)
