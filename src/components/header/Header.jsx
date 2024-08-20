import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-slate-100 h-20">
      <div className="px-3 h-full flex gap-8 items-center container mx-auto">
        <NavLink className="text-2xl flex-1 text-[#98b53e]" to={"/"}>
          My Home
        </NavLink>
        <NavLink to={"/wishlist"}>Wishlist</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </div>
    </header>
  );
};

export default Header;
