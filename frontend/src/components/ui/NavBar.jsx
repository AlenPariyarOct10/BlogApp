import React from 'react'

function NavBar() {
  return (
    <div>
          <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-900">Blog App</h1>
                </div>
                <nav className="flex items-center space-x-4">
                    <a href="blog-index.html" className="text-gray-600 hover:text-gray-900">Blog</a>
                    <a href="user-show.html" className="text-gray-600 hover:text-gray-900">Profile</a>
                    <a href="login.html" className="text-gray-600 hover:text-gray-900">Logout</a>
                </nav>
            </div>
        </div>
    </header>
    </div>
  )
}

export default NavBar
