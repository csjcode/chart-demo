"use client";
import Demo from "@/components/Charts/Demo";
import DemoCandleBars from "@/components/Charts/DemoCandleBars";
import Image from "next/image";

export default function DemoPage() {
  return (
    <div className="flex flex-col border border-green-300 justify-center">
      <div className="">
        <div className="px-1 py-4 text-red-300 text-xl">Demo Chart</div>
        <div className="border bg-slate-200">test</div>
      </div>
      <div className="flex flex-row">
        <div className="w-[150px]">Test1</div>
        <div className="">
          {" "}
          <Demo />
        </div>
        <div className="w-[250px]">Test2</div>
      </div>
      <div className="flex flex-row">
        <div className="w-[150px]">Test1</div>
        <div className="">
          {" "}
          <DemoCandleBars />
        </div>
        <div className="w-[250px]">Test2</div>
      </div>


    </div>
  );
}
