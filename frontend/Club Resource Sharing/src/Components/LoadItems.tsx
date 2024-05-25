import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LoadItems({ item, setItems }: { item: any, setItems: any }) {
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(item);

  useEffect(() => {
    handleFetchingItem();
    
  }, []);

  async function handleFetchingItem(){
    const itemData = await axios.get("http://localhost:3000/user/getitem", {
        headers: {
            "Content-type": "application/json",
            "id": item
        }
    })
    if(itemData.data.success){
  
           setItemDetails(itemData.data.getItem); 
    }
}

  const handleEdit = (item: any) => {
    navigate('/edit-item', { state: { item } });
  };

  async function handleDelete() {

    const token = localStorage.getItem('jwt');
    try {
      const deleteItemResponse = await axios.post("http://localhost:3000/user/deleteitem", {
        token: token,
        id: itemDetails._id
      });
      if (deleteItemResponse.data.success) {
        alert("Successfully Deleted!!");
        setItems((prevItems: any[]) => prevItems.filter((i: any) => i !== item));
      } else {
        alert(deleteItemResponse.data.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item");
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-bold mb-2">{itemDetails.name}</h3>
      <p className="text-gray-700 mb-4">{itemDetails.description}</p>
      <p className="text-gray-700 mb-2"><strong>Quantity:</strong> {itemDetails.quantity}</p>
      <p className="text-gray-700 mb-2"><strong>Available:</strong> {itemDetails.available ? 'Yes' : 'No'}</p>
      <button onClick={() => handleEdit(itemDetails)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
        Edit
      </button>
      <button onClick={handleDelete} className="mt-4 ml-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-red-600 transition duration-300">
        Delete
      </button>
    </div>
  );
}
