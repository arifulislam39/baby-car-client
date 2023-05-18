import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-slate-800 h-36 text-white">
      <div className="navbar-start">
        <div className="dropdown text-black">
          <label
            tabIndex={5}
            className="btn btn-ghost lg:hidden text-yellow-500"
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={5}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">All Toys</Link>
            </li>
            <li>
              <Link to="/bookings">My Toys</Link>
            </li>
            <li>
              <Link to="services"> Add A Toy</Link>
            </li>

            <li>
              <button onClick={handleLogout}>LogOut</button>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl mb-12">
          <img className="w-48 h-28 " src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">All Toys</Link>
          </li>
          <li>
            <Link to="/bookings">My Toys</Link>
          </li>
          <li>
            <Link to="services"> Add A Toy</Link>
          </li>

          <li>
            <button onClick={handleLogout}>LogOut</button>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="blog">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-10">
        {user && (
          <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <img className="w-16 rounded-full" src={user.photoURL} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
