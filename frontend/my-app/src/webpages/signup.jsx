import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../context/AuthContexts';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../auth';

function Signup() {
  const emailRef = useRef();
  const passRef = useRef();
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    await doSignInWithGoogle();
    setLoading(true);
    try {
      await doSignInWithGoogle();
      navigate('/home');
    } catch (error) {
      setError('Failed to sign up with Google');
      setLoading(false);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await doCreateUserWithEmailAndPassword(emailRef.current.value, passRef.current.value);
      navigate('/home');
    } catch (error) {
      setError('Failed to create an account');
      setLoading(false);
    }
  }

  return (
    <div className="App h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-black">
      <div className="max-w-md w-full bg-black p-10 pt-30 pb-20 rounded-lg shadow-md">
        <h1 className="text-4xl text-blue-500 font-bold text-center mb-6">Create your account.</h1>
        
        {userLoggedIn && <p className="text-center text-white mb-4">Logged in as: {userLoggedIn.email}</p>}
        {error && <div className="bg-red-500 text-white text-center py-2 mb-4 rounded-md">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              ref={emailRef}
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
              ref={passRef}
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            />
          </div>
          <div className="flex justify-between items-center mt-6 rounded-md">
            <div className="mt-8 bg-white hover:bg-indigo-700 text-black font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-half ">
              <FontAwesomeIcon icon={faGoogle} className="text-black-600 mr-2 cursor-pointer" onClick={handleGoogleSignUp} />
              <button type="button" onClick={handleGoogleSignUp} className="text-black-600 focus:outline-none">Sign up with Google</button>
            </div>
            <div className="mt-8 bg-white hover:bg-indigo-700 text-black font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-half ">
              <button type="button" className="text-black-500 focus:outline-none">Forgot Password?</button>
            </div>
          </div>
          <button disabled={loading} type="submit" className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
