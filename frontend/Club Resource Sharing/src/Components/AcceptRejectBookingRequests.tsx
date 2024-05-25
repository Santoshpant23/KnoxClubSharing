import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AcceptRejectBookingRequests({reqId, setPendingUsers}:{reqId:any, setPendingUsers:any}){

    const navigate = useNavigate();

    const [user, setUser] = useState({
        _id: "",
        requestedByName: "Default Name",
        requestedByEmail : "xyz@gmail.com",
        item: "No Item",
        itemId: "",
        requestedByClubId: "",
        from: "",
        to: ""
    })

    useEffect(() => {
        // alert(reqId );
       fetchInfo();
       
    }, []);

    async function fetchInfo(){
   
        
        const getData = await axios.get("http://localhost:3000/user/request/iteminfo", {
        headers: {
            "Content-Type" : "application/json",
            "token": localStorage.getItem('jwt'),
            "id": reqId
        }
       }) 

      
       

       if(!getData.data.success){
      
        
        alert("Something is wrong, try again "+ getData.data.message);
        navigate('/');
       } else{
 
        setUser(getData.data.info);
       }
    }

    async function handleAccept(userId: string) {
        try {
  
         const response =    await axios.post("http://localhost:3000/user/request/approveRequest", {
                token: localStorage.getItem('jwt'),
                requestId: userId
            });
    
            if(!response.data.success){
                alert(response.data.message)
                return;
            }else{
                alert("Successfully Accepted")
            }
            setPendingUsers((prevItems: any[]) => prevItems.filter((i: any) => i !== reqId));
        } catch (error) {
            console.error("Error accepting user", error);
        }
    }

    async function handleReject() {
        try {
        const response =    await axios.post("http://localhost:3000/user/request/denyRequest", {
                token: localStorage.getItem('jwt'),
                requestId: user._id
            });
            if(!response.data.success){
                alert(response.data.message)
                return;
            }else{
                alert("Successfully Denied")
            }

            setPendingUsers((prevItems: any[]) => prevItems.filter((i: any) => i !== reqId));
        } catch (error) {
            console.error("Error rejecting user", error);
        }
    }
    return(
        <div key={user._id} className="p-4 border rounded shadow">
                            <p><strong>Club Requesting:</strong> {user.requestedByName}</p>
                            <p><strong>Email of Club Requesting:</strong> {user.requestedByEmail}</p>
                            <p><strong>Item Requested</strong> {user.item}</p>
                            <p><strong>Requested From: </strong> {user.from}</p>
                            <p><strong>Requested To: </strong> {user.to}</p>
                            <div className="flex space-x-4 mt-4">
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    onClick={() => handleAccept(user._id)}
                                >
                                    Accept
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={handleReject}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
    )
}