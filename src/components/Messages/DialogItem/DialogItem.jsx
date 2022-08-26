import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    return (
      <div className="dialog-item"><NavLink to={`/message/${props.id}`}>{props.name}</NavLink></div>
    );
  }

  export default DialogItem;