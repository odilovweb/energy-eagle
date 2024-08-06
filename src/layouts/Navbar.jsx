import React from "react";
import Logo from "../../images/energy-eagle-high-resolution-logo-black.png";
function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Bosh sahifa</a>
              </li>
              <li>
                <a>Buyurtma berish</a>
              </li>
              <li>
                <a>Taklif va Shikoyatlar</a>
              </li>
              <li>
                <a>Ijtimoiy Tarmoqlar</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className=" max-w-32">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost bg-success">
            <a href="https://t.me/oci_gramm">Buyurtma berish</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
