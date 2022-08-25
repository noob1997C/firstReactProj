import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className="dialog-item"><NavLink to={`/message/${props.id}`}>{props.name}</NavLink></div>
  );
}

const Message = (props) => {
  return (
    <div className="message">{props.message}</div>
  );
}

const Messages = (props) => {
    return (
      <div className='dialogs pt-6 flex justify-between max-w-2xl px-1 text-center'>
        <div className="dialog-items">
          <DialogItem name="Dimych" id="1"/>
          <DialogItem name="Andrey" id="2"/>
          <DialogItem name="Sveta" id="3"/>
          <DialogItem name="Sasha" id="4"/>
          <DialogItem name="Victor" id="5"/>
          <DialogItem name="Valera" id="6"/>
        </div>
        <div className="messages max-w-xs">
          <Message message="Hi"/>
          <Message message="How are you?"/>
          <Message message="How are your it-kamasutra?"/>
          <Message message="Yo"/>
        </div>
      </div>
    );
}

export default Messages;