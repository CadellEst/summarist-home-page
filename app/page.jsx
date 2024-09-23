"use client";

import Image from "next/image";
import Nav from "./Components/Nav";
import Landing from "./Components/Home/Landing";
import Features from "./Components/Home/Features";
import Reviews from "./Components/Home/Reviews";
import Numbers from "./Components/Home/Numbers";
import Footer from "./Components/Footer";
import { Provider, useSelector } from "react-redux";
import { store } from "@/redux/store";
import SignupModal from "./Components/Modal/SignupModal";
import currUser from "./Components/Modal/SignupModal"
import UserNav from "./Components/Foryou/UserNav"



export default function Home() {


  return (
<Provider store={store}>
      <Nav />
      <SignupModal />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </Provider>
  );


}
