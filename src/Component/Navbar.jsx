import { NavLink } from "react-router-dom";
import nike from "../assets/brand_logo.png";


export default function Navbar() {

    const style = (e) => {
        return {
            color: e.isActive ? "red" : "",
        }
    }

    const navStyle = "flex justify-between m-auto items-center p-3 w-[90%]";
    const btnStyle = "bg-[#D01C28] text-[#FFFFFF] px-3 py-1";
  return (
    <nav className={navStyle}>
      <div>
        <NavLink to="/">
          <img src={nike} alt="logo" />
        </NavLink>
      </div>
      <div className="flex gap-4 text-xl">
        <NavLink style={style} to="/menu">Menu</NavLink>
        <NavLink style={style} to="/location">Location</NavLink>
        <NavLink style={style} to="/about">About</NavLink>
        <NavLink style={style} to="/contact">Contact</NavLink>
      </div>
      <div>
        <button className={btnStyle}>Login</button>
      </div>
    </nav>
  );
}
