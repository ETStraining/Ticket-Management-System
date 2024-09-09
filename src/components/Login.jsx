import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const adminEmail1 = "admin@gmail.com";
  const adminEmail12 = "dusengimana@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await axios.post('https://tm-system-1.onrender.com/api/v1/users/login', { email, password });
      setIsLoading(false);
      toast.success('Login successful!');

      const { token } = response.data;

      const loginTime = new Date().getTime();
      localStorage.setItem('token', token);
      localStorage.setItem('loginTime', loginTime);

      if (email === adminEmail1 || adminEmail12) {
        toast.success('Welcome Admin! Login successful...');
        navigate('/dashboard');
      } else {
        toast.success('Welcome! Login successful...');
        navigate('/');
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        toast.error(error.response.data.message || 'Login failed');
        setError(error.response.data.message || 'Login failed');
      } else {
        setError('Login failed. Please try again later.');
        toast.error('Login failed. Please try again later.');
      }
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="rounded-lg shadow-custom p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {isLoading ? (
          <div className="flex justify-center items-center mb-4 overflow-hidden">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-400 h-32 w-32"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isLoading}
              >
                Login
              </button>
            </div>
          </form>
        )}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-500 hover:text-indigo-700"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
