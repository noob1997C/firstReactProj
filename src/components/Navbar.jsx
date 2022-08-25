import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='nav pt-6 pl-1 border-r-2'>
            <div><NavLink to={"/profile"}>Profile</NavLink></div>
            <div><NavLink to={"/messages"}>Messages</NavLink></div>
            <div><NavLink to={"/news"}>News</NavLink></div>
            <div><NavLink to={"/music"}>Music</NavLink></div>
            <div><NavLink to={"/settings"}>Settings</NavLink></div>
      </nav>
    );
}

export default Navbar;