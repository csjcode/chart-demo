"use client";
import Demo from "@/components/Charts/Demo";
import DemoCandleBars from "@/components/Charts/DemoCandleBars";
import Image from "next/image";
import { FaShieldCat } from "react-icons/fa6";
import { FaSearch, FaStar, FaGrinStars, FaNewspaper } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { IoLogoAndroid, IoLogoApple, IoMdNotifications } from "react-icons/io";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { ImMug } from "react-icons/im";




export default function DemoPage() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row w-full min-h-full border border-red-500">
        <div className="flex flex-col bg-slate-950 min-w-[225px] border border-red-500">
          <div className="flex flex-row justify-center items-center w-full h-12">
            <div className="flex flex-row justify-center items-center mr-4">
              <div className="mr-2 ml-4 text-2xl">
                <FaShieldCat />
              </div>
              <div className="text-xl"><span className="font-bold">MEME</span><span className="font-light">SCRN</span></div>
            </div>
          </div>
          <div className=" w-full h-12 flex justify-center items-center">
            <div className="flex flex-row bg-zinc-800 rounded w-full px-4 py-1 mx-2 justify-center items-center">
              <div className="flex flex-row w-full">
                <div className="mt-[5px] mr-2 ml-2 text-zinc-400">
                  <FaSearch size={18} />
                </div>
                <div className="text-md text-zinc-400">Search</div>
              </div>
              <div className="text-zinc-400 my-1">
                <span className="border border-zinc-600 text-zinc-500 px-2 pb-1 mb-2 ml-4 text-lg rounded">
                  /
                </span>
              </div>
            </div>
          </div>

          <div className=" w-full h-12 flex justify-center items-center">
            <div className="flex flex-row bg-zinc-800 rounded w-full px-4 py-2 mx-2 justify-center items-center">
              <div className="flex flex-row w-full justify-center items-center text-zinc-200">
                Get the App <IoLogoApple className="ml-4" size="18" />
                <IoLogoAndroid size="18" />
              </div>
              <div className="flex flex-row"></div>
            </div>
          </div>

          <div className="w-full h-72 p-2">
            <div className="flex flex-row w-full pl-2 items-center h-12 text-zinc-200">
              <div className="mr-2 text-2xl">
                <FaStar />
              </div>
              <div className="text-lg">WatchList</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200">
              <div className="mr-2 text-2xl">
                <IoMdNotifications />
              </div>
              <div className="text-lg">Alerts</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200">
              <div className="mr-2 text-2xl">
                <FaGrinStars />
              </div>
              <div className="text-lg">Favorites</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200">
              <div className="mr-2 text-2xl">
                <BsFillBriefcaseFill />
              </div>
              <div className="text-lg">Portfolio</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200">
              <div className="mr-2 text-2xl">
                <FaNewspaper />
              </div>
              <div className="text-lg">News</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200">
              <div className="mr-2 text-2xl">
                <ImMug />
              </div>
              <div className="text-lg">Commentary</div>
            </div>
          </div>
          <div className="border border-emerald-500 w-full h-72"></div>
          <div className="border border-emerald-500 w-full h-12"></div>
        </div>
        <div className="w-full pb-8 flex flex-col bg-slate-800 border border-red-500">
          <div className="flex flex-row bg-slate-900 w-full h-12 justify-start items-center">
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
            <div className="ml-1 bg-slate-800 w-20 h-8 rounded-md"></div>
          </div>
          {/* <div className="px-1 py-2 text-zinc-400 text-lg border border-red-500">
            Demo Chart Example
          </div> */}
          <div className="w-full border border-red-500">
            <DemoCandleBars />
          </div>
          <div className="bg-slate-900 w-full border border-red-500"></div>
        </div>

        <div className="bg-slate-600  min-w-[325px] border border-red-500">
          <div className="border border-blue-500 w-full h-12"></div>
          <div className="border border-blue-500 w-full h-24"></div>
          <div className="flex flex-col justify-center items-center border border-blue-500 w-full h-36">
            <Skeleton className="h-[125px] w-full rounded-xl" />
          </div>
          <div className="border border-blue-500 w-full h-60"></div>
          <div className="border border-blue-500 w-full h-12"></div>
        </div>
      </div>
      <div className="bg-slate-900 w-full"></div>
    </div>
  );
}
