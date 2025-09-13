import React from 'react'
import PostCard from '../components/blog/PostCard'


function Home() {
  return (
    <div>
              <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Blog Posts</h2>
                <p className="text-gray-600 mt-2">Manage and view all your blog posts</p>
            </div>
            <a 
                href="blog-create.html" 
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                New Post
            </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PostCard title={"Hello World"} description={"Namaste"} date={"August 6, 2024"} categories={["Education", ]}/>
            <PostCard title={"Hello Nepal"} description={"Namaste"} date={"August 6, 2024"} categories={["Education", ]}/>
            <PostCard title={"Hello World"} description={"Namaste"} date={"August 6, 2024"} categories={["Education", ]}/>

        </div>

        <div className="text-center py-12 hidden">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No blog posts</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating your first blog post.</p>
            <div className="mt-6">
                <a 
                    href="blog-create.html" 
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                    Create Post
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home
