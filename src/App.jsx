import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import ListingJobs from './components/ListingJobs'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero  title= 'Test Title' subtitle= 'This is subtitle' />
    <HomeCards />
    <ListingJobs />

    
    

    
    

    
   

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
      
    </>
  )
}

export default App