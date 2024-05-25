import axios from "axios";
import { useState, useEffect } from "react";

export default function BookedItemsCard({ item, setBookedItems }: { item: any, setBookedItems: any }) {
  const [itemDetails, setItemDetails] = useState(item);

  useEffect(() => {
    handleFetchingItem();
  }, []);

  async function handleFetchingItem() {
    try {
      const itemData = await axios.get("http://localhost:3000/user/getbookeditemdetails", {
        headers: {
          "Content-type": "application/json",
          "id": item
        }
      });
      if (itemData.data.success) {
        setItemDetails(itemData.data.getItem);
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  }

  async function handleReturned() {
    const token = localStorage.getItem('jwt');
    try {
      const deleteItemResponse = await axios.post("http://localhost:3000/user/returnitem", {
        token: token,
        itemId: itemDetails._id
      });
      if (deleteItemResponse.data.success) {
        alert("Successfully Returned!");
        setBookedItems((prevItems: any[]) => prevItems.filter((i: any) => i !== item));
      } else {
        alert(deleteItemResponse.data.message);
      }
    } catch (error) {
      console.error("Error returning item:", error);
      alert("Error returning item");
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl text-center">
      <h3 className="text-xl font-bold mb-2 text-gray-800"><strong>Item Booked: </strong>{itemDetails.itemName}</h3>
      <p className="text-gray-700 mb-2"><strong>Booked From: </strong>{itemDetails.requestedFromName}</p>
      <p className="text-gray-700 mb-2"><strong>Booked On:</strong> {new Date(itemDetails.startDate).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-2"><strong>Return Date:</strong> {new Date(itemDetails.endDate).toLocaleDateString()}</p>
      <button
        onClick={handleReturned}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Return Item
      </button>
    </div>
  );
}
