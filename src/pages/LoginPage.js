import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Login Form */}
      <div className="flex flex-col justify-center flex-1 px-16 bg-white">
        <div className="max-w-sm w-full mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Login</h2>
          <p className="text-gray-400 mb-8">Login to your account.</p>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-blue-900 font-semibold mb-1 mt-4">E-mail Address</label>
            <input type="email" id="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded mb-2 text-base" />
            <label htmlFor="password" className="text-blue-900 font-semibold mb-1 mt-4">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="p-2 border border-gray-300 rounded mb-2 text-base" />
            <div className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-500">Remember me</label>
              </div>
              <a href="#" className="text-blue-900 text-sm font-semibold hover:underline">Reset Password?</a>
            </div>
            <button type="submit" className="bg-blue-900 text-white rounded w-full py-3 font-semibold text-lg hover:bg-blue-800 transition">Sign In</button>
          </form>
          <p className="mt-8 text-gray-500 text-base">
            Don't have an account yet? <a href="#" className="text-blue-900 font-semibold hover:underline">Join KRIS today.</a>
          </p>
        </div>
      </div>
      {/* Right: Promo */}
      <div className="flex-1 flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80')" }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80 flex flex-col items-center justify-center">
          <div className="text-white text-2xl font-normal max-w-md text-left mb-10">
            Manage all <span className="text-yellow-400 font-bold">HR Operations</span> from the comfort of your home.
          </div>
          <div className="flex gap-2 mt-4">
            <span className="w-5 h-1.5 rounded bg-yellow-400"></span>
            <span className="w-5 h-1.5 rounded bg-white opacity-50"></span>
            <span className="w-5 h-1.5 rounded bg-white opacity-50"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage; 