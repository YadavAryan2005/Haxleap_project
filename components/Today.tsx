"use client"
import React from 'react'
import Image from 'next/image'
function Sport(props: {
    imge:String,
    name: String,
    date: String,
    place: String,
  but: String,
    mode:String
}) {
  return (
      <div className={`w-[250px]  overflow-hidden ${props.mode!="dark"?"bg-[#3B3E47]":"bg-[#FFFFFF]"} p-3 rounded-tl-lg rounded-tr-none`}>
          <Image
          src={""+props.imge}
          alt="Vercel Logo"
          width={226.1}
        height={401.25}
        className='flex justify-center items-center'
          />
          <hr className='w-full  mt-5 border-dashed border-[0.96px]' />
            <div className={` ${props.mode!="dark"?"bg-[#3B3E47]":"bg-[#FFFFFF]"} bottom-0 w-full  py-3 flex flex-col gap-3`}>
              <div className={`w-full ${props.mode!="dark"?"text-white":"text-[#000000]"} text-center`}>
                  <h1 className='text-xl font-semibold'>{props.name}</h1>
                  <h2 className='text-sm'>{props.date}</h2>
                  <h3 className='text-sm'>{props.place}</h3>
            </div>
             <button className='w-full bg-black text-white text-sm p-2'>{props.but}</button>
              </div>
    </div>
  )
}

export default Sport
