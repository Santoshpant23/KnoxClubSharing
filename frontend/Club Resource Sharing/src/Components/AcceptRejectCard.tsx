import axios from "axios";

export default function AcceptRejectCard({user, change}:{user:any, change:any}){

    async function handleAccept() {
        try {
            // const {email, clubname, password, token} = req.body;
            await axios.post("http://localhost:3000/admin/verify/approved", {
               email: user.email,
               clubname: user.clubname,
               password: user.password,
               token: localStorage.getItem('jwt'),
               personname: user.personname,
               positionOfPerson: user.positionOfPerson
            });
            // setPendingUsers(pendingUsers.filter(user => user._id !== userId));
            change((prevValue: boolean) => !prevValue);
        } catch (error) {
            console.error("Error accepting user", error);
        }
    }

    async function handleReject() {
        try {
            await axios.post("http://localhost:3000/admin/verify/denied", {
                token: localStorage.getItem('jwt'),
                email:user.email
            });
            change((prevValue: boolean) => !prevValue);
        } catch (error) {
            console.error("Error rejecting user", error);
        }
    }
    return(
        <div key={user._id} className="p-4 border rounded shadow">
                            <p><strong>Club Name:</strong> {user.clubname}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Person Name:</strong> {user.personname}</p>
                            <p><strong>Position:</strong> {user.positionOfPerson}</p>
                            <div className="flex space-x-4 mt-4">
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    onClick={handleAccept}
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