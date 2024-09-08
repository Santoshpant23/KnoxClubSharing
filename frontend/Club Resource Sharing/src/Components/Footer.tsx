
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between items-start ml-5 p-5">
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">ClubSharing</h2>
            <p className="text-gray-400">Connecting clubs for a better community.</p>
            <p className="text-gray-400 mt-2">Email: <a href="mailto:spant@knox.edu"><b>spant@knox.edu</b></a></p>
            <p className="text-gray-400">Phone: (309) 297-6270</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/" className="hover:text-green-400 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-green-400 transition duration-300">About Us</Link>
            <Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link>
            <Link to="/login" className="hover:text-green-400 transition duration-300">Login</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" className="hover:text-green-400 transition duration-300">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24H22.2c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zm-6.15 9.09h-1.71v6.71h-2.72V9.09H9.83V7.16h1.82V5.79c0-1.72 1.02-2.67 2.59-2.67.74 0 1.38.05 1.57.08v1.82h-1.07c-.84 0-1 .4-1 1v1.3h2.05l-.27 1.93z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-green-400 transition duration-300">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.65-2.83.77a4.94 4.94 0 002.16-2.73c-.95.56-2 .97-3.12 1.2A4.92 4.92 0 0016.68 3c-2.73 0-4.94 2.21-4.94 4.93 0 .39.04.76.12 1.12C7.72 8.9 4.1 6.66 1.67 3.15c-.42.72-.66 1.56-.66 2.46 0 1.7.87 3.19 2.19 4.07-.8-.03-1.56-.25-2.22-.62v.06c0 2.37 1.69 4.34 3.93 4.78-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.08.62 1.95 2.42 3.37 4.55 3.41a9.87 9.87 0 01-6.1 2.1c-.39 0-.77-.02-1.15-.07a13.93 13.93 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A9.99 9.99 0 0024 4.56z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-green-400 transition duration-300">
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.19 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.93.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.68 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.4.2 2.43.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.58 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0022 12.04c0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} ClubSharing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
