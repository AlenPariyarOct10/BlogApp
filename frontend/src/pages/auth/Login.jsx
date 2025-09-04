import React from 'react'
import { NavLink } from 'react-router-dom'
import Register from './Register'

function Login() {
     document.title = "Login User";
  return (
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input id="email" name="email" type="email" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email"/>
                </div>
                
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input id="password" name="password" type="password" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password"/>
                </div>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>
                    
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                        Forgot password?
                    </a>
                </div>
                
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    Sign In
                </button>
            </form>
            
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Don't have an account? 
                 
                    <NavLink to="/auth/register" className={"font-medium text-blue-600 hover:text-blue-500"} title="Register">
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login
