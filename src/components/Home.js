import React from 'react'


export const Home = () => {
  return (
    <>
    
    <main className=" min-h-screen pb-24 bg-gray-100">
        <div className="text-center py-20 font-semibold " >
            
       <h1 className="text-6xl py-2 font-bold ">Welcome to Noa Bank</h1>
       <p>We offer a wide range of financial services to help you achieve your financial goals.</p>
        </div>

    <div className="flex flex-wrap justify-center items-center py-8 pt-20" >

        <div className="bg-slate-200  rounded-2xl  text-black px-8 py-4  w-80 mx-12 h-80 " >
            <h4 className="font-bold pb-2 text-4xl h " >Savings Accounts</h4>
            <p className="font-semibold pb-10 " >Save for your future with our secure and competitive savings accounts. Whether you're saving for a down payment, retirement, or emergencies, we have an account that fits your needs. Manage your account easily with online and mobile banking.</p>
        </div>
        <div className="bg-slate-200 rounded-2xl  text-black px-8 py-4  w-80 mx-12 h-80 " >
            <h4 className="font-bold pb-4 text-4xl h " >Credit Cards</h4>
            <p className="font-semibold pb-10 " >Manage your spending with our credit cards, designed to fit your lifestyle and budget. Choose from a range of cards with different limits and rewards, and enjoy peace of mind with 24/7 fraud monitoring and zero liability for unauthorized charges.</p>
        </div>
        <div className="bg-slate-200 rounded-2xl  text-black px-8 py-4  w-80 mx-12 h-80 " >
            <h4 className="font-bold pb-2 text-4xl h " >Personal Loans</h4>
            <p className="font-semibold pb-10 " >Get the funds you need with our flexible and competitive personal loans. Choose from a variety of loan options to fit your budget, and enjoy easy online applications with quick approval times. With automatic payments and personalized service, we make getting a loan hassle-free.</p>
        </div>
        

    </div>


    <div className="text-center py-12 px-10" >

<h1 className="font-bold text-4xl pb-12 " >Our Mission</h1>

<div className="flex px-20" >
<img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='w-96 h-64 rounded-2xl ' alt="" />

 <p className="font-semibold text-right text-lg pt-3 pl-5" >

Our mission at Noa Bank is to empower our customers to achieve financial success through our comprehensive range of financial products and services. We believe that everyone should have access to high-quality banking solutions that can help them achieve their financial goals, no matter their income or background.

We're committed to building long-lasting relationships with our customers by providing exceptional customer service and personalized solutions that meet their unique needs. Our team of banking professionals is dedicated to helping our customers navigate the complex world of finance with ease and confidence.</p>
</div>

    </div>


    </main>

    
    </>
  )
}
