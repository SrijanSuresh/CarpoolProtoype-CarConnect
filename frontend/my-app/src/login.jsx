import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { doSigninWithEmailAndPassWord, doSignInWithGoogle } from './auth';
import { useAuth } from './context/AuthContexts';

function Login() {  
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (userLoggedIn) {
      navigate('/home');
    }
  }, [userLoggedIn, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSigninWithEmailAndPassWord(email, password);
        setErrorMessage(''); // Clear any previous error message
        navigate('/home');
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        setErrorMessage(''); // Clear any previous error message
        navigate('/home');
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsSigningIn(false);
    }
  };

  return (
    <div className="App h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-black">
      <div className="max-w-md w-full bg-black p-10 pt-30 pb-20 rounded-lg shadow-md">
        <h1 className="text-4xl text-blue-500 font-bold text-center mb-6">Log In</h1>
        
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            />
          </div>
          <div className="flex justify-between items-center mt-6 rounded-md">
            <div className="mt-8 bg-white hover:bg-indigo-700 text-black font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-half ">
              <FontAwesomeIcon icon={faGoogle} className="text-black-600 mr-2 cursor-pointer" onClick={onGoogleSignIn} />
              <button type="button" onClick={onGoogleSignIn} className="text-black-600 focus:outline-none">Continue with Google</button>
            </div>
            <div className="mt-8 bg-white hover:bg-indigo-700 text-black font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-2/5 ">
              <button type="button" className="text-black-500 focus:outline-none">Forgot Password?</button>
            </div>
          </div>
          <button type="submit" className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
