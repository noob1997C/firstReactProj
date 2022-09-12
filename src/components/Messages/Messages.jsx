import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { updateNewMessageTextCreater, sendMessageCreater } from "../../redux/messagesReducer";

const Messages = (props) => {

  const state = props.messagesPage;

  let dialogElements = state.dialogsData.map((dialog) => 
    <DialogItem name={dialog.name} id={dialog.id}/>
  );

  let messagesElements = state.messagesData.map((message) => 
    <Message message={message.message}/>
  );

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    const newMessageText = event.target.value;
    props.updateNewMessageText(newMessageText);
  };

    return (
      <div className='dialogs pt-6 flex justify-between max-w-2xl px-1 text-center'>
        <div className="dialog-items">
          {dialogElements}
        </div>
        <div className="messages max-w-xs">
          <div>{messagesElements}</div>
          <div>
            <div><textarea value={state.newMessageText}
                           className="border-2"
                           onChange={onNewMessageChange}></textarea>
            </div>
            <div><button onClick={onSendMessageClick} className="btn btn-blue mb-12 mr-2">Send</button></div>
          </div>
        </div>
      </div>
    );
}

export default Messages;