import React from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/Hero'
import AboutUs from './pages/AboutUs'
import Popular from './pages/Popular'

const App = () => {
  return (
    <div className='bg-creamSonColor w-full h-full'>
      <Layout>
        <Navbar/>
        <Hero/>
        <AboutUs />
        <Popular />
      </Layout>
    </div>
  )
}

export default App
