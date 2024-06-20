"use client"

import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()

  return (
  <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff66_1px,#1E293B_1px)] bg-[size:20px_20px]">
      <div className="flex justify-evenly items-center h-screen">
       <div className="flex justify-center items-center h-fit">
         <button onClick={()=>router.push("/number")} className="py-16 md:py-36 flex justify-center items-center p-5 w-fit h-fit sm:w-fit sm:h-4/6 2xl:w-fit 2xl:h-2/5 rounded-xl bg-slate-600">
           <div className="font-bold text-xl md:text-6xl text-slate-50">ANGKA</div>
         </button>
       </div>
       <div className="flex justify-center items-center h-fit">
        <button onClick={()=>router.push("/abjadPage")} className="py-16 md:py-36 flex justify-center items-center p-5 w-fit h-fit sm:w-fit sm:h-4/6 2xl:w-fit 2xl:h-2/5 rounded-xl bg-slate-600">
          <div className="font-bold text-xl md:text-6xl text-slate-50">ABJAD</div>
        </button>
       </div>
      </div>
  </div>
  )
}

export default Home
