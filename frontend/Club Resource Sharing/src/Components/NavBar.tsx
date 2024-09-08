import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar({ getL, setL }: { getL: any, setL: any }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function removeToken() {
    localStorage.removeItem('jwt');
    setL(false);
    navigate('/');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-slate-600 h-16 w-full flex items-center shadow-lg relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">ClubSharing</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`hidden md:flex space-x-6 text-white`}>
          {getL ? (
            <>
              <li className="hover:text-green-400 transition duration-300">
                <Link to='/profile'>Profile</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300">
                <Link to='/pending-requests'>Pending Requests</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300">
                <Link to='/my-bookings'>My Bookings</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300">
                <button onClick={removeToken}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-green-400 transition duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300">
                <Link to="/login">Login</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute top-full left-0 w-full bg-slate-600 text-white flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {getL ? (
            <div className="m-2 ">
              <li className="hover:text-green-400 transition duration-300 p-2 m-2 border rounded-xl border-red-600 text-center">
                <Link to='/profile' onClick={toggleMenu}>Profile</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300  p-2 m-2 border rounded-xl border-red-600 text-center">
                <Link to='/pending-requests' onClick={toggleMenu}>Pending Requests</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300 p-2 m-2 border rounded-xl border-red-600 text-center">
                <Link to='/my-bookings' onClick={toggleMenu}>My Bookings</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300 p-2 m-2 border rounded-xl border-red-600 text-center">
                <button onClick={() => { removeToken(); toggleMenu(); }}>Logout</button>
              </li>
            </div>
          ) : (
            <>
              <li className="hover:text-green-400 transition duration-300">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300">
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="hover:text-green-400 transition duration-300">
                <Link to="/register" onClick={toggleMenu}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
