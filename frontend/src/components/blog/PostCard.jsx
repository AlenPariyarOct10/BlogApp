import React from 'react'

function PostCard({title, description, date, categories, img}) {
  return (
    <div>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={`https://placehold.co/300x200/000000/FFFFFF?text=${title}`} alt="Featured image" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{date}</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        <a href="blog-show.html" className="hover:text-blue-600">{title}</a>
                    </h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex justify-between items-center">
                        {categories?.map((item)=>(                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {item}
                        </span>))}

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
