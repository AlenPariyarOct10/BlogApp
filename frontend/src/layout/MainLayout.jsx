import React from 'react'
import NavBar from '../components/ui/NavBar'
import PostCard from '../components/blog/PostCard'
import { Outlet } from 'react-router-dom'


function MainLayout() {
  return (
<div className="min-h-screen bg-gray-50">
    <NavBar/>
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Outlet/>
    </main>
</div>
  )
}

export default MainLayout
