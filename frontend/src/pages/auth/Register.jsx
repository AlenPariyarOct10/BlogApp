import React from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
    document.title = "Register User";
  return (
    <div>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join our community and start blogging</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6" action="#" method="POST">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label for="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input id="first-name" name="first-name" type="text" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John"/>
                    </div>
                    
                    <div>
                        <label for="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input id="last-name" name="last-name" type="text" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Doe"/>
                    </div>
                </div>
                
                <div>
                    <label for="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input id="email" name="email" type="email" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com"/>
                </div>
                
                <div>
                    <label for="username" className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                    </label>
                    <input id="username" name="username" type="text" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="johndoe"/>
                </div>
                
                <div>
                    <label for="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input id="password" name="password" type="password" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Create a strong password"/>
                </div>
                
                <div>
                    <label for="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                    </label>
                    <input id="confirm-password" name="confirm-password" type="password" required="" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Confirm your password"/>
                </div>
                
                <div className="flex items-center">
                    <input id="terms" name="terms" type="checkbox" required="" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                    <label for="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the 
                        <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> 
                        and 
                        <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                    </label>
                </div>
                
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    Create Account
                </button>
            </form>
            
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Already have an account?  
                 
                         <NavLink to="/auth/login" className={"font-medium text-blue-600 hover:text-blue-500"} title="Register">
                           Sign in here
                         </NavLink>
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register
