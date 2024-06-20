"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const Level2 = () => {
  const router = useRouter()
  const list = ["B","D","G","K","M","P","S","Y"]
  const [position, setPosition] = useState(0)
  const backHandle = () => {
    if(position < 1){
      setPosition(list.length-1)
    } else {
      setPosition(position-1)
    }
  }
  const forwardHandle = () => {
    if(position > list.length-2){
      setPosition(0)
    } else {
      setPosition(position+1)
    }
  }
  const reset = () => {
    setPosition(0)
  }

  return (
  <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff66_1px,#1E293B_1px)] bg-[size:20px_20px]">
      <div className="flex justify-center items-center h-screen">
        <div className="w-64 h-fit sm:w-3/12 sm:h-4/6 2xl:w-2/12 2xl:h-2/5 rounded-xl bg-slate-600 ">
          <div onClick={()=>router.push("/")} className="ml-5 mt-3 text-white">
          <button ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</button>
          </div>
          <div className="flex justify-center items-center p-5 text-slate-300 text-md md:text-xl">ABJAD Lv2</div>
          <div className="flex justify-center items-center pb-10 font-bold text-8xl md:text-9xl text-slate-50">{list[position]}</div>
          <div className="flex justify-center items-center">
            <button className="text-slate-300 text-sm md:text-base" onClick={reset}>reset</button>
          </div>
          <div className="bg-slate-200 p-3 mt-11 rounded-br-xl rounded-bl-xl flex justify-around items-center">
            <button className="text-4xl md:text-5xl pt-2" onClick={backHandle}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
</button>
            <button className="text-4xl md:text-5xl pt-2" onClick={forwardHandle}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /> </svg></button>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Level2
