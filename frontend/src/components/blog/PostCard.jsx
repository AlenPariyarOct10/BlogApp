import React from 'react'

function PostCard() {
  return (
    <div>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="/placeholder.svg?height=200&amp;width=400" alt="Featured image" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>March 15, 2024</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        <a href="blog-show.html" className="hover:text-blue-600">Getting Started with Web Development</a>
                    </h3>
                    <p className="text-gray-600 mb-4">Learn the fundamentals of web development and start building amazing websites...</p>
                    <div className="flex justify-between items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Tutorial
                        </span>
                        <div className="flex space-x-2">
                            <a href="blog-edit.html" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</a>
                            <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                        </div>
                    </div>
                </div>
            </article>
    </div>
  )
}

export default PostCard
