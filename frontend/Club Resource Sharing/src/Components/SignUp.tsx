import axios from 'axios';
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [clubname, setClubName] = useState("");
    const [role, setRole] = useState("");
    const [otp, setOTP] = useState("");
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e:any) {
      
        
        e.preventDefault();
     

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            alert("Password Mismatch")
            return;
        }

        try {
        console.log("I am inside try catch");

            const response = await axios.post('http://localhost:3000/register/info', {
                email: email,
                personname: name,
                positionOfPerson: role,
                password: password,
                clubname: clubname
            });
         
            
            if (!response.data.success) {
                setError(response.data.message);
            
                
                return;
            }
    
            
            setShowOTPModal(true);
            setError("");
        

        } catch (error) {
            console.error("There was an error registering!", error);
            setError("Failed to register");
        
        }
    }

    async function handleOTPSubmit(e:any) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register/verify', {
                otp: otp,
                email: email,
                personname: name,
                position: role,
                password: password,
                clubname: clubname
            });

            if (response.data.success) {
                alert("User Registered Successfully, waiting for approval from admin");
                navigate("/");
            } else {
                setError(response.data.message);
                setError("Failed to verify OTP");
            }
            setError("");
        } catch (error) {
            console.error("Failed to verify OTP", error);
            setError("Failed to verify OTP");
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Club Name"
                        required
                        onChange={(e) => setClubName(e.target.value)}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Role in the Club"
                        required
                        onChange={(e) => setRole(e.target.value)}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button type="submit" className="mt-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                        Register
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="text-green-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            {showOTPModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                        <h2 className="text-xl font-bold mb-4 text-center">Enter OTP</h2>
                        <form onSubmit={handleOTPSubmit} className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button type="submit" className="py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                                Verify OTP
                            </button>
                            {error && <p className="text-red-500">{error}</p>}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
