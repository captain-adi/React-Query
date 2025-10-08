import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md">
      <NavLink to="/" className="text-lg font-bold hover:opacity-90">
        MyApp
      </NavLink>

      <nav className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium transition-all duration-150 ${
              isActive ? "bg-white/20" : "hover:bg-white/10"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/trad"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium transition-all duration-150 ${
              isActive ? "bg-white/20" : "hover:bg-white/10"
            }`
          }
        >
          FetchOld
        </NavLink>

        <NavLink
          to="/rq"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium transition-all duration-150 ${
              isActive ? "bg-white/20" : "hover:bg-white/10"
            }`
          }
        >
          FetchRQ
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
