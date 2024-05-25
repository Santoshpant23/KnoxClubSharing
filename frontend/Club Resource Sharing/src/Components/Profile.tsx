import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadItems from "./LoadItems";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleDataFetching();
  }, []);

  async function handleDataFetching() {
    try {
    
      
      const token = localStorage.getItem('jwt');
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get('http://localhost:3000/user/profile', {
        headers: {
          'token': `${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        setUser(response.data.clubDetails);
        setItems(response.data.clubDetails.items);
      } else {
        alert(response.data.message);
        return;
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  }

  const handleAddNewItem = () => {
    navigate('/add-item');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {user && (
        <div className="bg-white p-10 rounded-lg shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-4">Profile</h2>
          <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> {user.name}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
          <button onClick={handleAddNewItem} className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300">
            Add New Item
          </button>
        </div>
      )}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Your Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No Items Listed</div>
          ) : (
            items.map((item: any) => (
              <LoadItems key={item} item={item} setItems={setItems} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
