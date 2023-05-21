import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
    const navItems =  <>
      <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>All Toys</a>
            </li>
           {
            (user)?(
              <li>
              <Link to="/my-toys">My Toys</Link>
            </li>
            ) : (null)
           }
            <li>
              <a>Blogs</a>
            </li>
    </>
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Toy Verse</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
       {
        navItems
       }
        </ul>
      </div>
      <div className="navbar-end">
      {user ? (
              <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar">
  <div className="w-12 rounded">
    {
      user.photoURL ? (<img src={user.photoURL} />) : (<img src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" />)
    }
  </div>
</div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li onClick={handleLogOut}><a>Sign Out</a></li>
              </ul>
            </div>
            ) : (
              <Link to="/login">
                <button className="btn ">Log in</button>
              </Link>
            )}
      </div>
    </div>
  );
};

export default NavBar;
