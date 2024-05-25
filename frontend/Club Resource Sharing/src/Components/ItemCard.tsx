import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ itemID }: { itemID: any }) {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    _id: "random",
    name: "Default Name",
    email: "abc@gmail.com",
    description: "just a random description",
    quantity: 1,
    available: true,
    bookedDates: []
  });

  useEffect(() => {
    handleGetItem();
  }, []);

  async function handleGetItem() {
    const itemFromBackend = await axios.get("http://localhost:3000/user/getitem", {
      headers: {
        "Content-Type": "application/json",
        "id": itemID
      }
    });
 

    if (itemFromBackend.data.success) {
    
      setItem(itemFromBackend.data.getItem);
    } else {
    
      alert(itemFromBackend.data.message);
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
  }

  const handleItemClick = (item: any) => {
    navigate('/book-item', {state: {item: item}})
  };

  return (
    <div
      key={item._id}
      className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transform transition duration-300 hover:shadow-2xl hover:scale-105"
      onClick={() => handleItemClick(item)}
    >
      <h3 className="text-xl font-bold mb-2 text-blue-600">{item.name}</h3>
      <p className="text-gray-500 mb-4">{item.description}</p>
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-700"><strong>Quantity:</strong> {item.quantity}</p>
        <p className={`text-sm font-semibold ${item.available ? 'text-green-500' : 'text-red-500'}`}>
          {item.available ? 'Available' : 'Not Available'}
        </p>
      </div>
    </div>
  );
}
