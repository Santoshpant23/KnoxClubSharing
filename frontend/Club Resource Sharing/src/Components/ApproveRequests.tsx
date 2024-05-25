import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AcceptRejectCard from "./AcceptRejectCard";

// Define the type for the user
interface User {
    _id: string;
    clubname: string;
    email: string;
    password: string;
    personname: string;
    positionOfPerson: string;
}

export default function ApproveRequests() {
    const [pendingUsers, setPendingUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    const [listchanged, setListChanged] = useState(false);



    useEffect(() => {
        handleAuth();
    }, [listchanged]);

    async function handleAuth() {
        const token = localStorage.getItem('jwt');
        if (!token) {
            alert("Unauthorized Access, Please Login");
            navigate("/login");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/admin/verify/login", {
                token
            });

            if (!response.data.success) {
                alert("Only Admin can access this page");
                navigate('/');
                return;
            }

            const allRemaining = await axios.post("http://localhost:3000/admin/verify/getallpendingusers", {
                token
            });
            const allUsers = allRemaining.data.allData;
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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pending User Approvals</h1>
            {pendingUsers.length === 0 ? (
                <p>No pending users</p>
            ) : (
                <div className="space-y-4">
                    {pendingUsers.map(user => (
                       <div>
                         <AcceptRejectCard user={user} change={setListChanged} / >
                       </div>
                    ))}
                </div>
            )}
        </div>
    );
}
