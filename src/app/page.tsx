
import PopularDishes from "@/app/components/Dishes";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app//components/HeroSection";
import Navbar from "@/app/components/Navbar";
// import Contact from "./components/pages/ContactPage";
// import RecipesSection from "@/app/components/pages/RecipeSection";

import About from "@/app/components/About";


export default function Home() {
  return (

    <>
    <Navbar/>
    <HeroSection/>
    <About/>
     <PopularDishes/>
    <Footer/> 
    {/* <Contact/>
   <RecipesSection/> */}
    </>
   
  
  );
}
