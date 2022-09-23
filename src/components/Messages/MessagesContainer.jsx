import Messages from "./Messages";
import { updateNewMessageTextCreater, sendMessageCreater } from "../../redux/messagesReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextCreater(text));
		},
		sendMessage: () => {
			dispatch(sendMessageCreater());
		},
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;