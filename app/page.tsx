"use client";
import Image from "next/image";
import Sport from "@/components/Sport";
import Today from "@/components/Today";
import { useState } from "react";
export default function Home() {
  const [mode, setMode] = useState("dark");
  return (
    <main className={` p-5 flex flex-col justify-center items-center md:p-20 ${mode==="dark"?"bg-[#F7F7F8]":"bg-[#292B32]"}`}>
      <div className="w-full relative ">
        <div className="w-full flex"> 
        <div className="flex justify-start">
        <h1 className={`w-[80px] h-[36px] font-[Poppins]
         ${mode==="dark"?"text-black":"text-[#FFFFFF]"}
         font-bold text-2xl pl-5 underline`}>Sport</h1>
          </div>
          {/* togglemode button*/}
          <div className="w-full absolute flex justify-end">
        <div className={`w-12 h-6 ${mode==="dark"?"bg-black":"bg-white"} border rounded-xl overflow-hidden float-right items-end`}>
          <button className={`h-full w-6  rounded-xl cursor-pointer ${mode==="dark"?"float-left bg-white":"float-right bg-black"}`} onClick={()=>{mode==="dark"?setMode("white"):setMode("dark")}}>
            </button>
            </div>
            </div>
          </div>
        <div className="flex overflow-hidden gap-5 flex-wrap justify-center  gap-y-3 ">
          <Sport img="/dc33760174d3f67737f6e318d0f118ff.jpg"
          name="Sacramento River Cats"
          event="48"
          sport="BaseBall"
          mode={mode}/>
          <Sport img="/76e2b366b2456bbd169b0c3c9525252c.jpg"
          name="Las Vegas Aciators"
          event="28"
            sport="BaseBall"
          mode={mode}/>
          <Sport img="/b2fcf21c696811f745109da24a740d73.jpg"
          name="New Jersey Devils"
          event="15"
            sport="Hockey"
          mode={mode}/>
          <Sport img="/76e2b366b2456bbd169b0c3c9525252c.jpg"
          name="Las Vegas Aciators"
          event="28"
            sport="BaseBall"
          mode={mode}/>
          <Sport img="/f71497e0e3af85c77fa47046bb1f23cb.jpg"
          name="Advertisement title"
          event=" "
            sport=""
          mode={mode}/>
        </div>
        <div className="flex w-full justify-center py-10"><button className="w-[124px] h-[46px] px-[10px] py-[30] bg-[#2C9CF0]
           text-white rounded-md font-semibold  hover:border">See More</button></div>
      </div>
      <div className={`w-full bg-gradient-to-b ${mode!=="dark"?"from-teal-900 to-purple-900":"bg-gradient-to-b from-purple-100 to-blue-100"}`}>
      <div className="p-10 flex-col justify-center w-full">
          <h1 className={`flex justify-center ${mode!="dark"?"text-[#ffffff]":"text-[#000000]"} font-[Poppins] h-[52px] text-2xl md:text-3xl`}>Collection Spotlight</h1>
          <h2 className={` text-center font-[Inter] text-sm ${mode!="dark"?"text-[#ffffff]":"text-[#000000]"}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience.<br/>Grab yours today</h2>
          <div className="w-full py-5">
            <div className="flex justify-center gap-5  relative flex-col md:flex-row items-center">
              <Today imge="/a2c7e5def5b347470305864869a894b6.jpg" name="Las Vegas Aviators" date="OCT15 | SUN | 4:30PM" place="Las Vegas Ballpark, Las Vegas, Nevada" but="Take Flight Collection" mode={mode} />
              <Today imge="/b6e3aeda879dc6f22f94711c788789b5.jpg" name="Sacramento River Cats" date="OCT15 | SUN | 4:30PM" place="Sutter Health Park, Sacramento, California" but="Orange Collection" mode={mode}/>
              <Today imge="/a2c7e5def5b347470305864869a894b6.jpg" name="Las Vegas Aviators" date="OCT15 | SUN | 4:30PM" place="Las Vegas Ballpark, Las Vegas, Nevada" but="Take Flight Collection" mode={mode}/>
            <div className="absolute w-full">
                <span className="float-start text-blue-500 text-2xl cursor-pointer   p-5 border border-blue-500 mx-5  hidden lg:flex">&#10094;</span>
                <span className="float-end text-blue-500 text-2xl cursor-pointer   p-5 border border-blue-500 mx-5 hidden lg:flex">&#10095;</span>
            </div>
            </div>
          </div>
     </div>
      </div>
    </main>
  );
}
