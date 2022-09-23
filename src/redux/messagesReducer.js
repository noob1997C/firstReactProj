const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'How are your it-kamasutra?' },
		{ id: 4, message: 'Yo' },
	],
	dialogsData: [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Andrey" },
		{ id: 3, name: "Sveta" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Victor" },
		{ id: 6, name: "Valera" },
	],
	newMessageText: "this is new message",
}

const messagesReducer = (state = initialState, action) => {
	// let stateCopy;
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.messageText
			};
		case SEND_MESSAGE:
			// debugger;
			let messageText = state.newMessageText;
			return {
				...state,
				newMessageText: '',
				messagesData: [...state.messagesData, { id: 6, message: messageText }],
			};
		default:
			return state;
	}
}

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

export default messagesReducer;