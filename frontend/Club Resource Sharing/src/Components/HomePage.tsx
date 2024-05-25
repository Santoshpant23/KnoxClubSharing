import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClubCard from './ClubCard';

export default function HomePage() {
  const [allClubs, setAllClubs] = useState([]);

  const token = localStorage.getItem('jwt');


  useEffect(() => {
    handleFetching();
  }, []);

  async function handleFetching() {
    const response = await axios.get('http://localhost:3000/user/getallclubs');

    
    if (response.data.success) {
      setAllClubs(response.data.response);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-green-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to ClubSharing</h1>
          <p className="text-lg mb-8">
            Connect with other clubs, share resources, and maximize your club's potential.
          </p>
          {token ? (
            <div>

            </div>
          ) : (
            <Link to="/login" className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </Link>
          )}
        </div>
      </div>

      {/* All Clubs Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">All Clubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allClubs.length === 0 ? (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">No Clubs Available</h3>
                <p className="text-gray-700 mb-6 mt-6">It looks like there are no clubs available at the moment. Please check back later or consider creating a new club.</p>
                <div className='mt-10 mb-6'>
                <Link to="/login" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300">
                  Create a Club
                </Link>
                </div>
              </div>
            </div>
          ) : (
            allClubs.map((club: any) => (
              <ClubCard key={club._id} clubId={club._id} clubName={club.name} clubDesc={club.description} />
            ))
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      {token ? (
        <div>

        </div>
      ): (
        <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
          <p className="text-lg mb-8">Sign up to start sharing and booking resources with other clubs in your college.</p>
          <Link to="/register" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </div>
      )}
      
    </div>
  );
}
