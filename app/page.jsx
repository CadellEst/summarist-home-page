"use client";

import Nav from "./Components/Nav";
import Landing from "./Components/Home/Landing";
import Features from "./Components/Home/Features";
import Reviews from "./Components/Home/Reviews";
import Numbers from "./Components/Home/Numbers";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import SignupModal from "./Components/Modal/SignupModal";



export default function Home() {


  return (
<Provider store={store}>
      <Nav />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </Provider>
  );


}
