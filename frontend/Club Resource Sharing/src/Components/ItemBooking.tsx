import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { addDays } from 'date-fns';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItemBooking: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const bookedDates = [
    { start: new Date('2023-05-15'), end: new Date('2023-05-20') },
    { start: new Date('2023-05-25'), end: new Date('2023-05-27') },
  ];


  const token = localStorage.getItem('jwt');

  const location = useLocation();
  const navigation = useNavigate();

  const {item} = location.state || [];

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const isDateBooked = (date: Date) => {
    return bookedDates.some(({ start, end }) => date >= start && date <= end);
  };

 async function submitBooking(){
    if(!startDate || !endDate){
        alert(
            "Please Select Valid Date"
        )
        return;
    }
    // const { token, itemId, from, to } = req.body;
   const response = await axios.post("http://localhost:3000/user/requestApproval", {
    token,
    itemId: item._id,
    from: startDate,
    to: endDate
   })

   if(response.data.success){
    alert("Success, You will be notified via email about if your request is approved by the owner or not");
    navigation('/');
    return;
   }

   alert("Failed " + response.data.message);

  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Item Description</h2>
        <p className="text-lg text-gray-700 mb-4"><strong>Name:</strong> {item.name}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Description:</strong> {item.description}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Quantity:</strong> {item.quantity}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Available:</strong> {item.available ? "Yes" : "Not Today, pick other dates"}</p>

        {token && (
          <div>
            <button
          onClick={() => setIsBookingOpen(!isBookingOpen)}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          {isBookingOpen ? 'Cancel Booking' : 'Book Dates'}
        </button>

        {isBookingOpen && (
          <div className="mt-4">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              minDate={new Date()}
              filterDate={(date) => !isDateBooked(date)}
              dateFormat="yyyy-MM-dd"
            />
            <button
              onClick={submitBooking}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
            >
              Confirm Booking
            </button>
          </div>
        )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemBooking;
