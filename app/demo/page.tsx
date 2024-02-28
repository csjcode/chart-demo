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
import { FaFire, FaAngleDown } from "react-icons/fa";

import {
  ColumnDef,
  createColumnHelper,
  useReactTable,
} from "@tanstack/react-table";
import { MyTable } from "@/components/Tables/MyTable";

//TData
export type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

export default function DemoPage() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row w-full min-h-full">
        <div className="flex flex-col bg-zinc-950 min-w-[225px]">
          <div className="flex flex-row justify-center items-center w-full h-12">
            <div className="flex flex-row justify-center items-center mr-4">
              <div className="mr-2 ml-4 text-2xl">
                <FaShieldCat />
              </div>
              <div className="text-xl">
                <span className="font-bold">MEME</span>
                <span className="font-light">SCRN</span>
              </div>
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
          <div className=" w-full h-72">
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200 border border-b-zinc-900">
              <div className="mr-2 text-2xl ">
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                  width={24}
                  height={12}
                />
              </div>
              <div className="text-md">Solana</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200 border border-b-zinc-900">
              <div className="mr-2 text-2xl ">
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                  width={24}
                  height={12}
                />
              </div>
              <div className="text-md">Solana</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200 border border-b-zinc-900">
              <div className="mr-2 text-2xl ">
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                  width={24}
                  height={12}
                />
              </div>
              <div className="text-md">Solana</div>
            </div>

            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200 border border-b-zinc-900">
              <div className="mr-2 text-2xl ">
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                  width={24}
                  height={12}
                />
              </div>
              <div className="text-md">Solana</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200 border border-b-zinc-900">
              <div className="mr-2 text-2xl ">
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                  width={24}
                  height={12}
                />
              </div>
              <div className="text-md">Solana</div>
            </div>
            <div className="flex flex-row w-full py-1 pl-2 items-center h-12 text-zinc-200 border border-b-zinc-900">
              <div className="mr-2 text-2xl ">
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                  width={24}
                  height={12}
                />
              </div>
              <div className="text-md">Solana</div>
            </div>
          </div>

          <div className="w-full h-12"></div>
        </div>
        <div className="w-full pb-8 flex flex-col bg-zinc-800">
          <div className="flex flex-row bg-zinc-900 w-full h-12 justify-start items-center">
            <div className="flex flex-row ml-1 p-2 bg-zinc-800 rounded-md">
              <div className="text-zinc-600 text-sm mr-1">#1</div>
              <Image
                alt="solana"
                className="mr-1"
                src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                width={18}
                height={8}
              />
              <div className="text-xs">SOL</div>
              <div className="mx-1 text-xs text-emerald-500">+5.2%</div>
            </div>

            <div className="flex flex-row ml-1 p-2 bg-zinc-800 rounded-md">
              <div className="text-zinc-600 text-sm mr-1">#1</div>
              <Image
                alt="solana"
                className="mr-1"
                src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                width={18}
                height={8}
              />
              <div className="text-xs">SOL</div>
              <div className="mx-1 text-xs text-emerald-500">+5.2%</div>
            </div>

            <div className="flex flex-row ml-1 p-2 bg-zinc-800 rounded-md">
              <div className="text-zinc-600 text-sm mr-1">#1</div>
              <Image
                alt="solana"
                className="mr-1"
                src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                width={18}
                height={8}
              />
              <div className="text-xs">SOL</div>
              <div className="mx-1 text-xs text-emerald-500">+5.2%</div>
            </div>

            <div className="flex flex-row ml-1 p-2 bg-zinc-800 rounded-md">
              <div className="text-zinc-600 text-sm mr-1">#1</div>
              <Image
                alt="solana"
                className="mr-1"
                src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                width={18}
                height={8}
              />
              <div className="text-xs">SOL</div>
              <div className="mx-1 text-xs text-emerald-500">+5.2%</div>
            </div>

            <div className="flex flex-row ml-1 p-2 bg-zinc-800 rounded-md">
              <div className="text-zinc-600 text-sm mr-1">#1</div>
              <Image
                alt="solana"
                className="mr-1"
                src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                width={18}
                height={8}
              />
              <div className="text-xs">SOL</div>
              <div className="mx-1 text-xs text-emerald-500">+5.2%</div>
            </div>

            <div className="flex flex-row ml-1 p-2 bg-zinc-800 rounded-md">
              <div className="text-zinc-600 text-sm mr-1">#1</div>
              <Image
                alt="solana"
                className="mr-1"
                src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                width={18}
                height={8}
              />
              <div className="text-xs">SOL</div>
              <div className="mx-1 text-xs text-emerald-500">+5.2%</div>
            </div>
          </div>
          {/* <div className="px-1 py-2 text-zinc-400 text-lg border border-red-500">
            Demo Chart Example
          </div> */}
          <div className="w-full">
            <DemoCandleBars />
          </div>
          <div className="bg-zinc-900 w-full">
            <MyTable />
          </div>
        </div>

        <div className="bg-zinc-800  min-w-[325px]">
          <div className="flex flex-row space-x-24 border border-zinc-800 w-full h-12 justify-start items-center">
            <div className="flex flex-row">
              <div className="mr-1">
                {" "}
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/34856/small/wen-solana.png?1707872119"
                  width={30}
                  height={20}
                />{" "}
              </div>
              <div className="">Wen</div>
            </div>
            <div className="">...</div>
          </div>
          <div className="border border-zinc-800 w-full h-18 p-2 bg-zinc-900">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row font-bold">
                <span>WEN / SOL </span>
                <span className="text-amber-500 text-sm pt-1 ml-1">
                  <FaFire />
                </span>
                <span className="text-md font-normal ml-1 text-amber-500">
                  #8
                </span>
              </div>
              <div className="flex flex-row">
                {" "}
                <Image
                  alt="solana"
                  className="mr-1"
                  src="https://assets.coingecko.com/coins/images/4128/small/solana.png?1696504756"
                  width={18}
                  height={10}
                />
                <div className="mt-1 text-sm text-zinc-400">
                  {" "}
                  Solana &gt; Orca{" "}
                  <span className="p-1 border border-zinc-700">WP</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border border-zinc-800 w-full h-32 mb-2 mt-2">
            <Image
              alt="solana"
              className="mr-1 w-full"
              src="/wen-graphic.jpg"
              width={300}
              height={50}
            />
            <div className="flex flex-row space-x-5 text-sm p-2 bg-zinc-800 rounded w-full justify-center font-medium">
              <div className="">Website</div>
              <div className="border-l-900">Twitter</div>
              <div className="">Discord</div>
              <div className="mt-1"><FaAngleDown /></div>
            </div>
          </div>
          <div className="flex flex-col justify-start bg-zinc-900 border border-zinc-800 w-full h-60 px-4">
            <div className="flex flex-row">
              <div className="flex flex-row w-1/2">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2 mx-2">
                  <span className="text-zinc-500 text-[12px]">PRICE USD</span>
                  <span className="text-zinc-50 text-[16px]">$0.00008730</span>
                </div>
              </div>
              <div className="flex flex-row w-1/2 justify-center">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2 mx-2">
                  <span className="text-zinc-500 text-[12px]">PRICE USD</span>
                  <span className="text-zinc-50 text-[16px]">$0.00008730</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row  w-1/3">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2 mx-2">
                  <span className="text-zinc-500 text-[12px]">LIQUIDITY</span>
                  <span className="text-zinc-50 text-[16px]">$595K</span>
                </div>
              </div>
              <div className="flex flex-row h-16 w-1/3 justify-center">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2 mx-2">
                  <span className="text-zinc-500 text-[12px]">FDV</span>
                  <span className="text-zinc-50 text-[16px]">$0.0</span>
                </div>
              </div>
              <div className="flex flex-row h-16 w-1/3 justify-center">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2 mx-2">
                  <span className="text-zinc-500 text-[12px]">MKT CAP</span>
                  <span className="text-zinc-50 text-[16px]">$0.00</span>
                </div>
              </div>
            </div>


            <div className="flex flex-row">
              <div className="flex flex-row  w-1/4">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2">
                  <span className="text-zinc-500 text-[12px]">5M</span>
                  <span className="text-zinc-50 text-[16px] text-green-500">+0.37%</span>
                </div>
              </div>
              <div className="flex flex-row h-16 w-1/4 justify-center">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2">
                  <span className="text-zinc-500 text-[12px]">1H</span>
                  <span className="text-zinc-50 text-[16px] text-red-500">-0.30%</span>
                </div>
              </div>
              <div className="flex flex-row h-16 w-1/4 justify-center">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2">
                  <span className="text-zinc-500 text-[12px]">6H</span>
                  <span className="text-zinc-50 text-[14px] text-red-500">-0.60%</span>
                </div>
              </div>
              <div className="flex flex-row h-16 w-1/4 justify-center">
                <div className="flex flex-col justify-center items-center w-40 p-1 border border-zinc-800 rounded-lg mt-2">
                  <span className="text-zinc-500 text-[12px]">24H</span>
                  <span className="text-zinc-50 text-[14px] text-red-500">-4.19%</span>
                </div>
              </div>
            </div>


          </div>


          <div className="border border-zinc-800 w-full h-12"></div>
        </div>
      </div>
      <div className="bg-zinc-900 w-full"></div>
    </div>
  );
}
