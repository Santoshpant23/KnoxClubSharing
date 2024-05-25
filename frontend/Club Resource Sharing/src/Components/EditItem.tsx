import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ItemDetails {
  _id?: string;
  name: string;
  description: string;
  quantity: number;
  available: boolean;
  bookedDates: { startDate: Date | null; endDate: Date | null }[];
}

export default function AddOrEditItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const isEditing = (location.state as any)?.item !== undefined;
  const initialItemDetails: ItemDetails = isEditing
    ? (location.state as any).item
    : { name: "", description: "", quantity: 1, available: true, bookedDates: [] };
  
  const [itemDetails, setItemDetails] = useState<ItemDetails>(initialItemDetails);
  const [bookingDates, setBookingDates] = useState<[Date | null, Date | null]>([null, null]);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!itemDetails.available && itemDetails.bookedDates.length > 0) {
      const startDate = itemDetails.bookedDates[0].startDate;
      const endDate = itemDetails.bookedDates[0].endDate;
      if (startDate && endDate) {
        setBookingDates([
          new Date(startDate),
          new Date(endDate)
        ]);
      }
    }
  }, [itemDetails.available, itemDetails.bookedDates]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
      bookedDates: type === "checkbox" && checked ? [] : prevDetails.bookedDates // Reset bookedDates if available is checked
    }));
    if (name === "available" && checked) {
      setBookingDates([null, null]); // Reset booking dates if available is checked
    }
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setBookingDates([start, end]);
    setItemDetails((prevDetails) => ({
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

  const handleSave = async () => {
    try {
      if (isEditing) {
        // const { token, name, description, quantity, available, bookedDates, id } = req.body;
       const response =  await axios.put("http://localhost:3000/user/edit-item", {
        token,
        id: initialItemDetails._id,
        name: itemDetails.name,
        description: itemDetails.description,
        quantity: itemDetails.quantity,
        available: itemDetails.available,
        bookedDates: itemDetails.bookedDates
       });
       console.log(response.data);
       
      } else {
        await axios.post("http://localhost:3000/user/additem", itemDetails, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      }
      navigate('/profile');
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">{isEditing ? "Edit Item" : "Add New Item"}</h2>
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
          onClick={handleSave}
          className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
        >
          {isEditing ? "Save Changes" : "Add Item"}
        </button>
      </div>
    </div>
  );
}
