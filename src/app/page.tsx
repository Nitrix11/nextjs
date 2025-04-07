import AboutSection from "./components/About";
import PopularDishes from "./components/Dishes";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/ContactPage";
import RecipesSection from "./components/pages/RecipeSection";


export default function Home() {
  return (

    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
     <PopularDishes/>
    <Footer/>
    {/* <Contact/> */}
  <RecipesSection/>
    </>
   
  
  );
}
