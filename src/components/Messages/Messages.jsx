import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {
  let dialogElements = props.messages.dialogsData.map((dialog) => 
    <DialogItem name={dialog.name} id={dialog.id}/>
  );

  let messagesElements = props.messages.messagesData.map((message) => 
    <Message message={message.message}/>
  );

    return (
      <div className='dialogs pt-6 flex justify-between max-w-2xl px-1 text-center'>
        <div className="dialog-items">
          {dialogElements}
        </div>
        <div className="messages max-w-xs">
          {messagesElements}
        </div>
      </div>
    );
}

export default Messages;