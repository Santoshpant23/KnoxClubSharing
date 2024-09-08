import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function ClubDetail() {
  
  const location = useLocation();
  const { clubId } = location.state || {};
  const [club, setClub] = useState<any>({
    name: "Default Name",
    description: "Default Club Desc",
    email: "",
    personWhoCreated: "",
    positionOfPersonWhoCreated: "",
    items: []
  });


  useEffect(() => {
    handleDataFetching();
  }, []);

  async function handleDataFetching() {
    try {
      
      const response = await axios.get('http://localhost:3000/user/getclubinfo', {
        headers: {
          "idOfItem": clubId,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.data.success) {
        setClub(response.data.item);
      }
    } catch (error) {
      console.error("Error fetching club data:", error);
    }
  }



  return (
     
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-10 mt-5 rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:shadow-2xl hover:scale-105 w-full max-w-md mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center">{club.name}</h2>
        <p className="text-lg text-gray-700 mb-4">{club.description}</p>
        <p className="text-gray-700 mb-2"><strong>Email:</strong> {club.email}</p>
        <p className="text-gray-700 mb-2"><strong>Club Leader:</strong> {club.personWhoCreated}</p>
        <p className="text-gray-700 mb-2"><strong>Role:</strong> {club.positionOfPersonWhoCreated}</p>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {club.items.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No Items Listed</div>
          ) : (
            club.items.map((item: any) => (
              <ItemCard itemID={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
