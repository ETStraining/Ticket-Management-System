import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      setError("Fill all fields");
      toast.error('Fill all fields')
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error('Password do not match')
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await axios.post('https://tm-system-1.onrender.com/api/v1/users/signup', { fullName, email, password, phoneNumber });
      setIsLoading(false);
      navigate('/login');
      setFullName('');
      setEmail('');
      setTelephone('');
      setConfirmPassword('');
      setPassword('');
      toast.success('Registration successful!!.. Pleas login?!')
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast.error(error.response ? error.response.data.message : 'Registration failed')
      setError(error.response ? error.response.data.message : 'Registration failed');
    }
  };

  return (
    <div className="fixed top-0 left-0 overflow-y-auto h-screen w-screen flex items-center justify-center bg-white ">
      <div className="rounded-lg shadow-custom p-5 max-w-md w-full flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {isLoading ? (
          <div className="flex justify-center items-center mb-4 overflow-hidden">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-400 h-32 w-32">
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Telephone Number</label>
              <input
                type="text"
                id="telephone"
                className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phoneNumber}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isLoading}
              >
                Register
              </button>
            </div>
          </form>
        )}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:text-indigo-700">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
