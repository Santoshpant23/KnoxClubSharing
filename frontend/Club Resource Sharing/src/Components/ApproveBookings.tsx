import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AcceptRejectBookingRequests from "./AcceptRejectBookingRequests";


export default function ApproveBookings() {
    const [pendingUsers, setPendingUsers] = useState<any[]>([]);
    const navigate = useNavigate();



    useEffect(() => {
        handleAuth();
    }, []);

    async function handleAuth() {
        const token = localStorage.getItem('jwt');
        if (!token) {
            alert("Unauthorized Access, Please Login");
            navigate("/login");
            return;
        }

        try {
         

            const allRemaining = await axios.post("http://localhost:3000/user/request/getallpendingrequests", {
                token
            });
            console.log("I got this from backend "+allRemaining.data.success);
            console.log("I got this from backend "+allRemaining.data.allData);
            const allUsers = allRemaining.data.pendingRequests;
            if (Array.isArray(allUsers)) {
                setPendingUsers(allUsers);
            } else {
                console.error("Invalid data format: expected an array");
            }
        } catch (error) {
            console.error("Error during authentication or data fetching", error);
        }
    }

   

    return (
        <div className="min-h-screen container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pending User Approvals</h1>
            {pendingUsers.length === 0 ? (
                <p>No pending users</p>
            ) : (
                <div className="space-y-4">
                    {pendingUsers.map((user:any) => (
                       <div>
                         <AcceptRejectBookingRequests key={user} reqId={user} setPendingUsers={setPendingUsers} / >
                       </div>
                    ))}
                </div>
            )}
        </div>
    );
}
