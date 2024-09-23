import React from "react";
import { TfiSearch } from "react-icons/tfi";

export default function Search() {
  return (
    <div className="flex border h-[80px] w-[100%] p-8 items-center justify-end">
      <div
       className="flex
       flex-row
       items-center
       justify-start
       border-[2px]
       bg-slate-100
       rounded-lg
       h-[40px]
       w-[330px]
       text-sm
       overflow-hidden
       "
      >
        <input
          type="text"
         className="bg-slate-100 relative h-[30px] w-[95%] p-2 pointer-events-auto"
          placeholder="Search for books"
          
        />
        <div className="h-[40px] w-[2px] bg-slate-200"></div>
        <div className=" rounded-md relative text-lg py-3 px-3">
          <TfiSearch />
        </div>
      </div>
    </div>
  );
}
