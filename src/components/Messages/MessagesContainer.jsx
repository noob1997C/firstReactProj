import Messages from "./Messages";
import { updateNewMessageTextCreater, sendMessageCreater } from "../../redux/messagesReducer";
import StoreContext from "../../StoreContext";

const MessagesContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {

					const state = store.getState().messagesPage;

					let onSendMessageClick = () => {
						store.dispatch(sendMessageCreater());
					};

					let onNewMessageChange = (text) => {
						store.dispatch(updateNewMessageTextCreater(text));
					};
					return <Messages updateNewMessageText={onNewMessageChange}
						sendMessage={onSendMessageClick}
						messagesPage={state} />
				}
			}
		</StoreContext.Consumer>
	);
}

export default MessagesContainer;