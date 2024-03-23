"use client"
import React from 'react'
function Sport(props: {
    img: String,
    name: String,
    event: String,
  sport: String
    mode:String
}) {
  return (
      <div className={`w-full px-5  sm:w-[227px]  sm:h-[511px]  overflow-hidden ${props.mode!=="dark"?"bg-[#3B3E47]":"bg-[#FFFFFF]"} sm:p-3 relative `}>
       <img src={""+props.img} className=' w-full sm:w-[385px] h-[385px] overflow-hidden'/>
            <div className={`absolute ${props.mode!=="dark"?"bg-[#3B3E47]":"bg-[#FFFFFF]"} bottom-0 w-full pr-6 py-3 flex flex-col gap-3`}>
            <span className={`w-[186px] h-[21px] ${props.mode!=="dark"?"text-[#FFFFFF]":" text-[#000000]"}`}>{props.name}</span>
            {props.event===" "?<div className={`${props.mode!=="dark"?"text-[#FFFFFF]":" text-[#000000]"}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem atque est dolores neque ipsam minima Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, tenetur Lorem ipsum dolor sit </div>:<div className={`flex ${props.mode!=="dark"?"bg-[#292B32]":"bg-[#F7F7F8]"} w-full gap-5 p-3`}>
              <div className="flex flex-col float-start">
                <span className={`${props.mode!=="dark"?"text-[#DFDFDF]":" text-[#525965]"}`}>Total Events</span>
                <span className={`${props.mode!=="dark"?"text-[#FFFFFF]":" text-[#000000]"}`}>{props.event+"Events"}</span>
              </div>
              <div className="flex flex-col float-end">
                <span className={`${props.mode!=="dark"?"text-[#DFDFDF]":" text-[#525965]"}`}>Sport</span>
                <span className={`${props.mode!=="dark"?"text-[#FFFFFF]":" text-[#000000]"}`}>{props.sport}</span>
              </div>
              </div>}
              </div>
          </div>
  )
}

export default Sport
