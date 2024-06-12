import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App h-screen flex items-center justify-center bg-green-black">
      <div className="max-w-md w-full bg-white p-10 pt-28 pb-20 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create your account.</h1>
        
        <form action="/login" method="POST" className="space-y-4">
          <div>
            <input
              type="text"
              id="gmail"
              name="gmail"
              required
              placeholder="Gmail"
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Google logo */}
              <FontAwesomeIcon icon={faGoogle} className="text-indigo-600 mr-2" />
              {/* Google Sign-in option */}
              <button type="button" className="text-indigo-600 hover:underline focus:outline-none">Sign in with Google</button>
            </div>

            <div>
              {/* Forgot Password option */}
              <button type="button" className="text-gray-600 hover:underline focus:outline-none">Forgot Password?</button>
            </div>
          </div>

          <button type="submit" className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default App;
