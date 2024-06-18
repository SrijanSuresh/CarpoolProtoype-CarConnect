import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function App() {
  // Handle Google sign-up click event
  const handleGoogleSignUp = () => {
    // Implement Google sign-up logic here
    alert('Implement Google sign-up functionality');
  };

  return (
    <div className="App h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-black">
      <div className="max-w-md w-full bg-black p-10 pt-30 pb-20 rounded-lg shadow-md">
        <h1 className="text-4xl text-blue-500 font-bold text-center mb-6">Create your account.</h1>
        
        <form action="/login" method="POST" className="space-y-6">
          <div>
            <input
              type="text"
              id="gmail"
              name="gmail"
              required
              placeholder="Gmail"
              className="mt-4 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            />
          </div>
          <div className="flex justify-between items-center mt-6 rounded-md">
            <div className="mt-8 bg-white hover:bg-indigo-700 text-black font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-half ">
              {/* Google logo */}
              <FontAwesomeIcon icon={faGoogle} className="text-black-600 mr-2 cursor-pointer" onClick={handleGoogleSignUp} />
              {/* Google Sign-in option */}
              <button type="button" onClick={handleGoogleSignUp} className="text-black-600 focus:outline-none">Sign up with Google</button>
            </div>

            <div className="mt-8 bg-white hover:bg-indigo-700 text-black font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-half ">
              {/* Forgot Password option */}
              <button type="button" className="text-black-500 focus:outline-none">Forgot Password?</button>
            </div>
          </div>

          <button type="submit" className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
