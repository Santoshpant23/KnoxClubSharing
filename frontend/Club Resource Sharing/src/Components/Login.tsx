import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({setL}:{setL:any}) {

  
  const [email, setEmail]  = useState('');
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e:any){
    e.preventDefault();
    console.log("Handle Submit ma ta pugiyo");
    
    if(email.length<4 || pass.length<3){
      alert("Put all info correctly");
    } else{

      
    const response = await  axios.post("http://localhost:3000/user/login", {
        email:email,
        password:pass
      })
    
      

      
      const data = response.data;
  
      
      if(!data.success){
        alert("User with given information does not exist, try again with different credientials")
      } else{
        const token = data.token;
        localStorage.setItem('jwt', token);
        alert("Success");
        setL(true);
     
        navigate('/');
        
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Email"
            required
          />
          <input
          onChange={(e)=>{
            setPass(e.target.value);
          }}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            type="password"
            placeholder="Password"
            required
          />
          <button className="mt-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>
            Not a user?{' '}
            <Link to="/register" className="text-green-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
