import React from "react";
import UserNav from "../Components/Foryou/UserNav";
import Search from "../Components/Search";
import UserLanding from "../Components/Foryou/UserLanding";

export default function foryou() {
  return (
    <>
      <div className="flex flex-row min-h-screen">
        <UserNav className="w-[30%]"/>
        <div className="flex flex-col w-[100%]">
          <Search />
          <UserLanding />
        </div>
      </div>
    </>
  );
}
