import React from 'react'
import { db } from "../config/firebase"
import { updateDoc,collection, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react'

export const Transfer = () => {

  const [trsNam, setTrsNam] = useState("")

  const [rcvNam, setRcvNam] = useState("")

  const [amount, setAmount] = useState(0)


  //     UPDATE the amount in customers document
  const transferAmount = async (nam1, nam2, amount) => {
    try {
      const querySnapshot1 = await getDocs(
        query(collection(db, "customers"), where("name", "==", nam1))
      );
      if (!querySnapshot1.empty) {
        const custDoc1 = querySnapshot1.docs[0];
        const oldBalance1 = custDoc1.data().balance;
        const newBalance1 = oldBalance1 - amount;
        console.log("Updating customer 1 balance:", custDoc1.id, newBalance1);
        await updateDoc(custDoc1.ref, { balance: newBalance1 });
      }
  
      const querySnapshot2 = await getDocs(
        query(collection(db, "customers"), where("name", "==", nam2))
      );
      if (!querySnapshot2.empty) {
        const custDoc2 = querySnapshot2.docs[0];
        const oldBalance2 = custDoc2.data().balance;
        const newBalance2 = oldBalance2 + amount;
        console.log("Updating customer 2 balance:", custDoc2.id, newBalance2);
        await updateDoc(custDoc2.ref, { balance: newBalance2 });
      }
      // setAmount(0) ;
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <>

      <main className="min-h-screen" >
        <div className="  justify-center py-6 flex" >
          <div className="flex flex-col gap-7 items-center border-2 border-gray-300 ring-2 ring-gray-200 rounded-lg px-16 py-3 " >
          <h1 className="text-3xl font-bold" >Transfer Money</h1>
            <label htmlFor="" className="text-xl font-semibold" >Enter Name of Transferor  :      <input className="px-2 py-1 border border-black" type="text"
              onChange={(e) => { setTrsNam(e.target.value) }} />     </label>
            <label htmlFor="" className="text-xl font-semibold" >Enter Name of Recipient  :      <input className="px-2 py-1 border border-black" type="text"
              onChange={(e) => { setRcvNam(e.target.value) }} />     </label>
            <label htmlFor="" className="text-xl font-semibold" >Enter Amount : <input type="number" className="px-2 py-1 border border-black"
              onChange={(e) => { setAmount( parseInt( e.target.value)) }} /> </label>
            <button className="bg-blue-500 px-2 py-2 text-white rounded-lg font-semibold text-lg" 
            onClick={transferAmount(trsNam,rcvNam,amount)} >Transfer Amount</button>
    
          </div>


        </div>
      </main>

    </>
  )
}
