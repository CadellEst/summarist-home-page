import Image from "next/image";
import Nav from "./Components/Nav";
import Landing from "./Components/Home/Landing";
import Features from "./Components/Home/Features";
import Reviews from "./Components/Home/Reviews";
import Numbers from "./Components/Home/Numbers";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup/signup";

export default function Home() {
  return (
   <>
    <Nav />
    <Landing />
    <Features />
    <Reviews />
    <Numbers />
    <Footer />
   </>
  );
}
