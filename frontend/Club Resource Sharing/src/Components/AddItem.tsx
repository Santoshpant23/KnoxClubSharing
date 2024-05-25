import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddItem() {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    description: "",
    quantity: 1,
    available: true,
    bookedDates: []
  });

  const [bookingDates, setBookingDates] = useState([null, null]);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
      bookedDates: type === "checkbox" && checked ? [] : prevDetails.bookedDates // Reset bookedDates if available is checked
    }));
    if (name === "available" && checked) {
      setBookingDates([null, null]); // Reset booking dates if available is checked
    }
  };

  const handleDateChange = (dates:any) => {
    const [start, end] = dates;
    setBookingDates([start, end]);
    setItemDetails((prevDetails:any) => ({
      ...prevDetails,
      bookedDates: [{ startDate: start, endDate: end }]
    }));
  };

  const cancelBooking = () => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      available: true,
      bookedDates: []
    }));
    setBookingDates([null, null]); // Reset booking dates
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/additem", {
        name: itemDetails.name,
        description: itemDetails.description,
        quantity: itemDetails.quantity,
        available: itemDetails.available,
        bookedDates: itemDetails.bookedDates,
        token
      });
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Add New Item</h2>
        <input
          type="text"
          name="name"
          value={itemDetails.name}
          onChange={handleChange}
          className="mb-4 p-2 w-full border rounded"
          placeholder="Item Name"
        />
        <textarea
          name="description"
          value={itemDetails.description}
          onChange={handleChange}
          className="mb-4 p-2 w-full border rounded"
          placeholder="Item Description"
        />
        <input
          type="number"
          name="quantity"
          value={itemDetails.quantity}
          onChange={handleChange}
          className="mb-4 p-2 w-full border rounded"
          placeholder="Quantity"
        />
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="available"
            checked={itemDetails.available}
            onChange={handleChange}
            className="mr-2"
            disabled={itemDetails.bookedDates.length > 0} // Disable checkbox if booking is added
          />
          <label>Available</label>
        </div>
        {!itemDetails.available && (
          <div className="mb-4">
            <DatePicker
              selected={bookingDates[0]}
              onChange={handleDateChange}
              startDate={bookingDates[0]}
              endDate={bookingDates[1]}
              selectsRange
              inline
            />
            <button
              onClick={cancelBooking}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-red-600 transition duration-300"
            >
              Cancel Booking
            </button>
          </div>
        )}
        <button
          onClick={handleAdd}
          className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
