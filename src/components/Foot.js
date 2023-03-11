import React from 'react'

export const Foot = () => {
  return (
   <>
   <div className=" px-5 py-5 flex text-white  gap-10 bg-gray-800 ">

    <div className="w-96" >
   <h1 className="font-semibold text-4xl pb-4" >Contact Us</h1>
   <p className='font-semibold' >If you have any questions about our products and services, please don't hesitate to contact us. You can reach us by phone, email, or in person at one of our branch locations.</p>
   </div>

    <div className="w-96" >
   <h1 className="font-semibold text-4xl pb-4" >Follow Us</h1>
   <p className='font-semibold' >Stay up to date with the latest news and updates from Neo Bank by following us on social media. You can find us on [list of social media platforms], where we share valuable financial tips, insights, and more.</p>
   </div>

    <div className="w-96" >
   <h1 className="font-semibold text-4xl pb-4" >Security & Privacy</h1>
   <p className='font-semibold' >Your security is our priority. We use advanced encryption and authentication technologies to protect your information. Visit our website or speak to a professional for details.</p>
   </div>

   </div>
   </>
  )
}
