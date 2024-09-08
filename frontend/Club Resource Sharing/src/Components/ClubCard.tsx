import { Link, useNavigate } from "react-router-dom";

export default function ClubCard({ clubName, clubDesc, clubId }: {clubName: any, clubDesc: any, clubId:any}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/club-details', { state: { clubId } });
  }

  return (
    <div
      onClick={handleClick}
      className="transform hover:scale-105 transition-transform duration-300 cursor-pointer p-2"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-xl font-bold mb-2">{clubName}</h3>
        <p className="text-gray-700 mb-4">{clubDesc}</p>
        <Link
          to="#"
          className="text-green-500 hover:underline hover:text-green-700 transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
