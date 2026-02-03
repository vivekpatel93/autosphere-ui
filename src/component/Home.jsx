import React from 'react'
import { NavLink } from 'react-router-dom'
import dealerShipImg from "../assets/car_showroom.jpg"

function Home() {
  
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col md:flex-row w-full md:justify-between items-center p-10 md:px-20 gap-10">

      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-5xl font-bold leading-tight tracking-tight">
          Welcome to AutoSphere World</h1>

          <p className="mt-4 text-sm md:text-xl tracking-tight">
            AutoSphere is a modern car dealership platform that helps customers
            explore, compare, and purchase vehicles with ease. From new launches
            to trusted pre-owned cars, AutoSphere connects you with the perfect drive.
          </p>

          <NavLink
          to="/contact"
          className="inline-block mt-6 text-white text-sm md:text-lg md:py-2 md:px-4 py-2 px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          
          >Contact Us</NavLink>

          
      </div>
      <div
          className="md:w-2/5 flex justify-center"
          >
            <img
            className="w-full max-w-sm rounded-xl shadow-lg"
            src={dealerShipImg} alt="Img1" />
          </div>
          
    </div>
  )
}

export default Home