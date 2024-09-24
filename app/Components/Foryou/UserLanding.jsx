"use client";

import React, { useEffect, useState } from "react";
import Search from "../Search";
import axios from "axios";
import Selected from "./Selected";
import Recommended from "./Recommended";
import Suggested from "./Suggested";

export default function UserLanding() {



  return (
    <>
    <div className="wrapper">
    

      <div className="container overflow-hidden">
        <div className="">
          <div>
            <Selected />
            <div className="relative w-[100%">
            <Recommended />
            </div>
            <div>
            <Suggested />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
