import React from 'react'
import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { getDocs, collection, addDoc  } from 'firebase/firestore'

export const Customers = () => {

  const [custList, setcustList] = useState([])

  const customerRef = collection(db, "customers")



  //    READ or get or retrive the movie document
  const getCustList = async () => {
    // READ THE DATA      
    try {
      const data = await getDocs(customerRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      console.log(filteredData)
      setcustList(filteredData)
    }
    catch (err) {
      console.error(err)
    }

  }


  useEffect(() => {

    getCustList() ;

}, [])

custList.sort((a,b)=> a.customer_id - b.customer_id)

  return (
    <>

      <main className="min-h-screen" >

        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-medium tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                  <th className="px-4 py-3 font-bold text-xl ">Customer ID</th>
                  <th className="px-4 py-3 font-bold text-xl ">Name</th>
                  <th className="px-4 py-3 font-bold text-xl ">Email ID</th>
                  <th className="px-4 py-3 font-bold text-xl ">Balance</th>

                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">

                {custList.map((c)=>(
                  <tr>
                  <td className="px-8 py-3 whitespace-nowrap">{c.customer_id}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{c.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{c.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{c.balance} Rs</td>
                </tr>
                ))}

                
               

              </tbody>
            </table>
          </div>
        </div>


      </main>
    </>
  )
}
