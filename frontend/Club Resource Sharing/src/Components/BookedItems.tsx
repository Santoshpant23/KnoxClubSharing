import axios from "axios";
import { useEffect, useState } from "react";
import BookedItemsCard from "./BookedItemsCard";

export default function BookedItems() {
    const [bookeditems, setBookedItems] = useState<any[]>([]);
    const token = localStorage.getItem('jwt');

    useEffect(() => {
        fetchMyBookedItem();
    }, []);

    async function fetchMyBookedItem() {
        const response = await axios.get('http://localhost:3000/user/getbookeditems', {
            headers: {
                "Content-Type": "application/json",
                token
            }
        });
        if (response.data.success) {
            setBookedItems(response.data.items);
        }
    }

    return (
        <div className="min-h-screen container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mt-8 mb-12 text-gray-800">
                Items You Booked
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookeditems.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 text-xl">
                        No Items Booked Yet
                    </div>
                ) : (
                    bookeditems.map((item: any) => (
                        <BookedItemsCard key={item} item={item} setBookedItems={setBookedItems} />
                    ))
                )}
            </div>
        </div>
    );
}
