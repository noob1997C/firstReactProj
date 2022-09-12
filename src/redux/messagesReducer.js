const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const updateNewMessageTextCreater = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: text,
  }
}

export const sendMessageCreater = () => {
  return {
    type: SEND_MESSAGE,
  }
}

const messagesReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.messageText;
			return state;
		case SEND_MESSAGE:
			// debugger;
			const messageText = state.newMessageText;
			state.newMessageText = '';
			state.messagesData.push({ id: 6, message: messageText });
			return state;
		default:
			return state;
	}
}

export default messagesReducer;