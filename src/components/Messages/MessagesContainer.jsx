import Messages from "./Messages";
import { updateNewMessageTextCreater, sendMessageCreater } from "../../redux/messagesReducer";

const MessagesContainer = (props) => {

    const state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater());
    };

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreater(text));
    };

    return (
        <Messages updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state} />
    );
}

export default MessagesContainer;