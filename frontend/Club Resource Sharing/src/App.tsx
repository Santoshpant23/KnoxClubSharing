import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import AdminApproval from './Components/ApproveRequests'
import { useEffect, useState } from 'react'
import ClubDetail from './Components/ClubDetail'
import Profile from './Components/Profile'
import EditItem from './Components/EditItem'
import AddItem from './Components/AddItem'
import ItemBooking from './Components/ItemBooking'
import ApproveBookings from './Components/ApproveBookings'
import BookedItems from './Components/BookedItems'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {

  const [loggedIn, setLoggedIN] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if(token){
      setLoggedIN(true);
    }
  }, []);

  return (
    <div>
    <BrowserRouter>
    <NavBar getL={loggedIn} setL={setLoggedIN}/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login setL={setLoggedIN} />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/admin/dashboard" element={<AdminApproval />}/>
        <Route path="/club-details" element={<ClubDetail />} / >
        <Route path="/profile" element={<Profile/>} / >
        <Route path="/edit-item" element={<EditItem />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/book-item" element={<ItemBooking/>} />
        <Route path="/pending-requests" element={<ApproveBookings/>} />
        <Route path="/my-bookings" element={<BookedItems/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>

    </div>
  )
}

export default App
