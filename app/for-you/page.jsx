import React from "react";
import UserNav from "../Components/Foryou/UserNav";
import UserLanding from "../Components/Foryou/UserLanding";
import Search from "../Components/Search";

export default function foryou() {


  return (
    <>
      <div className="relative flex flex-col ml-[200px] w-[calc(100% - 200px)">
         <Search />
          <UserNav className="" />
          <UserLanding className="" />
        </div>
    </>
  );
}
