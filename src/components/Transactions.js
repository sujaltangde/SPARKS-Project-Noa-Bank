import React from 'react'
import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { getDocs, collection  } from 'firebase/firestore'


export const Transactions = () => {

    const [custList, setcustList] = useState([])

    const transRef = collection(db, "transactions")


     //    READ or get or retrive the movie document
  const getCustList = async () => {
    // READ THE DATA      
    try {
      const data = await getDocs(transRef)
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


  return (
    <>
<main className="min-h-screen" >

<div className="w-full overflow-hidden rounded-lg shadow-xs">
  <div className="w-full overflow-x-auto">
    <table className="w-full whitespace-no-wrap">
      <thead>
        <tr className="text-xs font-medium tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
          <th className="px-4 py-3 font-bold text-xl ">Transferor</th>
          <th className="px-4 py-3 font-bold text-xl ">Receiver</th>
          <th className="px-4 py-3 font-bold text-xl ">Amount</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">

        {custList.map((c)=>(
          <tr>
          <td className="px-8 py-3 whitespace-nowrap">{c.transferor}</td>
          <td className="px-4 py-3 whitespace-nowrap">{c.receiver}</td>
          <td className="px-4 py-3 whitespace-nowrap">{c.amount} Rs</td>
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
