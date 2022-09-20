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
		updateNewMessageText: () => {
			dispatch(sendMessageCreater());
		},
		sendMessage: (text) => {
			dispatch(updateNewMessageTextCreater(text));
		},
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;