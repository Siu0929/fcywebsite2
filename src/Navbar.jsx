import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  function Logout() {
    localStorage.removeItem("Username");
    window.location.reload();
  }

  const [username, setUsername] = useState(localStorage.getItem("Username"));
  const location = useLocation();

  useEffect(() => {
    setUsername(localStorage.getItem("Username"));
  }, [location]);

  return (
    <div>
      <div className="navbar bg-base-100 fill-transparent">
        <div className="flex-1">
          <a
            className="btn btn-ghost bg-black hover:bg-black text-2xl font-light mb-0 rounded-md"
            href="/"
          >
            FCY
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-2">
                <Link
                  className="btn btn-ghost outline-3 mb-0 font-light rounded"
                  to="/"
                >
                  Home
                </Link>
            </li>
            <li>
                <Link
                  className="btn btn-ghost outline-3 mb-0 outline-white font-light rounded"
                  to="/Video"
                >

                  Gallery
                </Link>
            </li>
            <div className="dropdown dropdown-end mb-0">
              <div
                tabIndex={0}
                role="button"
                className="ml-2 btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="/Icon.jpg" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  {username ? (
                    <>
                      <Link className="Link font-light justify-between" to="/Edit">
                        Edit
                      </Link>
                      <Link className="Link font-light justify-between" to="/" onClick={Logout}>
                        Logout
                      </Link>
                    </>
                  ) : (
                    <Link
                      className="Link font-light justify-between"
                      to="/Login"
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li>
                  <Link
                    className="Link font-light justify-between"
                    to="/Profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="Link font-light justify-between"
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div className="h-[0.1px] bg-gray-500 ml-3 mr-3"></div>
    </div>
  );
}

export default Navbar;
