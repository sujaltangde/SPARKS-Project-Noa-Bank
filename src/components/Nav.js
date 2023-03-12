import React from 'react'

export const Nav = ({Link}) => {
  return (
    <>
    
    <nav className='text-white px-6 bg-gray-800' >
        <ul className='flex space-x-10 py-3  ' >
            <li className='text-2xl font-bold' >Noa Bank</li>
            
            <li className="cursor-pointer font-semibold text-xl  " > <Link to="/" 
            className="  hover:text-sky-400 focus:text-sky-400 "
            > Home </Link></li>
            
            <li className="cursor-pointer font-semibold text-xl " > <Link to="/customers " className=" focus:text-sky-400 hover:text-sky-400  "> Customers </Link> </li>
            
            <li className="cursor-pointer font-semibold text-xl " > <Link to="/transfer " className=" focus:text-sky-400 hover:text-sky-400  "> Transfer </Link> </li>

            <li className="cursor-pointer font-semibold text-xl " > <Link to="/transactions " className=" focus:text-sky-400 hover:text-sky-400  "> Transactions </Link> </li>

            <li className="cursor-pointer font-semibold text-xl " > <Link to="/about " className=" focus:text-sky-400   hover:text-sky-400 "> About </Link></li>
          
        </ul>
    </nav>




    

    </>
  )
}
