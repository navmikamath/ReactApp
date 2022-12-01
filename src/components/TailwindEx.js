import React from 'react'

 function TailwindEx() {
  return (
    <div>
      <nav className="bg-purple-600 text-white flex justify-between">
        <span className="text-xl flex items-center mx-3 font-bold">
          BookStore
        </span>
        <ul className="px-28 py-4 space-x-11 flex justify-end">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Phone Gallery</li>
            <li className=" cursor-pointer">Contact Us</li>
        </ul>
    </nav>
    <main className="bg-blue-200 flex justify-around">
      <div className="main  py-40 pl-9">
      <div className="text-3xl">
                Hi There
      </div>
      <div className="my-4">
        <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900" >
            Click
        </button>
      </div>
      </div>
      <div className="flex pl-96 items-center ">
        <img src ="./images/bg.jpg" className='h-80 justify-end pl-96' alt=""/>
      </div>
    </main>
    
    </div>
  )
}
export default TailwindEx;

