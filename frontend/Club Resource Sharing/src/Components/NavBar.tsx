
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({getL, setL}: {getL: any, setL: any}) {

 
  const navigate  = useNavigate();

function removeToken(){
  localStorage.removeItem('jwt');
  setL(false);
  navigate('/');

}

  if(getL){
    return (
      <nav className="bg-slate-600 h-16 w-full flex items-center shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">ClubSharing</Link>
          </div>
          <ul className="flex space-x-6 text-white">
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
          </ul>
        </div>
      </nav>
    )
  } else{
  return (
    <nav className="bg-slate-600 h-16 w-full flex items-center shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">ClubSharing</Link>
        </div>
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-green-400 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-400 transition duration-300">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-green-400 transition duration-300">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
}
